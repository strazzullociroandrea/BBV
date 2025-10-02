import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Calendar, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-volleyball.jpg";

const Index = () => {
  const features = [
    {
      icon: Users,
      title: "Squadre Competitive",
      description: "Allenamenti professionali per tutte le età e livelli",
    },
    {
      icon: Trophy,
      title: "Campionati Nazionali",
      description: "Partecipazione ai principali tornei regionali e nazionali",
    },
    {
      icon: Calendar,
      title: "Corsi Tutto l'Anno",
      description: "Programmi di allenamento continui con coach esperti",
    },
    {
      icon: Award,
      title: "Formazione Completa",
      description: "Sviluppo tecnico, tattico e mentale degli atleti",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
            CLUB <span className="text-secondary">BLACK BILLS</span> VOLLEY
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Passione, determinazione e spirito di squadra. Entra a far parte della nostra famiglia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/corsi">Scopri i Corsi</Link>
            </Button>
            <Button variant="outline-hero" size="lg" asChild>
              <Link to="/chi-siamo/about">Chi Siamo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Perché Scegliere <span className="text-secondary">Black Bills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-red-primary/20 hover:border-secondary transition-all duration-300 hover:shadow-red group"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-all">
                    <feature.icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Pronto a Giocare con Noi?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Iscriviti ai nostri corsi e inizia il tuo percorso nella pallavolo con i migliori coach della regione.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/corsi">Iscriviti Ora</Link>
          </Button>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Ultime <span className="text-secondary">Notizie</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="overflow-hidden group hover:shadow-red transition-all">
                <div className="h-48 bg-gradient-card" />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                    Vittoria nel Derby Regionale
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    La nostra squadra Under 18 conquista una vittoria importante nel derby contro i rivali storici.
                  </p>
                  <Button variant="link" className="p-0 text-secondary">
                    Leggi di più →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
