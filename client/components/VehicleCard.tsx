import { Button } from "@/components/ui/button";
import { Users, Gauge, Fuel, CheckCircle2 } from "lucide-react";

export type Vehicle = {
  title: string;
  image: string;
  specs: {
    seats?: string;
    luggage?: string;
    ac?: boolean;
    transmission?: string;
  };
  tags?: string[];
};

export default function VehicleCard({ v, onQuote }: { v: Vehicle; onQuote: (vehicle: string) => void }) {
  return (
    <div className="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={v.image}
          alt={v.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {(v.tags ?? []).map((t) => (
            <span key={t} className="rounded-md bg-black/70 px-2 py-1 text-xs text-white backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
        <div className="grid grid-cols-3 gap-3 text-xs text-muted-foreground">
          {v.specs.seats && (
            <div className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary"/> {v.specs.seats}</div>
          )}
          {v.specs.transmission && (
            <div className="flex items-center gap-1.5"><Gauge className="h-4 w-4 text-primary"/> {v.specs.transmission}</div>
          )}
          {v.specs.luggage && (
            <div className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary"/> {v.specs.luggage}</div>
          )}
          {typeof v.specs.ac !== "undefined" && (
            <div className="flex items-center gap-1.5"><Fuel className="h-4 w-4 text-primary"/> {v.specs.ac ? "A/C" : "Non A/C"}</div>
          )}
        </div>
        <div className="mt-4 flex gap-3">
          <button
            onClick={() => onQuote(v.title)}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Quote
          </button>
          <a
            href="#contact"
            onClick={() => onQuote(v.title)}
            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
