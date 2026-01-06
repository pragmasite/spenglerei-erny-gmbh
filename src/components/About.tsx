import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.about.stat1, value: "20+" },
    { label: t.about.stat2, value: "500+" },
    { label: t.about.stat3, value: "98%" },
  ];

  return (
    <section id="uber-uns" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.about.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.about.title1}
            <br />
            <span className="text-accent">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg shadow-soft border border-border"
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-foreground/60 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg shadow-soft border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="font-serif text-lg font-bold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-sm text-foreground/60">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
