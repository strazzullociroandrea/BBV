import {Link} from "react-router-dom";
import {Facebook, Instagram, Mail, Phone, MapPin} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black-primary text-primary-foreground border-t border-red-primary/20">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo e Descrizione */}
                    <div className="space-y-4">
                        <div className="text-2xl font-bold">
                            <span className="text-primary-foreground">BLACK BULLS</span>
                            <span className="text-secondary ml-2">VOLLEY</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                            Passione, formazione e valori sportivi.
                        </p>
                    </div>

                    {/* Link Veloci */}
                    <div>
                        <h3 className="text-secondary font-semibold mb-4">Link Veloci</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-muted-foreground hover:text-secondary transition-colors"
                                      onClick={() => window.scrollTo(0, 0)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/corsi"
                                      className="text-muted-foreground hover:text-secondary transition-colors"
                                      onClick={() => window.scrollTo(0, 0)}>
                                    I Corsi
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendario"
                                      className="text-muted-foreground hover:text-secondary transition-colors"
                                      onClick={() => window.scrollTo(0, 0)}>
                                    Calendario
                                </Link>
                            </li>

                            <li>
                                <Link to="/partnership"
                                      className="text-muted-foreground hover:text-secondary transition-colors"
                                      onClick={() => window.scrollTo(0, 0)}
                                >
                                    Partenership
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contatti */}
                    <div>
                        <h3 className="text-secondary font-semibold mb-4">Contatti</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Phone size={16} className="text-secondary"/>
                                <span className="text-sm">
                                    +39 351 750 6557
                                </span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <Mail size={16} className="text-secondary"/>
                                <span className="text-sm">info@blackbullsvolley.it</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={23} className="text-secondary"/>
                                <span className="text-sm">Sede operativa: Via Leonardo Da Vinci, 1 Cologno Monzese (MI)</span>
                            </li>
                            <li className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={16} className="text-secondary"/>
                                <span className="text-sm">Sede legale: Via Merano, 11/2 Gessate (MI)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-secondary font-semibold mb-4">Seguici</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/BlackBullsV/?locale=it_IT"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-all hover:shadow-red"
                            >
                                <Facebook size={20}/>
                            </a>
                            <a
                                href="https://www.instagram.com/blackbullsvolley/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center hover:bg-secondary hover:text-primary-foreground transition-all hover:shadow-red"
                            >
                                <Instagram size={20}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-red-primary/20 text-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} Black Bulls Volley. Tutti i diritti riservati.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
