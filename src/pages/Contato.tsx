import { useState } from "react";
import { MapPin, Phone, Clock, Instagram, MessageCircle, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contato = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá! Me chamo ${form.name}. ${form.message}`);
    window.open(`https://api.whatsapp.com/send/?phone=5511969987340&text=${msg}&type=phone_number&app_absent=0`, "_blank");
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <AnimatedSection>
          <p className="text-label mb-3">Contato</p>
          <h1 className="heading-display mb-4">Fale Conosco</h1>
          <p className="text-body max-w-2xl mb-16">
            Agende sua avaliação ou tire suas dúvidas. Estamos prontos para atendê-la com exclusividade.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">Nome completo</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                  placeholder="Seu nome"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Telefone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow"
                    placeholder="(11) 99999-0000"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 transition-shadow resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                />
              </div>
              <button type="submit" className="glass-button-dark flex items-center gap-2">
                <Send size={16} /> Enviar Mensagem
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-4">Informações</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground">Rua das Flores, 123 — Sala 401</p>
                      <p className="text-muted-foreground">Centro, São Paulo — SP, 01000-000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefone / WhatsApp</p>
                      <p className="text-muted-foreground">(11) 96998-7340</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Instagram size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Instagram</p>
                      <p className="text-muted-foreground">@lukikuthi.dev</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Horário de Atendimento</p>
                      <p className="text-muted-foreground">Segunda a Sexta: 9h às 19h</p>
                      <p className="text-muted-foreground">Sábado: 9h às 14h</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511969987340&text=Ol%C3%A1%21+Gostaria+de+falar+com+o+Lucas&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button-accent flex items-center justify-center gap-2 w-full"
                >
                  <MessageCircle size={16} /> Falar no WhatsApp
                </a>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4">Como Chegar</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Localizada no coração de São Paulo, a clínica fica próxima à estação de metrô República. Estacionamento conveniado no prédio.
                </p>
                <div className="rounded-2xl overflow-hidden border border-border">
                  <iframe
                    title="Localização"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6388!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMjAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contato;
