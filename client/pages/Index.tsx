import { useEffect, useMemo, useState, type ReactNode } from "react";
import VehicleCard, { type Vehicle } from "@/components/VehicleCard";
import HeroSlider from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Car,
  Bus,
  Truck,
  ShieldCheck,
  Clock4,
  Map,
  Mail,
  PhoneCall,
  Plane,
  Users,
  Briefcase,
  Package,
  CheckCircle2,
} from "lucide-react";
import type { ContactRequest, ContactResponse } from "@shared/api";

export default function Index() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState<string>("");
  const [waOpen, setWaOpen] = useState(false);
  const [category, setCategory] = useState<"car" | "van" | "bus" | "lorry">(
    "car",
  );

  useEffect(() => {
    const usp = new URLSearchParams(window.location.search);
    const v = usp.get("vehicle");
    if (v) setSelectedVehicle(v);
  }, []);

  const vehicles: Vehicle[] = useMemo(
    () => [
      {
        title: "Nano Car",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F41ff4124f72b435790cc5813d0a951c0?format=webp&width=800",
        category: "car",
        specs: { seats: "4-5 Passengers", ac: true, transmission: "Auto" },
        tags: ["Adventure"],
      },
      {
        title: "Mini Car",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F41ff4124f72b435790cc5813d0a951c0?format=webp&width=800",
        category: "car",
        specs: { seats: "4-5 Passengers", ac: true, transmission: "Auto" },
        tags: ["Adventure"],
      },
      {
        title: "Wagon R",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F41ff4124f72b435790cc5813d0a951c0?format=webp&width=800",
        category: "car",
        specs: { seats: "4-5 Passengers", ac: true, transmission: "Auto" },
        tags: ["Adventure"],
      },
      {
        title: "Sedan Car",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F3f1bf1fbc3d84dcb90fa5ec8eec33228?format=webp&width=800",
        category: "car",
        specs: { seats: "4 Passengers", ac: true, transmission: "Auto" },
        tags: ["Airport", "City Ride"],
      },
      {
        title: "Luxury Car",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F9f7568129cbd4162baa5a67db6dd49aa?format=webp&width=800",
        category: "car",
        specs: { seats: "4 Passengers", ac: true, transmission: "Auto" },
        tags: ["Business", "Premium"],
      },
      {
        title: "Mini Van",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F558d62c84be2428ba7ad67c8649f60a8?format=webp&width=800",
        category: "van",
        specs: { seats: "10-15 Passengers", ac: true, transmission: "Manual" },
        tags: ["Group", "Tours"],
      },
      {
        title: "Non AC Van",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F3283cd5bb6c74cb1b15166afab8a4e68?format=webp&width=800",
        category: "van",
        specs: { seats: "10-15 Passengers", ac: true, transmission: "Manual" },
        tags: ["Group", "Tours"],
      },
      {
        title: "AC Van",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F8c9e77cbef0d4b90b1e8fe29e498d736?format=webp&width=800",
        category: "van",
        specs: { seats: "10-15 Passengers", ac: true, transmission: "Manual" },
        tags: ["Group", "Tours"],
      },
      {
        title: "KDH Flat Roof",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Ffb3c36f78e09456a8cc7d19ad9685f99?format=webp&width=800",
        category: "van",
        specs: { seats: "10-15 Passengers", ac: true, transmission: "Manual" },
        tags: ["Group", "Tours"],
      },
      {
        title: "KDH High Roof",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F9e3c5e8b89ed4c95bd72b1436e7d6c72?format=webp&width=800",
        category: "van",
        specs: { seats: "10-15 Passengers", ac: true, transmission: "Manual" },
        tags: ["Group", "Tours"],
      },
      {
        title: "Bus",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F696ec1a1456b40aa8360bef1d0c9a933?format=webp&width=800",
        category: "bus",
        specs: { seats: "20-30 Passengers", ac: true, transmission: "Manual" },
        tags: ["Events", "Corporate"],
      },
      {
        title: "AC Bus",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Fab759887ccd440d68814445782e31958?format=webp&width=800",
        category: "bus",
        specs: { seats: "40+ Passengers", ac: true, transmission: "Manual" },
        tags: ["Long Trips", "Comfort"],
      },
      {
        title: "Dimo Batta 7ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Fbf9d0a36a1304cbd80656e8dce43ba53?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Dimo lokka 8.5ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Fbd57c45c6ad9424c9c09bb3ede428858?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Lorry 10.5ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F95106114e27e4395bb93d82e6c9d7ba6?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Lorry 12.5ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F10d915ac218444aeacd809608ceb70d1?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Lorry 14.5 ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F7363e69877af4030937051416fe99ce8?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Lorry 16.5ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F93d71fea63684e04b9f03576d291565b?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Lorry 18.5 ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F239735fd70c14d63afbfe7582c3e307b?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
      {
        title: "Lorry 20ft",
        image:
          "https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2F4a6a9330ebc344e6a7add1e2cb1c583c?format=webp&width=800",
        category: "lorry",
        specs: {
          seats: "Crew 2",
          ac: false,
          transmission: "Manual",
          luggage: "Moves",
        },
        tags: ["Cargo", "Moves"],
      },
    ],
    [],
  );

  const heroImages = useMemo(() => {
    const categories = [
      { key: "car", label: "Cars" },
      { key: "van", label: "Vans" },
      { key: "bus", label: "Buses" },
      { key: "lorry", label: "Lorries" },
    ] as const;
    return categories.map((c) => {
      const m = vehicles.find((v) => v.category === c.key);
      return {
        src: m?.image || "/placeholder.svg",
        alt: c.label,
        label: c.label,
      };
    });
  }, [vehicles]);

  async function submitContact(form: ContactRequest) {
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = (await res.json()) as ContactResponse;
      if (data.ok) setStatus("ok");
    } catch (e) {
      setStatus("error");
      setError("Could not send message. Please try again.");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative section pt-24" id="home">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Fab759887ccd440d68814445782e31958?format=webp&width=800"
            alt="Driver in car"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,214,10,.2),transparent_50%)]" />
        </div>
        <div className="container-tight grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Your Trusted Wheels for Every Journey
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              CNS Travels provides reliable cars, vans, buses and lorries with
              professional drivers. Airport transfers, tours and logistics —
              wherever you go in Sri Lanka.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#fleet">
                <Button
                  size="lg"
                  className="btn-gradient text-primary-foreground"
                >
                  Browse Fleet
                </Button>
              </a>
              <a href="tel:+94718885557">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Get a Quote
                </Button>
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-primary" /> Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock4 className="h-5 w-5 text-primary" /> 24/7 Service
              </div>
              <div className="flex items-center gap-2">
                <Map className="h-5 w-5 text-primary" /> Islandwide
              </div>
            </div>
          </div>
          <div className="relative">
            <HeroSlider images={heroImages} />
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section" id="fleet">
        <div className="container-tight">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Choose Your Perfect Ride
              </h2>
              <p className="text-muted-foreground mt-2">
                Cars, vans, buses and lorries — maintained and ready.
              </p>
            </div>
          </div>
          <div className="mb-6 flex flex-wrap gap-3">
            {(
              [
                { key: "lorry", label: "Lorries" },
                { key: "van", label: "Vans" },
                { key: "car", label: "Cars" },
                { key: "bus", label: "Buses" },
              ] as const
            ).map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={
                  "rounded-full border px-4 py-2 text-sm transition " +
                  (category === c.key
                    ? "bg-primary text-primary-foreground border-primary"
                    : "hover:bg-muted")
                }
                type="button"
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicles
              .filter((v) => v.category === category)
              .map((v) => (
                <VehicleCard
                  key={v.title}
                  v={v}
                  onQuote={(title) => setSelectedVehicle(title)}
                  onWhatsApp={(title) => {
                    setSelectedVehicle(title);
                    setWaOpen(true);
                  }}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        className="section border-y bg-gradient-to-b from-background to-secondary/40"
        id="services"
      >
        <div className="container-tight grid gap-8 md:grid-cols-4">
          <Feature
            icon={<Plane className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="Airport Transfers"
            desc="On-time pickups and drop-offs to CMB and domestic airports."
          />
          <Feature
            icon={<Users className="h-6 w-6 text-primary" aria-hidden="true" />}
            title="Group Tours"
            desc="Comfortable vans and buses for families and teams."
          />
          <Feature
            icon={
              <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
            }
            title="Corporate Travel"
            desc="Executive vehicles with professional chauffeurs."
          />
          <Feature
            icon={
              <Package className="h-6 w-6 text-primary" aria-hidden="true" />
            }
            title="Logistics & Moves"
            desc="Box lorries and trucks for safe cargo transport."
          />
        </div>
      </section>

      {/* About */}
      <section
        className="section border-y bg-gradient-to-b from-background to-secondary/30"
        id="about"
      >
        <div className="container-tight grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/30">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" /> Trusted
              transport partner
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">
              About CNS Travels
            </h2>
            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              We are a customer‑first transport partner with a well‑maintained
              fleet and experienced drivers. From quick city rides to multi‑day
              tours, we focus on comfort, safety, and transparent pricing.
            </p>
            <ul className="mt-6 grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />{" "}
                Clean, air‑conditioned vehicles
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />{" "}
                Professional, English‑speaking drivers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />{" "}
                Flexible hourly, daily or per‑km packages
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+94718885557"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"
              >
                Contact Form
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F17c7b7d3249040d5b2a0a3b0be9c9a63%2F617bf586c7094aa59523e178358655af?format=webp&width=800"
              alt="CNS Travels — cars for rent"
              className="w-full rounded-xl drop-shadow-2xl"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section border-t" id="contact">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold">
            Your Journey Starts Here
          </h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Tell us your travel dates and preferences. We will respond promptly
            with a tailored quote.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <ContactForm selectedVehicle={selectedVehicle} />
            </div>
            <aside className="space-y-4 rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Contact Details</h3>
              <p className="text-sm text-muted-foreground">
                Available 24/7 for bookings and inquiries.
              </p>
              <div className="space-y-3 text-sm not-italic">
                <p className="flex items-center gap-2">
                  <PhoneCall className="h-4 w-4 text-primary" /> +94 71 888 5557
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" /> info@cnstravels.lk
                </p>
              </div>
              <a
                href="https://wa.me/94718885557?text=Hello%20CNS%20Travels"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"
              >
                WhatsApp
              </a>
              <div className="mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.7726645765065!2d80.6209131747643!3d7.4903348111740495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae345397239096b%3A0x511720e6cd0fbb12!2sChanaka%20Inn!5e0!3m2!1sen!2slk!4v1759126780369!5m2!1sen!2slk"
                  width="400"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-md"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Dialog open={waOpen} onOpenChange={setWaOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>WhatsApp Inquiry</DialogTitle>
            <DialogDescription>
              Send us your trip details on WhatsApp. We usually reply within
              minutes.
            </DialogDescription>
          </DialogHeader>
          <WhatsAppForm
            selectedVehicle={selectedVehicle}
            onSubmit={(f) => {
              const phoneNumber = "94718885557";
              const lines = [
                "Hello CNS Travels,",
                `Name: ${f.name || ""}`,
                `Phone: ${f.phone || ""}`,
                `Vehicle: ${f.vehicleType || ""}`,
                `Pickup: ${f.pickupLocation || ""}`,
                `Drop-off: ${f.dropoffLocation || ""}`,
                `Dates: ${f.startDate || ""} to ${f.endDate || ""}`,
                f.message ? `Message: ${f.message}` : "",
              ].filter(Boolean);
              const text = lines.join("\n");
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
              window.open(url, "_blank");
              setWaOpen(false);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border bg-card/60 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

type WAForm = {
  name: string;
  phone?: string;
  vehicleType?: string;
  pickupLocation?: string;
  dropoffLocation?: string;
  startDate?: string;
  endDate?: string;
  message?: string;
};

function WhatsAppForm({
  selectedVehicle,
  onSubmit,
}: {
  selectedVehicle: string;
  onSubmit: (form: WAForm) => void;
}) {
  const [form, setForm] = useState<WAForm>({
    name: "",
    phone: "",
    vehicleType: selectedVehicle || "",
    pickupLocation: "",
    dropoffLocation: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  useEffect(() => {
    if (selectedVehicle)
      setForm((f) => ({ ...f, vehicleType: selectedVehicle }));
  }, [selectedVehicle]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Vehicle Type">
          <select
            value={form.vehicleType}
            onChange={(e) => setForm({ ...form, vehicleType: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          >
            <option value="">Select vehicle</option>
            <option>Sedan Car</option>
            <option>Luxury Car</option>
            <option>Passenger Van</option>
            <option>Mini Bus</option>
            <option>Tour Coach</option>
            <option>Box Lorry</option>
            <option>Flatbed Truck</option>
            <option>Double Cab</option>
          </select>
        </Field>
        <Field label="Pickup Location">
          <input
            value={form.pickupLocation}
            onChange={(e) =>
              setForm({ ...form, pickupLocation: e.target.value })
            }
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Drop-off Location">
          <input
            value={form.dropoffLocation}
            onChange={(e) =>
              setForm({ ...form, dropoffLocation: e.target.value })
            }
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Start Date">
          <input
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="End Date">
          <input
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
            />
          </Field>
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" className="btn-gradient text-primary-foreground">
          Send Message
        </Button>
      </div>
    </form>
  );
}

function ContactForm({ selectedVehicle }: { selectedVehicle: string }) {
  const [form, setForm] = useState<WAForm>({
    name: "",
    phone: "",
    vehicleType: selectedVehicle || "",
    pickupLocation: "",
    dropoffLocation: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  useEffect(() => {
    if (selectedVehicle)
      setForm((f) => ({ ...f, vehicleType: selectedVehicle }));
  }, [selectedVehicle]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const phoneNumber = "94718885557";
        const lines = [
          "Hello CNS Travels,",
          `Name: ${form.name || ""}`,
          `Phone: ${form.phone || ""}`,
          `Vehicle: ${form.vehicleType || ""}`,
          `Pickup: ${form.pickupLocation || ""}`,
          `Drop-off: ${form.dropoffLocation || ""}`,
          `Dates: ${form.startDate || ""} to ${form.endDate || ""}`,
          form.message ? `Message: ${form.message}` : "",
        ].filter(Boolean);
        const text = lines.join("\n");
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
      }}
      className="rounded-xl border bg-card p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name" required>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Phone">
          <input
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Vehicle Type">
          <select
            value={form.vehicleType}
            onChange={(e) => setForm({ ...form, vehicleType: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          >
            <option value="">Select vehicle</option>
            <option>Dimo Batta 7ft</option>
            <option>Dimo lokka 8.5ft</option>
            <option>Lorry 10.5ft</option>
            <option>Lorry 12.5ft</option>
            <option>Lorry 14.5 ft</option>
            <option>Lorry 16.5ft</option>
            <option>Lorry 18.5 ft</option>
            <option>Lorry 20 ft</option>
            <option>Dolphin Van</option>
            <option>Caravan</option>
            <option>Mazda Van</option>
            <option>KDH Flat Roof</option>
            <option>KDH High Roof</option>
            <option>Sedan Car</option>
            <option>Luxury Car</option>
            <option>Double Cab</option>
            <option>Mini Bus</option>
            <option>Tour Coach</option>
          </select>
        </Field>
        <Field label="Pickup Location">
          <input
            value={form.pickupLocation}
            onChange={(e) =>
              setForm({ ...form, pickupLocation: e.target.value })
            }
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Drop-off Location">
          <input
            value={form.dropoffLocation}
            onChange={(e) =>
              setForm({ ...form, dropoffLocation: e.target.value })
            }
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Start Date">
          <input
            type="date"
            value={form.startDate}
            onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="End Date">
          <input
            type="date"
            value={form.endDate}
            onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message">
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-md border bg-background px-3 py-2 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
            />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button type="submit" className="btn-gradient text-primary-foreground">
          Send Message
        </Button>
        <a
          href="#home"
          className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm"
        >
          Back to top
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted-foreground">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}
