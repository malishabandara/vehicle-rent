import { CheckCircle2 } from "lucide-react";

type Review = {
  name: string;
  rating: number; // 1-5
  comment: string;
  location?: string;
};

const reviews: Review[] = [
  {
    name: "Isuru Lakmal",
    rating: 5,
    comment:
      "Excellent service! Driver was punctual and the car was in great condition. Highly recommended.",
    location: "Colombo",
  },
  {
    name: "Ishara Fernando",
    rating: 5,
    comment:
      "Smooth airport transfer. Booking was easy and communication was fast.",
    location: "Negombo",
  },
  {
    name: "Chamindu Lakshan",
    rating: 4,
    comment:
      "Clean van and friendly driver. Our family trip around Kandy was very comfortable.",
    location: "Kandy",
  },
  {
    name: "Madhavi S.",
    rating: 5,
    comment:
      "Professional and reliable. Got a good price for a full‑day tour. Will book again!",
    location: "Gampaha",
  },
  {
    name: "Kasun Silva",
    rating: 5,
    comment:
      "They arranged a mini bus for our team outing. On time and very safe driving.",
    location: "Matara",
  },
  {
    name: "Malisha Bandara",
    rating: 4,
    comment:
      "Easy WhatsApp booking and quick confirmation. Car was comfortable for long distance.",
    location: "Galle",
  },
];

function Stars({ rating }: { rating: number }) {
  const full = "★★★★★".slice(0, Math.round(rating));
  const empty = "☆☆☆☆☆".slice(Math.round(rating));
  return (
    <div className="font-semibold" aria-label={`${rating} out of 5`}>
      <span className="text-primary">{full}</span>
      <span className="text-muted-foreground">{empty}</span>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="section border-y bg-gradient-to-b from-background to-secondary/30" id="reviews">
      <div className="container-tight">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Customer Reviews</h2>
            <p className="text-muted-foreground mt-2">
              What our customers say about traveling with CNS Travels.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <article
              key={r.name + r.comment.slice(0, 12)}
              className="group relative overflow-hidden rounded-2xl border bg-card/60 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{r.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium text-primary ring-1 ring-primary/30">
                      <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                      Verified
                    </span>
                  </div>
                  {r.location ? (
                    <p className="text-xs text-muted-foreground mt-0.5">{r.location}</p>
                  ) : null}
                </div>
                <Stars rating={r.rating} />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">“{r.comment}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
