import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 61 993 93 93",
      href: "tel:+41619939393",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "info@spenglerei-erny.ch",
      href: "mailto:info@spenglerei-erny.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Ergolzstrasse 29, 4460 Gelterkinden, CH",
      href: "https://maps.google.com/?q=Ergolzstrasse+29,+4460+Gelterkinden",
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-primary font-semibold">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.contact.title1}
            <br />
            <span className="text-accent">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-4 p-6 bg-card rounded-lg shadow-soft border border-border hover:border-primary/50 hover:shadow-medium transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary uppercase tracking-wide">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium group-hover:text-accent transition-colors">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="tel:+41619939393">
                  <Phone className="h-5 w-5 mr-2" />
                  {t.contact.callNow}
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-soft border border-border h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.1234567890123!2d7.856583!3d47.466578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791c0e0e0e0e0e1%3A0x1234567890abcdef!2sErgolzstrasse%2029%2C%204460%20Gelterkinden!5e0!3m2!1sen!2sch!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
