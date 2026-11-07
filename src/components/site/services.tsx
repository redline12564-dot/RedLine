"use client";

import { useQuery } from "@tanstack/react-query";
import { Truck, Zap, Rocket, Package, Banknote, RotateCcw, ArrowLeft, ArrowRight, Boxes, Star, Sparkles, ShieldCheck } from "lucide-react";
import { apiGet } from "@/lib/api";
import { useT } from "@/lib/i18n";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/shared/section-reveal";

type ServiceItem = {
  id?: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  descriptionEn?: string;
  ctaTextAr?: string;
  ctaTextEn?: string;
  icon: string;
};

const ICONS: Record<string, any> = {
  truck: Truck,
  zap: Zap,
  rocket: Rocket,
  package: Package,
  banknote: Banknote,
  "rotate-ccw": RotateCcw,
  boxes: Boxes,
  star: Star,
  sparkles: Sparkles,
  "shield-check": ShieldCheck,
};

const FALLBACK: ServiceItem[] = [
  { name: "Standard", nameAr: "عادي", description: "توصيل خلال 48-96 ساعة بأفضل الأسعار", descriptionEn: "Delivery within 48-96 hours at best prices", icon: "truck" },
  { name: "Express", nameAr: "ممتاز", description: "توصيل خلال 24-48 ساعة مع أولوية الشحن", descriptionEn: "Delivery within 24-48 hours with priority shipping", icon: "zap" },
  { name: "Same Day", nameAr: "نفس اليوم", description: "توصيل في نفس اليوم داخل القاهرة الكبرى", descriptionEn: "Same day delivery within Greater Cairo", icon: "rocket" },
  { name: "Freight", nameAr: "شحن ثقيل", description: "شحن البضائع والأغراض الثقيلة والكميات", descriptionEn: "Heavy cargo, freight and commercial shipments", icon: "package" },
  { name: "Cash on Delivery", nameAr: "دفع عند الاستلام", description: "استلام قيمة الشحنة عند التسليم للمستلم", descriptionEn: "Collect shipment value upon delivery to recipient", icon: "banknote" },
  { name: "Returns", nameAr: "مرتجعات", description: "استرجاع الشحنات المرتجعة من العملاء", descriptionEn: "Management and pickup of customer returns", icon: "rotate-ccw" },
];

const SERVICE_KEY_BY_NAME: Record<string, string> = {
  "Standard": "standard",
  "Express": "express",
  "Same Day": "sameday",
  "Freight": "freight",
  "Cash on Delivery": "cod",
  "Returns": "returns",
};

export function Services() {
  const { t, isAr } = useT();
  const { data } = useQuery({
    queryKey: ["services"],
    queryFn: () => apiGet<{ services: ServiceItem[] }>("/api/services"),
  });
  const services = data?.services ?? FALLBACK;

  const { data: siteData } = useQuery({
    queryKey: ["site-data"],
    queryFn: () => apiGet<any>("/api/site"),
  });
  const sc = siteData?.sectionContent?.find((s: any) => s.section === "services");
  const eyebrow = isAr ? (sc?.badgeAr || t("services.eyebrow")) : (sc?.badgeEn || t("services.eyebrow"));
  const title = isAr ? (sc?.titleAr || t("services.title")) : (sc?.titleEn || t("services.title"));
  const subtitle = isAr ? (sc?.descriptionAr || t("services.subtitle")) : (sc?.descriptionEn || t("services.subtitle"));

  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  // اختيار الاسم بحسب لغة الواجهة الحالية
  const nameFor = (s: ServiceItem) => {
    if (isAr) {
      return s.nameAr || s.name;
    }
    if (s.name && s.name !== s.nameAr) return s.name;
    const key = SERVICE_KEY_BY_NAME[s.name];
    return key ? t(`service.${key}`) : s.name;
  };

  // اختيار الوصف بحسب لغة الواجهة الحالية
  const descFor = (s: ServiceItem) => {
    if (isAr) {
      return s.descriptionAr || s.description;
    }
    // في الواجهة الإنجليزية: الأولوية لحقل descriptionEn من قاعدة البيانات
    if (s.descriptionEn && s.descriptionEn.trim()) {
      return s.descriptionEn;
    }
    const key = SERVICE_KEY_BY_NAME[s.name];
    return key ? t(`service.${key}.desc`) : (s.descriptionEn || s.description);
  };

  // نص زر الطلب
  const ctaFor = (s: ServiceItem) => {
    if (isAr) {
      return s.ctaTextAr || t("services.cta");
    }
    return s.ctaTextEn || t("services.cta");
  };

  return (
    <section id="services" className="py-14 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
        />

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch" stagger={0.07}>
          {services.map((s, idx) => {
            const isImg = typeof s.icon === "string" && (s.icon.startsWith("/") || s.icon.startsWith("http"));
            const Icon = ICONS[s.icon] || Package;

            return (
              <StaggerItem key={s.id || s.name || idx}>
                <div className="card-premium shine rounded-2xl border border-border/60 bg-card shadow-soft p-6 sm:p-7 h-full group relative overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Top row */}
                    <div className="relative flex items-center justify-between w-full mb-5 z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 via-primary/8 to-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform icon-gold-ring shrink-0">
                        {isImg ? (
                          <img src={s.icon} alt={s.name} className="w-6 h-6 object-contain" />
                        ) : (
                          <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                        )}
                      </div>
                      <span className="text-5xl font-black text-primary/[0.07] leading-none select-none pointer-events-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold relative z-10">{nameFor(s)}</h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed relative z-10">{descFor(s)}</p>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => scrollTo("#contact")}
                      className="group inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all relative z-10"
                    >
                      {ctaFor(s)}
                      {isAr
                        ? <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        : <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}