import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const posts = [
  { slug: "botox-tudo-que-voce-precisa-saber", title: "Botox: Tudo que Você Precisa Saber", excerpt: "Entenda como funciona a toxina botulínica, indicações, cuidados e o que esperar do procedimento.", date: "15 Jan 2026", category: "Botox" },
  { slug: "preenchimento-labial-natural", title: "Preenchimento Labial: Como Ter Resultados Naturais", excerpt: "Descubra as técnicas mais modernas para um preenchimento labial harmonioso e natural.", date: "10 Jan 2026", category: "Preenchimento" },
  { slug: "cuidados-com-a-pele-no-verao", title: "Cuidados com a Pele no Verão", excerpt: "Proteção solar, hidratação e tratamentos que ajudam a manter a pele saudável nos meses mais quentes.", date: "05 Jan 2026", category: "Skincare" },
  { slug: "tendencias-estetica-2026", title: "Tendências em Estética para 2026", excerpt: "Conheça os procedimentos e tecnologias que estão em alta no universo da estética avançada.", date: "28 Dez 2025", category: "Tendências" },
  { slug: "bioestimuladores-de-colageno", title: "Bioestimuladores: Rejuvenescimento Natural", excerpt: "Saiba como os bioestimuladores de colágeno agem na pele e quais os benefícios a longo prazo.", date: "20 Dez 2025", category: "Tratamentos" },
];

const Blog = () => (
  <section className="section-padding bg-background">
    <div className="section-container">
      <AnimatedSection>
        <p className="text-label mb-3">Blog</p>
        <h1 className="heading-display mb-4">Conteúdos sobre Estética</h1>
        <p className="text-body max-w-2xl mb-16">
          Informação de qualidade para você se sentir segura e bem informada sobre os melhores cuidados e tratamentos.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={i * 0.08}>
            <GlowCard className="h-full flex flex-col group cursor-pointer">
              <div className="aspect-[16/10] rounded-xl bg-secondary mb-4 flex items-center justify-center text-muted-foreground text-xs">
                Imagem do Artigo
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <Calendar size={12} />
                {post.date}
                <span className="ml-auto px-2 py-0.5 rounded-full bg-secondary text-xs">{post.category}</span>
              </div>
              <h2 className="font-serif text-lg mb-2 group-hover:text-accent transition-colors">{post.title}</h2>
              <p className="text-sm text-muted-foreground flex-1">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium mt-4 text-accent">
                Ler artigo <ArrowRight size={14} />
              </span>
            </GlowCard>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
