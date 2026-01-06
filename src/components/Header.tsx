import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#uber-uns", label: t.nav.about },
    { href: "#leistungen", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#offnungszeiten", label: t.nav.hours },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="flex flex-col gap-0.5">
          <span className={`font-serif text-xl font-bold ${isScrolled ? "text-primary" : "text-white"}`}>
            Erny Spenglerei
          </span>
          <span className={`text-xs tracking-widest ${isScrolled ? "text-muted-foreground" : "text-white/70"}`}>
            {t.nav.profession}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}

          <div className="flex items-center gap-4 pl-4 border-l border-primary/20">
            <Link
              to={otherLangPath}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <Globe className="h-4 w-4" />
              {otherLang.toUpperCase()}
            </Link>

            <Button
              asChild
              size="sm"
              className="bg-accent hover:bg-accent/90"
            >
              <a href="tel:+41619939393" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t.nav.call}
              </a>
            </Button>
          </div>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-border pt-4 flex gap-2">
              <Link
                to={otherLangPath}
                className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors flex-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>
              <Button
                asChild
                size="sm"
                className="bg-accent hover:bg-accent/90 flex-1"
              >
                <a href="tel:+41619939393" className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
