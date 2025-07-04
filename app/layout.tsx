import type { Metadata } from "next";
import "@/app/_ui/styles/globals.css";
import { caveat } from "@/app/_ui/styles/fonts";
import Header from "@/app/_ui/components/Header";
import Footer from "@/app/_ui/components/Footer";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Recipes i liked",
  description: "Ваш личный блокнот рецептов — сохраняйте, организуйте и вдохновляйтесь! Создайте свою уникальную кулинарную коллекцию. Сохраняйте любимые рецепты, добавляйте свои заметки и готовьте с удовольствием.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' suppressHydrationWarning className="scroll-smooth scroll-pt-16">
      <body
        className={`${caveat.className} antialiased text-2xl min-h-screen flex flex-col gap-5 dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-100 text-zinc-900`}
      >
        <ThemeProvider
          attribute='class'
          disableTransitionOnChange
        >
          <Header />
          <main className="grow flex flex-col justify-center items-center gap-5 px-5">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>

    </html>
  );
}
