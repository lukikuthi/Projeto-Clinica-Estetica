import { GraduationCap, Award, BookOpen, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const timeline = [
  { year: "2010", title: "Graduação em Medicina", desc: "Formação pela Universidade de São Paulo (USP)." },
  { year: "2013", title: "Especialização em Dermatologia", desc: "Residência em Dermatologia com foco em estética." },
  { year: "2015", title: "Fellowship Internacional", desc: "Aprofundamento em técnicas avançadas nos Estados Unidos." },
  { year: "2017", title: "Abertura da Clínica", desc: "Inauguração da Clínica Karina Vilela em São Paulo." },
  { year: "2020", title: "Certificação em Harmonização Orofacial", desc: "Atualização constante em procedimentos de ponta." },
  { year: "2023", title: "Referência Nacional", desc: "Reconhecida como referência em estética facial avançada." },
];

const Sobre = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        <AnimatedSection>
          <div className="aspect-[3/4] rounded-2xl bg-secondary overflow-hidden sticky top-28">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
              Foto Profissional
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-label mb-3">Sobre a Profissional</p>
          <h1 className="heading-display mb-6">Dra. Karina Vilela</h1>
          <p className="text-body mb-2">CRM-SP 000000 | RQE 00000</p>
          <p className="text-body mb-6">Médica Dermatologista — Especialista em Estética Avançada</p>

          <div className="space-y-6 mb-10">
            <p className="text-body">
              Com mais de uma década de experiência em estética facial, a Dra. Karina Vilela construiu uma trajetória pautada pela excelência técnica, atualização constante e um cuidado genuíno com cada paciente.
            </p>
            <p className="text-body">
              Sua filosofia de trabalho parte do princípio de que a verdadeira beleza está na harmonia. Cada procedimento é planejado de forma individualizada, respeitando as características únicas e os desejos de quem busca seu atendimento.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-10">
            {[
              { icon: GraduationCap, label: "Formação Sólida" },
              { icon: Award, label: "Certificações Internacionais" },
              { icon: BookOpen, label: "Atualização Contínua" },
              { icon: Heart, label: "Cuidado Humanizado" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl border border-border">
                <item.icon size={20} strokeWidth={1.2} className="text-accent" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-serif text-xl mb-3">Filosofia de Trabalho</h3>
            <blockquote className="border-l-2 border-accent pl-6 italic text-muted-foreground">
              "Acredito que cada rosto conta uma história única. Meu papel é realçar a beleza que já existe, com segurança, técnica e respeito à naturalidade."
            </blockquote>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <h2 className="heading-section text-center mb-16">Trajetória Profissional</h2>
      </AnimatedSection>
      <div className="max-w-2xl mx-auto">
        {timeline.map((item, i) => (
          <AnimatedSection key={item.year} delay={i * 0.08}>
            <div className="flex gap-6 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center text-xs font-medium text-accent">
                  {item.year}
                </div>
                {i < timeline.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
              </div>
              <div className="pb-8">
                <h3 className="font-serif text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Sobre;
