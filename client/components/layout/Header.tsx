import { Link } from "react-router-dom";
import { Car, Phone, Menu } from "lucide-react";
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
        <a href="#home" className="hover:text-primary transition-colors">Home</a>
      </li>
      <li>
        <a href="#fleet" className="hover:text-primary transition-colors">Fleet</a>
      </li>
      <li>
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
      </li>
      <li>
        <a href="#about" className="hover:text-primary transition-colors">About</a>
      </li>
      <li>
        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
      </li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/50">
      <div className="container-tight flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow">
            <Car className="h-5 w-5" />
          </span>
          <div className="font-extrabold tracking-tight leading-none">
            <span className="text-lg">CNS</span>
            <span className="text-primary"> Travels</span>
          </div>
        </Link>

        <nav className="hidden md:block">
          <NavLinks />
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
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
