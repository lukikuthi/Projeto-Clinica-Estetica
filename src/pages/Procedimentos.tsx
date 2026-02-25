import { Link } from "react-router-dom";
import { Syringe, Sparkles, Gem, Layers, Zap, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const procedures = [
  { icon: Syringe, title: "Botox", slug: "botox", desc: "Suavização de linhas de expressão e rugas dinâmicas com toxina botulínica de alta qualidade." },
  { icon: Sparkles, title: "Preenchimento Facial", slug: "preenchimento-facial", desc: "Restauração de volume e definição de contornos com ácido hialurônico." },
  { icon: Gem, title: "Bioestimulador", slug: "bioestimulador", desc: "Estímulo à produção de colágeno para uma pele mais firme e jovem." },
  { icon: Layers, title: "Harmonização Facial", slug: "harmonizacao-facial", desc: "Conjunto de técnicas para equilíbrio e proporção dos traços faciais." },
  { icon: Zap, title: "Laser", slug: "laser", desc: "Tratamentos a laser para rejuvenescimento, manchas e textura da pele." },
];

const Procedimentos = () => (
  <>
    <section className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-label mb-3">Procedimentos</p>
          <h1 className="heading-display mb-4">Nossos Tratamentos</h1>
          <p className="text-body max-w-2xl mb-16">
            Cada procedimento é realizado com técnica refinada, produtos de excelência e foco na segurança e naturalidade dos resultados.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {procedures.map((proc, i) => (
            <AnimatedSection key={proc.slug} delay={i * 0.08}>
              <Link to={`/procedimentos/${proc.slug}`}>
                <GlowCard className="h-full flex gap-6 items-start group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors">
                    <proc.icon size={22} strokeWidth={1.2} className="text-foreground/60 group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-xl mb-2 flex items-center gap-2">
                      {proc.title}
                      <ArrowRight size={16} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                    </h2>
                    <p className="text-sm text-muted-foreground">{proc.desc}</p>
                  </div>
                </GlowCard>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Procedimentos;
