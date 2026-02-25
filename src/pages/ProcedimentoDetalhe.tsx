import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const data: Record<string, { title: string; what: string; who: string; benefits: string[]; how: string; sessions: string; care: string; faq: { q: string; a: string }[] }> = {
  botox: {
    title: "Botox",
    what: "A toxina botulínica é utilizada para suavizar linhas de expressão, prevenindo o aprofundamento de rugas na testa, entre os olhos e ao redor dos olhos (pés de galinha). É um dos procedimentos mais seguros e consagrados da estética.",
    who: "Pessoas que desejam suavizar rugas dinâmicas e prevenir o envelhecimento facial. Indicado a partir dos 25 anos.",
    benefits: ["Suavização de rugas", "Prevenção de novas linhas", "Resultado natural", "Procedimento rápido", "Sem tempo de recuperação"],
    how: "São realizadas microinjeções precisas nos músculos faciais. O procedimento dura em média 15 a 20 minutos, com pouco desconforto.",
    sessions: "Sessão única com duração média de 4 a 6 meses. Recomenda-se manutenção periódica.",
    care: "Evitar deitar nas primeiras 4 horas. Não massagear a região. Evitar atividade física intensa nas primeiras 24 horas.",
    faq: [
      { q: "Dói?", a: "O desconforto é mínimo. Utilizamos agulhas ultrafinas para maior conforto." },
      { q: "Fica artificial?", a: "Quando bem aplicado, o resultado é natural, mantendo as expressões faciais." },
      { q: "Qual a idade ideal?", a: "Pode ser iniciado a partir dos 25 anos como prevenção." },
    ],
  },
  "preenchimento-facial": {
    title: "Preenchimento Facial",
    what: "O preenchimento com ácido hialurônico restaura volume, suaviza sulcos e redefine contornos faciais. É um dos procedimentos mais versáteis da estética moderna.",
    who: "Pessoas com perda de volume facial, sulcos nasolabiais acentuados, lábios finos ou assimetrias faciais.",
    benefits: ["Restauração de volume", "Suavização de sulcos", "Definição de contornos", "Hidratação profunda", "Resultado imediato"],
    how: "O ácido hialurônico é injetado com cânulas ou agulhas em pontos estratégicos. Procedimento dura entre 30 e 60 minutos.",
    sessions: "Geralmente sessão única. Duração de 12 a 18 meses dependendo da região.",
    care: "Aplicar gelo nas primeiras horas. Evitar exposição solar intensa por 48h. Evitar maquiagem no dia.",
    faq: [
      { q: "O resultado é imediato?", a: "Sim, o resultado é visível logo após a aplicação, com resultado final em 15 dias." },
      { q: "É reversível?", a: "Sim, o ácido hialurônico pode ser dissolvido se necessário." },
    ],
  },
  bioestimulador: {
    title: "Bioestimulador de Colágeno",
    what: "Os bioestimuladores são substâncias que estimulam a produção natural de colágeno, melhorando a firmeza e qualidade da pele a longo prazo.",
    who: "Pacientes com flacidez moderada, perda de sustentação facial ou que buscam prevenção do envelhecimento.",
    benefits: ["Estímulo de colágeno", "Melhora da flacidez", "Efeito lifting natural", "Resultado progressivo", "Pele mais firme"],
    how: "Injeções em pontos específicos do rosto e/ou corpo. O colágeno é produzido gradualmente ao longo das semanas.",
    sessions: "De 2 a 3 sessões com intervalo de 30 a 60 dias. Resultados podem durar até 2 anos.",
    care: "Massagear a região conforme orientação. Evitar atividade intensa por 48h.",
    faq: [
      { q: "Quando vejo resultado?", a: "Os resultados são progressivos, visíveis a partir de 30 dias." },
      { q: "Pode combinar com outros procedimentos?", a: "Sim, geralmente é associado a um protocolo personalizado." },
    ],
  },
  "harmonizacao-facial": {
    title: "Harmonização Facial",
    what: "Conjunto de procedimentos estéticos que buscam o equilíbrio e a proporção dos traços faciais, combinando técnicas como preenchimento, botox e bioestimuladores.",
    who: "Pessoas que desejam melhorar a harmonia e proporção do rosto, corrigir assimetrias ou realçar traços.",
    benefits: ["Proporção facial", "Equilíbrio de traços", "Autoestima elevada", "Resultado personalizado", "Aspecto natural"],
    how: "Avaliação detalhada seguida da combinação de técnicas mais adequadas para cada paciente.",
    sessions: "Varia conforme o plano de tratamento individual. Geralmente 1 a 3 sessões.",
    care: "Seguir as orientações específicas de cada procedimento realizado.",
    faq: [
      { q: "Muda muito o rosto?", a: "O objetivo é realçar a beleza natural, não transformar. Resultados sutis e elegantes." },
    ],
  },
  laser: {
    title: "Laser",
    what: "Tratamentos a laser utilizam luz concentrada para tratar diversas condições da pele, desde manchas e cicatrizes até rejuvenescimento completo.",
    who: "Pacientes com manchas, cicatrizes de acne, poros dilatados, textura irregular ou que buscam rejuvenescimento.",
    benefits: ["Tratamento de manchas", "Renovação celular", "Estímulo de colágeno", "Melhora da textura", "Resultados progressivos"],
    how: "A aplicação é feita com aparelhos de última geração, em sessões de 20 a 40 minutos.",
    sessions: "De 3 a 6 sessões com intervalos de 30 dias, dependendo da indicação.",
    care: "Uso obrigatório de protetor solar. Evitar exposição ao sol. Hidratar a pele conforme orientação.",
    faq: [
      { q: "Dói?", a: "Há um leve desconforto, semelhante a pequenas picadas. Utilizamos recursos para maior conforto." },
      { q: "Qual o tempo de recuperação?", a: "Varia conforme o tipo de laser. Pode haver vermelhidão por 24-72h." },
    ],
  },
};

const ProcedimentoDetalhe = () => {
  const { slug } = useParams();
  const proc = data[slug || ""];

  if (!proc) {
    return (
      <div className="section-padding section-container text-center">
        <h1 className="heading-section mb-4">Procedimento não encontrado</h1>
        <Link to="/procedimentos" className="glass-button-dark inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar
        </Link>
      </div>
    );
  }

  return (
    <section className="section-padding bg-background">
      <div className="section-container max-w-3xl">
        <AnimatedSection>
          <Link to="/procedimentos" className="text-label inline-flex items-center gap-2 mb-8 hover:text-accent transition-colors">
            <ArrowLeft size={14} /> Voltar aos procedimentos
          </Link>
          <h1 className="heading-display mb-8">{proc.title}</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-2xl mb-3">O que é</h2>
              <p className="text-body">{proc.what}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-3">Para quem é indicado</h2>
              <p className="text-body">{proc.who}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-3">Benefícios</h2>
              <ul className="space-y-2">
                {proc.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-body">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-3">Como funciona</h2>
              <p className="text-body">{proc.how}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-3">Sessões necessárias</h2>
              <p className="text-body">{proc.sessions}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-3">Cuidados pós-procedimento</h2>
              <p className="text-body">{proc.care}</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl mb-4">Perguntas Frequentes</h2>
              <div className="space-y-4">
                {proc.faq.map((f) => (
                  <div key={f.q} className="border border-border rounded-xl p-5">
                    <p className="font-medium text-sm mb-2">{f.q}</p>
                    <p className="text-sm text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-14 text-center">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato" className="glass-button-dark">Agendar Avaliação</Link>
            <a href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="glass-button-accent flex items-center gap-2">
              <MessageCircle size={16} /> Falar no WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProcedimentoDetalhe;
