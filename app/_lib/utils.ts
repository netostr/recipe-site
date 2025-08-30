import { z } from 'zod';

export type ActionState = {
    errors?: {
        [key: string]: string[] | undefined;
    };
    message?: string | null;
    data?: {
        [key: string]: any; // This allows for additional properties
    }

};

type ValidatedActionFunction<S extends z.ZodType<any, any>, T> = (
    data: z.infer<S>,
    formData: FormData
) => Promise<T>;

export function validatedAction<S extends z.ZodType<any, any>, T extends ActionState>(
    schema: S,
    action: ValidatedActionFunction<S, T>
) {
    return async (prevState: ActionState, formData: FormData): Promise<ActionState> => {
        const result = schema.safeParse(Object.fromEntries(formData));
        if (!result.success) {
            return {
                data: Object.fromEntries(formData),
                errors: z.flattenError(result.error).fieldErrors,
            };

        }

        return action(result.data, formData);
    };
}






interface RecaptchaV3Response {
    success: boolean
    score: number
    action: string
    challenge_ts: string
    hostname: string
    "error-codes"?: string[]
}

export async function verifyRecaptchaV3(token: string): Promise<{ success: boolean; score: number }> {
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
        console.error("RECAPTCHA_SECRET_KEY is not set")
        return { success: false, score: 0 }
    }

    try {
        const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${secretKey}&response=${token}`,
        })

        const data: RecaptchaV3Response = await response.json()

        const minScore = 0.5

        return {
            success: data.success && data.score >= minScore,
            score: data.score,
        }
    } catch (error) {
        console.error("reCAPTCHA verification error:", error)
        return { success: false, score: 0 }
    }
}