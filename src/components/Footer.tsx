import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = [
    { href: "#uber-uns", label: t.nav.about },
    { href: "#leistungen", label: t.nav.services },
    { href: "#galerie", label: t.nav.gallery },
    { href: "#offnungszeiten", label: t.nav.hours },
    { href: "#kontakt", label: t.nav.contact },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Erny Spenglerei</h3>
            <p className="text-sm opacity-80 mb-4">{t.footer.tagline}</p>
            <p className="text-xs opacity-60">{t.footer.description}</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">
              {t.footer.navigation}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>+41 61 993 93 93</li>
              <li>info@spenglerei-erny.ch</li>
              <li className="text-xs">
                Ergolzstrasse 29
                <br />
                4460 Gelterkinden, CH
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs opacity-70">
            <p>
              &copy; {new Date().getFullYear()} Erny Spenglerei GmbH. {t.footer.copyright}
            </p>
            <p className="mt-4 md:mt-0">
              Website erstellt mit Framer Motion & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
