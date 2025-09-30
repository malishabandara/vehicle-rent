import { Facebook, Instagram, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container-tight py-12 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">CNS Travels</h3>
          <p className="text-sm text-muted-foreground">
            Reliable vehicles with professional drivers for tours, airport
            transfers and corporate travel across Sri Lanka.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-primary" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#fleet">
                Fleet
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm not-italic">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +94 71 888 555 7
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@cnstravels.lk
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Sri Lanka
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Follow</h4>
          <div className="flex gap-3">
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
              href="https://www.facebook.com/share/19gSu6cyQr/"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
              href="#"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
              href="#"
              aria-label="Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container-tight py-6 text-xs text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} NextGen Web Works. All rights reserved. +94 78 723 9394</p>
          <p>Privacy · Terms</p>
        </div>
      </div>
    </footer>
  );
}
