import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Building2, TrendingUp, Award } from "lucide-react";

const Partnership = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Visibilità sul Territorio",
      description: "Il tuo brand sarà presente su tutti i materiali del club, dalle maglie alle comunicazioni online",
    },
    {
      icon: TrendingUp,
      title: "Crescita del Brand",
      description: "Associa il tuo marchio ai valori dello sport e raggiungi un pubblico ampio e fidelizzato",
    },
    {
      icon: Award,
      title: "Eventi Esclusivi",
      description: "Accesso privilegiato agli eventi del club e possibilità di organizzare attività co-branded",
    },
    {
      icon: Handshake,
      title: "Partnership Duratura",
      description: "Costruiamo insieme un rapporto di collaborazione a lungo termine basato sulla fiducia",
    },
  ];

  const packages = [
    {
      name: "Main Sponsor",
      price: "Su richiesta",
      features: [
        "Logo su tutte le divise",
        "Presenza su tutti i materiali promozionali",
        "Naming rights palazzetto per eventi",
        "Spazio pubblicitario premium",
      ],
    },
    {
      name: "Premium Partner",
      price: "€5.000/anno",
      features: [
        "Logo su divise di gioco",
        "Banner in palazzetto",
        "Menzione in comunicati stampa",
        "Post social dedicati",
      ],
    },
    {
      name: "Technical Partner",
      price: "€2.500/anno",
      features: [
        "Logo su divise allenamento",
        "Presenza sul sito web",
        "Materiale promozionale eventi",
        "Newsletter partner",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            <span className="text-secondary">Partnership</span> & Sponsorizzazioni
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Diventa partner del Club Black Bills Volley e unisciti a noi nel sostenere lo sport e i valori della nostra comunità.
          </p>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Perché Diventare <span className="text-secondary">Partner</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-red-primary/20 hover:border-secondary hover:shadow-red transition-all group"
                >
                  <CardContent className="pt-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-all">
                      <benefit.icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Pacchetti <span className="text-secondary">Sponsorizzazione</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className="border-red-primary/20 hover:shadow-red transition-all"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <div className="text-3xl font-bold text-secondary mb-6">{pkg.price}</div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline-hero" className="w-full">
                      Richiedi Info
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Current Partners */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              I Nostri <span className="text-secondary">Partner</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-muted rounded-lg flex items-center justify-center border border-red-primary/20 hover:border-secondary transition-all"
                >
                  <span className="text-muted-foreground text-sm">Logo Partner</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-card rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Interessato a Collaborare?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg mb-6">
              Contattaci per discutere insieme le opportunità di partnership e trovare la soluzione più adatta alle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                className="bg-primary-foreground text-black-primary hover:bg-primary-foreground/90"
              >
                Contatta il Responsabile Partnership
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;
