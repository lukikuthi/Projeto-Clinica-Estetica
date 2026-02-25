import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { Syringe, Sparkles, Gem, Layers, Zap, ShieldCheck, UserCheck, HeartPulse, Award, Star, ArrowRight, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const procedures = [
  { icon: Syringe, title: "Botox", desc: "Suaviza linhas de expressão com naturalidade e precisão.", slug: "botox" },
  { icon: Sparkles, title: "Preenchimento Facial", desc: "Restaura volume e contornos com ácido hialurônico.", slug: "preenchimento-facial" },
  { icon: Gem, title: "Bioestimulador", desc: "Estimula colágeno para firmeza e rejuvenescimento.", slug: "bioestimulador" },
  { icon: Layers, title: "Harmonização Facial", desc: "Equilíbrio e proporção para realçar sua beleza.", slug: "harmonizacao-facial" },
  { icon: Zap, title: "Laser", desc: "Tecnologia avançada para renovação da pele.", slug: "laser" },
];

const diferenciais = [
  { icon: UserCheck, title: "Atendimento Personalizado", desc: "Cada paciente é único. Protocolos individuais." },
  { icon: HeartPulse, title: "Técnicas Atualizadas", desc: "Formação contínua com referências internacionais." },
  { icon: ShieldCheck, title: "Ambiente Seguro", desc: "Estrutura completa e protocolos rigorosos." },
  { icon: Award, title: "Produtos Certificados", desc: "Apenas marcas aprovadas pela ANVISA." },
];

const depoimentos = [
  { name: "Camila R.", text: "Resultado incrível e natural. Me senti acolhida desde a primeira consulta.", stars: 5 },
  { name: "Fernanda S.", text: "Profissionalismo impecável. A Dra. Karina é atenciosa e muito competente.", stars: 5 },
  { name: "Juliana M.", text: "Ambiente sofisticado e procedimento com muita segurança. Amei!", stars: 5 },
];

const Index = ({ isLoading, startVideo }: { isLoading?: boolean; startVideo?: boolean } = {}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (startVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, [startVideo]);

  return (
    <>
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-b from-transparent via-background/40 to-background pointer-events-none" />
        <div className="relative z-10 section-container">
          <div className="max-w-2xl">
            <p className="text-label text-primary-foreground/70 mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Clínica Estética Premium
            </p>
            <h1 className="heading-display text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Beleza natural com <br />excelência e segurança
            </h1>
            <p className="text-lg text-primary-foreground/80 font-light mb-10 max-w-lg animate-fade-in" style={{ animationDelay: "0.6s" }}>
              Procedimentos estéticos avançados com técnica refinada e resultados harmoniosos.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <Link to="/contato" className="glass-button-primary">
                Agendar Avaliação
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-whatsapp"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-label text-center mb-3">Nossos Procedimentos</p>
            <h2 className="heading-section text-center mb-4">Tratamentos em Destaque</h2>
            <p className="text-body text-center max-w-xl mx-auto mb-16">
              Técnicas selecionadas para realçar sua beleza com naturalidade e segurança.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((proc, i) => (
              <AnimatedSection key={proc.slug} delay={i * 0.1}>
                <Link to={`/procedimentos/${proc.slug}`}>
                  <GlowCard className="h-full text-center group cursor-pointer">
                    <proc.icon size={32} strokeWidth={1.2} className="mx-auto mb-4 text-foreground/70 group-hover:text-accent transition-colors duration-300" />
                    <h3 className="font-serif text-xl mb-2">{proc.title}</h3>
                    <p className="text-sm text-muted-foreground">{proc.desc}</p>
                  </GlowCard>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link to="/procedimentos" className="glass-button-dark inline-flex items-center gap-2">
              Ver todos os procedimentos <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding" style={{ background: "hsl(var(--cream))" }}>
        <div className="section-container">
          <AnimatedSection>
            <p className="text-label text-center mb-3">Por Que Nos Escolher</p>
            <h2 className="heading-section text-center mb-16">Diferenciais da Clínica</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.1} className="text-center">
                <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center mx-auto mb-4">
                  <d.icon size={22} strokeWidth={1.2} className="text-foreground/70" />
                </div>
                <h3 className="font-serif text-lg mb-2">{d.title}</h3>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="aspect-[3/4] rounded-2xl bg-secondary overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  Foto da Profissional
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-label mb-3">Sobre a Profissional</p>
              <h2 className="heading-section mb-6">Dra. Karina Vilela</h2>
              <p className="text-body mb-4">
                Especialista em estética avançada, com formação sólida e atualizações constantes nas melhores referências internacionais.
              </p>
              <p className="text-body mb-8">
                Sua abordagem combina técnica refinada com um olhar individualizado, buscando sempre resultados que respeitem a harmonia natural de cada paciente.
              </p>
              <Link to="/sobre" className="glass-button-dark inline-flex items-center gap-2">
                Conhecer trajetória <ArrowRight size={16} />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "hsl(var(--cream))" }}>
        <div className="section-container">
          <AnimatedSection>
            <p className="text-label text-center mb-3">Resultados Reais</p>
            <h2 className="heading-section text-center mb-16">Antes e Depois</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="aspect-[4/5] rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground text-sm">
                  Antes & Depois
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Link to="/antes-depois" className="glass-button-dark inline-flex items-center gap-2">
              Ver galeria completa <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <p className="text-label text-center mb-3">Depoimentos</p>
            <h2 className="heading-section text-center mb-16">O Que Dizem Nossas Pacientes</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {depoimentos.map((dep, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <GlowCard className="h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: dep.stars }).map((_, j) => (
                      <Star key={j} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">"{dep.text}"</p>
                  <p className="text-sm font-medium">{dep.name}</p>
                </GlowCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-primary-foreground">
        <div className="section-container text-center">
          <AnimatedSection>
            <h2 className="heading-section mb-4">Agende Sua Avaliação</h2>
            <p className="text-lg opacity-70 max-w-lg mx-auto mb-10 font-light">
              Descubra os melhores tratamentos para realçar sua beleza natural. Atendimento personalizado e exclusivo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contato" className="glass-button-primary">
                Agendar Avaliação
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button-whatsapp"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Index;