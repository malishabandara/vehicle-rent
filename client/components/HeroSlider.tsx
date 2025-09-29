import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type HeroSlide = { src: string; alt: string; label?: string };

export default function HeroSlider({ images }: { images: HeroSlide[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(false);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelected(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    if (!embla) return;
    const id = setInterval(() => {
      if (!hovered) embla.scrollNext();
    }, 3200);
    return () => clearInterval(id);
  }, [embla, hovered]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  return (
    <div className="group relative rounded-2xl bg-black/20 p-2 shadow-2xl backdrop-blur">
      <div
        className="overflow-hidden rounded-xl"
        ref={emblaRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex">
          {images.map((img, i) => (
            <div className="min-w-0 flex-[0_0_100%]" key={i}>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-contain drop-shadow-2xl"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-primary via-yellow-400 to-primary/60 opacity-80" />
                {img.label ? (
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur">
                    {img.label}
                  </span>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Previous"
        onClick={scrollPrev}
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 ring-1 ring-white/20 transition group-hover:opacity-100 hover:bg-black/70"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next"
        onClick={scrollNext}
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white opacity-0 ring-1 ring-white/20 transition group-hover:opacity-100 hover:bg-black/70"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="pointer-events-none absolute -bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <span
            key={i}
            className={
              "h-1.5 w-6 rounded-full transition-colors " +
              (i === selected ? "bg-primary" : "bg-white/30")
            }
          />
        ))}
      </div>
    </div>
  );
}
