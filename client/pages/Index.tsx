import { useEffect, useMemo, useState } from "react";
import VehicleCard, { type Vehicle } from "@/components/VehicleCard";
import { Button } from "@/components/ui/button";
import { Car, Bus, Truck, Van, ShieldCheck, Clock4, Map, Mail, PhoneCall } from "lucide-react";
import type { ContactRequest, ContactResponse } from "@shared/api";

export default function Index() {
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const usp = new URLSearchParams(window.location.search);
    const v = usp.get("vehicle");
    if (v) setSelectedVehicle(v);
  }, []);

  const vehicles: Vehicle[] = useMemo(() => [
    {
      title: "Sedan Car",
      image:
        "https://images.unsplash.com/photo-1549921296-3a6b3c2bba94?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "4 Passengers", ac: true, transmission: "Auto" },
      tags: ["Airport", "City Ride"],
    },
    {
      title: "Luxury Car",
      image:
        "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "4 Passengers", ac: true, transmission: "Auto" },
      tags: ["Business", "Premium"],
    },
    {
      title: "Passenger Van",
      image:
        "https://images.unsplash.com/photo-1608138273951-95d0c7b4f2bc?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "10-15 Passengers", ac: true, transmission: "Manual" },
      tags: ["Group", "Tours"],
    },
    {
      title: "Mini Bus",
      image:
        "https://images.unsplash.com/photo-1600240644455-a0c124c0b4d6?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "20-30 Passengers", ac: true, transmission: "Manual" },
      tags: ["Events", "Corporate"],
    },
    {
      title: "Tour Coach",
      image:
        "https://images.unsplash.com/photo-1521523896730-07aa75a5fa8b?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "40+ Passengers", ac: true, transmission: "Manual" },
      tags: ["Long Trips", "Comfort"],
    },
    {
      title: "Box Lorry",
      image:
        "https://images.unsplash.com/photo-1542326237-94b1c5a538d8?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "Crew 2", ac: false, transmission: "Manual", luggage: "Moves" },
      tags: ["Cargo", "Moves"],
    },
    {
      title: "Flatbed Truck",
      image:
        "https://images.unsplash.com/photo-1621905251430-30c1d79c0b3b?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "Crew 2", ac: false, transmission: "Manual" },
      tags: ["Logistics"],
    },
    {
      title: "Double Cab",
      image:
        "https://images.unsplash.com/photo-1541447271487-09612fda5f8c?q=80&w=1600&auto=format&fit=crop",
      specs: { seats: "4-5 Passengers", ac: true, transmission: "Auto" },
      tags: ["Adventure"],
    },
  ], []);

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
            src="https://images.unsplash.com/photo-1537744864611-b3d560090d48?q=80&w=1920&auto=format&fit=crop"
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
              <a href="#fleet"><Button size="lg" className="btn-gradient text-primary-foreground">Browse Fleet</Button></a>
              <a href="#contact"><Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"><PhoneCall className="mr-2 h-4 w-4"/>Get a Quote</Button></a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary"/> Insured</div>
              <div className="flex items-center gap-2"><Clock4 className="h-5 w-5 text-primary"/> 24/7 Service</div>
              <div className="flex items-center gap-2"><Map className="h-5 w-5 text-primary"/> Islandwide</div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1549921296-3a6b3c2bba94?q=80&w=800&auto=format&fit=crop" alt="Sedan" />
              <img className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1608138273951-95d0c7b4f2bc?q=80&w=800&auto=format&fit=crop" alt="Van" />
              <img className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1600240644455-a0c124c0b4d6?q=80&w=800&auto=format&fit=crop" alt="Mini bus" />
              <img className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1542326237-94b1c5a538d8?q=80&w=800&auto=format&fit=crop" alt="Lorry" />
            </div>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="section" id="fleet">
        <div className="container-tight">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Choose Your Perfect Ride</h2>
              <p className="text-muted-foreground mt-2">Cars, vans, buses and lorries — maintained and ready.</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {vehicles.map((v) => (
              <VehicleCard key={v.title} v={v} onQuote={(title) => setSelectedVehicle(title)} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section border-y bg-gradient-to-b from-background to-secondary/40" id="services">
        <div className="container-tight grid gap-8 md:grid-cols-4">
          <Feature icon={<Car className=\"h-6 w-6 text-primary\"/>} title="Airport Transfers" desc="On-time pickups and drop-offs to CMB and domestic airports." />
          <Feature icon={<Van className=\"h-6 w-6 text-primary\"/>} title="Group Tours" desc="Comfortable vans and buses for families and teams." />
          <Feature icon={<Bus className=\"h-6 w-6 text-primary\"/>} title="Corporate Travel" desc="Executive vehicles with professional chauffeurs." />
          <Feature icon={<Truck className=\"h-6 w-6 text-primary\"/>} title="Logistics & Moves" desc="Box lorries and trucks for safe cargo transport." />
        </div>
      </section>

      {/* About */}
      <section className="section" id="about">
        <div className="container-tight grid gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold">About CNS Travels</h2>
            <p className="mt-4 text-muted-foreground">
              We are a customer-first transport partner with a well-maintained
              fleet and experienced drivers. From short city rides to multi-day
              tours, we focus on comfort, safety and transparent pricing.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-2"><span className="text-primary">•</span> Clean, air‑conditioned vehicles</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Professional, English-speaking drivers</li>
              <li className="flex gap-2"><span className="text-primary">•</span> Flexible hourly, daily or per‑km packages</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1621905251425-43a5b7d18f67?q=80&w=1600&auto=format&fit=crop"
              alt="Moving and travel"
              className="rounded-xl border shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section border-t" id="contact">
        <div className="container-tight">
          <h2 className="text-3xl md:text-4xl font-bold">Your Journey Starts Here</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">Tell us your travel dates and preferences. We will respond promptly with a tailored quote.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <ContactForm
                selectedVehicle={selectedVehicle}
                onSubmit={submitContact}
                status={status}
                error={error}
              />
            </div>
            <aside className="space-y-4 rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Contact Details</h3>
              <p className="text-sm text-muted-foreground">Available 24/7 for bookings and inquiries.</p>
              <div className="space-y-3 text-sm not-italic">
                <p className="flex items-center gap-2"><PhoneCall className="h-4 w-4 text-primary"/> +94</p>
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary"/> info@cnstravels.lk</p>
              </div>
              <a href="#" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm">WhatsApp</a>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/15 text-primary">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}

function ContactForm({ selectedVehicle, onSubmit, status, error }: {
  selectedVehicle: string;
  onSubmit: (form: ContactRequest) => Promise<void>;
  status: "idle" | "sending" | "ok" | "error";
  error: string;
}) {
  const [form, setForm] = useState<ContactRequest>({
    name: "",
    email: "",
    phone: "",
    vehicleType: selectedVehicle || "",
    pickupLocation: "",
    dropoffLocation: "",
    startDate: "",
    endDate: "",
    message: "",
  });

  useEffect(() => {
    if (selectedVehicle) setForm((f) => ({ ...f, vehicleType: selectedVehicle }));
  }, [selectedVehicle]);

  const disabled = status === "sending";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
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
        <Field label="Email" required>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
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
            onChange={(e) => setForm({ ...form, pickupLocation: e.target.value })}
            className="h-11 w-full rounded-md border bg-background px-3 outline-none ring-offset-background focus:ring-2 focus:ring-primary"
          />
        </Field>
        <Field label="Drop-off Location">
          <input
            value={form.dropoffLocation}
            onChange={(e) => setForm({ ...form, dropoffLocation: e.target.value })}
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
      {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
      <div className="mt-6 flex flex-wrap gap-3">
        <Button disabled={disabled} className="btn-gradient text-primary-foreground">
          {status === "sending" ? "Sending..." : status === "ok" ? "Sent ✓" : "Send Message"}
        </Button>
        <a href="#home" className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm">Back to top</a>
      </div>
    </form>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-muted-foreground">{label}{required ? " *" : ""}</span>
      {children}
    </label>
  );
}