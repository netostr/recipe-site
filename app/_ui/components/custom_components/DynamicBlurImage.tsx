import Image, { ImageProps } from "next/image";
import { getPlaiceholder } from "plaiceholder";
import fs from "fs";
import path from "path";
import { readFile } from "fs/promises";

interface DynamicBlurImageProps extends ImageProps {
  src: string;
  alt: string;
}

async function DynamicBlurImage({ src, alt, ...rest }: DynamicBlurImageProps) {
  let buffer: Buffer<ArrayBufferLike>;

  const filePath = path.join(process.cwd(), "public", src);
  if (fs.existsSync(filePath)) {
    buffer = await readFile(filePath);
  } else {
    buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );
  }
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={base64}
      {...rest}
    />
  );
}

export default DynamicBlurImage;
