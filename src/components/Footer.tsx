import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.aboutUs, href: "#a-propos" },
    { label: t.nav.services, href: "#prestations" },
    { label: t.nav.gallery, href: "#galerie" },
    { label: t.nav.hours, href: "#horaires" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-2">
              Service Handicap
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-muted-foreground">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 Service Handicap Chablais. {t.footer.copyright}</p>
          <p className="text-xs mt-4 md:mt-0">
            Service de transport spécialisé pour personnes à mobilité réduite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
