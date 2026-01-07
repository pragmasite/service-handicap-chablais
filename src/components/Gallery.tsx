import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Gallery = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const images = [
    { src: "/images/img-1.jpg", alt: t.gallery.images[0].title },
    { src: "/images/img-2.jpg", alt: t.gallery.images[1].title },
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
    <section id="galerie" ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-4 sm:grid-cols-2"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
