import DynamicBlurImage from "./DynamicBlurImage";

function BackgroundImageSlider({ images }: { images: string[] }) {
  return (
    <div className="absolute h-full w-full -z-1">
      {images.map((image, index) => {
        return (
          <DynamicBlurImage
            key={image}
            src={image}
            alt=""
            fill
            className="object-cover animate-change-bg-img opacity-0"
            style={{ animationDelay: `${4 * index}s` }}
            sizes="(max-width: 1500px) 100vw, (max-width: 1920px) 80vw, 50vw"
            priority
          />
        );
      })}
    </div>
  );
}

export default BackgroundImageSlider;
