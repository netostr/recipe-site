import Image from "next/image";

function BackgroundImageSlider({ images }: { images: string[] }) {
  return (
    <div className="absolute h-full w-full -z-1">
      {images.map((image, index) => {
        return (
          <Image
            key={image}
            src={image}
            alt=""
            fill
            className="object-cover animate-change-bg-img opacity-0"
            style={{ animationDelay: `${4 * index}s` }}
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
        );
      })}
    </div>
  );
}

export default BackgroundImageSlider;
