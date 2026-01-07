import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Services = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

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
    <section id="prestations" ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.services.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.services.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.services.description}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl bg-background border border-border p-8 hover:border-primary hover:shadow-medium transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
