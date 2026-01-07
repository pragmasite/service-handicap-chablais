import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Contact = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 24 472 13 23",
      href: "tel:+41244721323",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "shchablais@gmail.com",
      href: "mailto:shchablais@gmail.com",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rue de St-Jean 1C, 1893 Muraz (Collombey)",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 mb-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  className="group flex gap-4 hover:bg-background p-4 rounded-lg transition-colors"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <Button asChild size="lg" className="w-full gap-2">
                <a href="tel:+41244721323">
                  <Phone className="h-5 w-5" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-border shadow-soft h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2766.9284088247356!2d8.265647!3d46.3333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47901234567890%3A0x123456789abcdef!2sRue%20de%20St-Jean%201C%2C%201893%20Muraz%2C%20Switzerland!5e0!3m2!1sfr!2sch!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Handicap Chablais location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
