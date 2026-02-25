import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Logo" className="h-10 w-10 object-contain invert" />
              <div>
                <p className="font-serif text-lg font-semibold">Karina Vilela</p>
                <p className="text-xs uppercase tracking-[0.2em] opacity-60">Clínica Estética</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-70">
              Realçando a beleza natural com técnicas avançadas, segurança e cuidado personalizado.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Procedimentos", "Sobre", "Antes e Depois", "Depoimentos", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:opacity-100 transition-opacity">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Procedimentos</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Botox", "Preenchimento Facial", "Bioestimulador", "Harmonização Facial", "Laser"].map((item) => (
                <li key={item}>
                  <Link to="/procedimentos" className="hover:opacity-100 transition-opacity">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li className="flex items-center gap-2"><MapPin size={14} /> Rua das Flores, 123 — Centro, São Paulo - SP</li>
              <li className="flex items-center gap-2"><Phone size={14} /> (11) 96998-7340</li>
              <li className="flex items-center gap-2"><Mail size={14} /> contato@karinavilela.com.br</li>
              <li className="flex items-center gap-2"><Instagram size={14} /> @karinavilela.estetica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-50">
          <p>© {new Date().getFullYear()} Karina Vilela Clínica Estética. Todos os direitos reservados.</p>
          <p>Os resultados podem variar de pessoa para pessoa.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
