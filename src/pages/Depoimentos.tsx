import { Star } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const depoimentos = [
  { name: "Camila R.", procedure: "Botox", text: "Resultado incrível e natural. Me senti acolhida desde a primeira consulta. A Dra. Karina é extremamente cuidadosa e explica tudo em detalhes.", stars: 5 },
  { name: "Fernanda S.", procedure: "Preenchimento", text: "Profissionalismo impecável. A Dra. Karina é atenciosa, competente e me deixou super confortável durante todo o procedimento.", stars: 5 },
  { name: "Juliana M.", procedure: "Harmonização", text: "Ambiente sofisticado e procedimento com muita segurança. O resultado ficou exatamente como eu queria: natural e elegante.", stars: 5 },
  { name: "Ana Paula L.", procedure: "Bioestimulador", text: "Minha pele nunca esteve tão firme. O resultado é progressivo e cada dia vejo mais diferença. Super recomendo!", stars: 5 },
  { name: "Mariana C.", procedure: "Laser", text: "Fiz laser para manchas e o resultado me surpreendeu. A clínica é impecável e o atendimento excepcional.", stars: 5 },
  { name: "Beatriz A.", procedure: "Preenchimento", text: "Sempre tive receio de procedimentos, mas a Dra. Karina me passou tanta confiança que saí apaixonada pelo resultado.", stars: 5 },
];

const Depoimentos = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-label mb-3">Depoimentos</p>
        <h1 className="heading-display mb-4">O Que Dizem Nossas Pacientes</h1>
        <p className="text-body max-w-2xl mb-16">
          A satisfação de cada paciente é nossa maior conquista. Veja o que dizem sobre a experiência na clínica.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {depoimentos.map((dep, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <GlowCard className="h-full flex flex-col">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: dep.stars }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic flex-1">"{dep.text}"</p>
              <div>
                <p className="text-sm font-medium">{dep.name}</p>
                <p className="text-xs text-muted-foreground">{dep.procedure}</p>
              </div>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Depoimentos;
