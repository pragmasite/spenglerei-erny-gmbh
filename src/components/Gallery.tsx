import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      de: "Dachrinne und Konstruktion",
      en: "Gutter & Frame",
      src: "/images/img-1.jpg",
    },
    {
      de: "Fallrohr Detail",
      en: "Downspout Detail",
      src: "/images/img-2.jpg",
    },
    {
      de: "Dachziegel Auswahl",
      en: "Roof Tile Selection",
      src: "/images/img-3.jpg",
    },
    {
      de: "Metallbearbeitung",
      en: "Metal Work",
      src: "/images/img-5.jpg",
    },
    {
      de: "Dachsanierung",
      en: "Roof Renovation",
      src: "/images/img-6.jpg",
    },
  ];

  const getDescription = (index: number) => {
    const lang = t.hours.days[0] === "Montag" ? "de" : "en"; // Simple language detection
    return images[index][lang as keyof typeof images[number]];
  };

  return (
    <section id="galerie" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedIndex(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={getDescription(index)}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-semibold text-white">
                  {getDescription(index)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl max-h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedIndex].src}
                alt={getDescription(selectedIndex)}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <p className="mt-4 text-center text-white text-lg font-semibold">
                {getDescription(selectedIndex)}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
