import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const chiSiamoItems = [
    { title: "About Us", href: "/chi-siamo/about" },
    { title: "Le Squadre", href: "/chi-siamo/squadre" },
    { title: "Iniziative", href: "/chi-siamo/iniziative" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black-primary/95 backdrop-blur-md border-b border-red-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold">
              <span className="text-primary-foreground">BLACK BILLS</span>
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
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-primary-foreground hover:text-secondary">
                    Chi Siamo
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-black-light border border-red-primary/20">
                      {chiSiamoItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-secondary/10 hover:text-secondary"
                            >
                              <div className="text-sm font-medium leading-none text-primary-foreground">
                                {item.title}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/corsi"
              className={`text-base font-medium transition-colors hover:text-secondary ${
                isActive("/corsi") ? "text-secondary" : "text-primary-foreground"
              }`}
            >
              I Corsi
            </Link>

            <Link
              to="/calendario"
              className={`text-base font-medium transition-colors hover:text-secondary ${
                isActive("/calendario") ? "text-secondary" : "text-primary-foreground"
              }`}
            >
              Calendario Partite
            </Link>

            <Link
              to="/partnership"
              className={`text-base font-medium transition-colors hover:text-secondary ${
                isActive("/partnership") ? "text-secondary" : "text-primary-foreground"
              }`}
            >
              Partnership
            </Link>

            <Button variant="hero" size="sm" asChild>
              <Link to="/corsi">Iscriviti Ora</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground hover:text-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-red-primary/20">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-primary-foreground hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <div className="text-secondary font-medium">Chi Siamo</div>
                {chiSiamoItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block pl-4 text-primary-foreground hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <Link
                to="/corsi"
                className="text-primary-foreground hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                I Corsi
              </Link>
              <Link
                to="/calendario"
                className="text-primary-foreground hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Calendario Partite
              </Link>
              <Link
                to="/partnership"
                className="text-primary-foreground hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Partnership
              </Link>
              <Button variant="hero" size="sm" asChild>
                <Link to="/corsi" onClick={() => setIsOpen(false)}>
                  Iscriviti Ora
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
