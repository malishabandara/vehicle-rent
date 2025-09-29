import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 text-sm">
      <li>
        <a href="#home" className="hover:text-primary transition-colors">
          Home
        </a>
      </li>
      <li>
        <a href="#fleet" className="hover:text-primary transition-colors">
          Fleet
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-primary transition-colors">
          Services
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-primary transition-colors">
          About
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-primary transition-colors">
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F17c7b7d3249040d5b2a0a3b0be9c9a63%2F67d24b086652452db60b0b810825cce3?format=webp&width=256"
            alt="CNS Travels"
            className="h-14 w-auto object-contain drop-shadow"
          />
        </a>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+94718885557">
            <Button className="btn-gradient text-primary-foreground shadow-md">
              <Phone className="mr-2 h-4 w-4" /> Get a Quote
            </Button>
          </a>
        </div>

        <button
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container-tight py-4">
            <NavLinks />
          </div>
        </div>
      )}
    </header>
  );
}
