import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black-primary text-primary-foreground border-t border-red-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrizione */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-primary-foreground">BLACK BILLS</span>
              <span className="text-secondary ml-2">VOLLEY</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Passione, dedizione e spirito di squadra. Unisciti alla famiglia Black Bills Volley.
            </p>
          </div>

          {/* Link Veloci */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Link Veloci</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chi-siamo/about" className="text-muted-foreground hover:text-secondary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/corsi" className="text-muted-foreground hover:text-secondary transition-colors">
                  I Corsi
                </Link>
              </li>
              <li>
                <Link to="/calendario" className="text-muted-foreground hover:text-secondary transition-colors">
                  Calendario
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} className="text-secondary" />
                <span className="text-sm">+39 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} className="text-secondary" />
                <span className="text-sm">info@blackbillsvolley.it</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-secondary" />
                <span className="text-sm">Via dello Sport 123, Italia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-secondary font-semibold mb-4">Seguici</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-all hover:shadow-red"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-all hover:shadow-red"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-red-primary/20 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Club Black Bills Volley. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
