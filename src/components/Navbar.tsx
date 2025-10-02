import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Phone } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;


    return (
        <nav className="fixed top-0 w-full z-50 bg-black-primary/95 backdrop-blur-md border-b border-red-primary/20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group" onClick={() => window.scrollTo(0, 0)}>
                        <div className="text-2xl font-bold">
                            <span className="text-primary-foreground">BLACK BULLS</span>
                            <span className="text-secondary ml-2">VOLLEY</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`text-base font-medium transition-colors hover:text-secondary ${
                                isActive("/") ? "text-secondary" : "text-primary-foreground"
                            }`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Home
                        </Link>

                        <Link
                            to="/corsi"
                            className={`text-base font-medium transition-colors hover:text-secondary ${
                                isActive("/corsi") ? "text-secondary" : "text-primary-foreground"
                            }`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            I Corsi
                        </Link>

                        <Link
                            to="/calendario"
                            className={`text-base font-medium transition-colors hover:text-secondary ${
                                isActive("/calendario") ? "text-secondary" : "text-primary-foreground"
                            }`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Calendario Partite
                        </Link>

                        <Link
                            to="/partnership"
                            className={`text-base font-medium transition-colors hover:text-secondary ${
                                isActive("/partnership") ? "text-secondary" : "text-primary-foreground"
                            }`}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            Partnership
                        </Link>
                        <a href="tel:+393517506557">
                            <Button
                                className="text-base font-medium bg-red-primary hover:bg-red-primary/90 transition-transform duration-200 ease-in-out hover:scale-105"
                                onClick={() => window.scrollTo(0, 0)}
                            ><Phone className="w-16 h-16 text-white" />
                                +39 351 750 6557
                            </Button>
                        </a>


                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary-foreground hover:text-secondary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-red-primary/20">
                        <div className="flex flex-col space-y-4">
                            <Link
                                to="/"
                                className="text-primary-foreground hover:text-secondary transition-colors"
                                onClick={() => {
                                    setIsOpen(false);
                                    window.scrollTo(0, 0)
                                }}
                            >
                                Home
                            </Link>

                            <Link
                                to="/corsi"
                                className="text-primary-foreground hover:text-secondary transition-colors"
                                onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}
                            >
                                I Corsi
                            </Link>
                            <Link
                                to="/calendario"
                                className="text-primary-foreground hover:text-secondary transition-colors"
                                onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}
                            >
                                Calendario Partite
                            </Link>
                            <Link
                                to="/partnership"
                                className="text-primary-foreground hover:text-secondary transition-colors"
                                onClick={() => {
                                    setIsOpen(false)
                                    window.scrollTo(0, 0)
                                }}
                            >
                                Partnership
                            </Link>

                            <a href="tel:+393517506557">
                                <Button
                                    className="text-base font-medium bg-red-primary hover:bg-red-primary/90 transition-transform duration-200 ease-in-out hover:scale-105"
                                ><Phone className="w-16 h-16 text-white" />
                                    +39 351 750 6557
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
