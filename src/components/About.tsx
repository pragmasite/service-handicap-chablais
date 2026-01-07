import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const stats = [
    { value: "15+", label: t.about.stat1 },
    { value: "500+", label: t.about.stat2 },
    { value: "5/5", label: t.about.stat3 },
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
    <section id="a-propos" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.about.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-2 mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80">
              {t.about.p2}
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-primary">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {t.about.features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl bg-background p-6 border border-border hover:border-primary transition-colors"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
