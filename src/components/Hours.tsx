import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Hours = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const schedule = [
    { hours: "08:00 - 12:00; 13:30 - 17:00" },
    { hours: "08:00 - 12:00; 13:30 - 17:00" },
    { hours: "08:00 - 12:00; 13:30 - 17:00" },
    { hours: "08:00 - 12:00; 13:30 - 17:00" },
    { hours: "08:00 - 12:00; 13:30 - 17:00" },
    { hours: t.hours.closed },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <section id="horaires" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.hours.label}
          </span>
          <h2 className="mt-2 font-serif text-4xl md:text-5xl">
            {t.hours.title}
          </h2>
        </motion.div>

        {/* Hours Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-2xl border bg-card shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg font-semibold">
              {t.hours.header}
            </span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && (
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                    <span
                      className={`font-medium ${
                        isToday ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm ${isClosed ? "text-muted-foreground" : "text-foreground"}`}
                  >
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
