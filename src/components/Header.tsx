import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Procedimentos", path: "/procedimentos" },
  { label: "Sobre", path: "/sobre" },
  { label: "Antes e Depois", path: "/antes-depois" },
  { label: "Depoimentos", path: "/depoimentos" },
  { label: "Blog", path: "/blog" },
  { label: "Contato", path: "/contato" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20" style={{ background: "hsla(30,25%,95%,0.6)", backdropFilter: "blur(4px)" }}>
      <div className="section-container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Karina Vilela Clínica Estética" className="h-12 w-12 object-contain" />
          <div>
            <p className="font-serif text-lg font-semibold leading-tight text-foreground">Karina Vilela</p>
            <p className="text-label text-[10px]">Clínica Estética</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-sans font-medium tracking-wide transition-colors duration-300 hover:text-foreground ${location.pathname === link.path ? "text-foreground" : "text-foreground/60"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contato" className="glass-button-dark text-sm">
            Agendar Avaliação
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/20" style={{ background: "hsla(30,25%,95%,0.85)", backdropFilter: "blur(4px)" }}>
          <nav className="section-container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-sans font-medium py-2 ${location.pathname === link.path ? "text-foreground" : "text-foreground/60"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contato" onClick={() => setOpen(false)} className="glass-button-dark text-sm text-center mt-2">
              Agendar Avaliação
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
