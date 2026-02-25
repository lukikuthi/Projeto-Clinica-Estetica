import { useState } from "react";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const categories = ["Todos", "Botox", "Preenchimento", "Bioestimulador", "Harmonização", "Laser"];

const gallery = [
  { id: 1, category: "Botox", label: "Botox — Testa" },
  { id: 2, category: "Preenchimento", label: "Preenchimento — Lábios" },
  { id: 3, category: "Bioestimulador", label: "Bioestimulador — Face" },
  { id: 4, category: "Harmonização", label: "Harmonização — Mandíbula" },
  { id: 5, category: "Laser", label: "Laser — Manchas" },
  { id: 6, category: "Preenchimento", label: "Preenchimento — Olheiras" },
  { id: 7, category: "Botox", label: "Botox — Pés de Galinha" },
  { id: 8, category: "Harmonização", label: "Harmonização — Completa" },
];

const AntesDepois = () => {
  const [filter, setFilter] = useState("Todos");
  const [modal, setModal] = useState<number | null>(null);

  const filtered = filter === "Todos" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-label mb-3">Resultados</p>
          <h1 className="heading-display mb-4">Antes e Depois</h1>
          <p className="text-body max-w-2xl mb-12">
            Conheça alguns resultados reais dos nossos procedimentos. Cada caso é único e os resultados podem variar.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-foreground text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={i * 0.05}>
              <button
                onClick={() => setModal(item.id)}
                className="w-full text-left group"
              >
                <div className="aspect-[4/5] rounded-2xl bg-secondary overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    {item.label}
                  </div>
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 rounded-2xl" />
                </div>
                <p className="text-sm text-muted-foreground mt-3">{item.label}</p>
              </button>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12">
          <p className="text-xs text-muted-foreground text-center italic">
            * Os resultados podem variar de pessoa para pessoa. As imagens são meramente ilustrativas.
          </p>
        </AnimatedSection>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-sm p-4" onClick={() => setModal(null)}>
          <div className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-card/80 backdrop-blur flex items-center justify-center">
              <X size={16} />
            </button>
            <div className="aspect-[4/5] bg-secondary flex items-center justify-center text-muted-foreground">
              {gallery.find((g) => g.id === modal)?.label}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AntesDepois;
