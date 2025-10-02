import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Corsi = () => {
  const courses = [
    {
      name: "Minivolley (6-12 anni)",
      price: "€40/mese",
      schedule: "Martedì e Giovedì 17:00-18:30",
      features: [
        "Approccio ludico al volley",
        "Sviluppo motorio",
        "Giochi di squadra",
        "Coach specializzati",
      ],
    },
    {
      name: "Under 14-16",
      price: "€50/mese",
      schedule: "Lunedì, Mercoledì, Venerdì 18:00-20:00",
      features: [
        "Tecnica avanzata",
        "Tattica di gioco",
        "Preparazione fisica",
        "Partecipazione tornei",
      ],
      featured: true,
    },
    {
      name: "Under 18 / Senior",
      price: "€60/mese",
      schedule: "Lunedì-Venerdì 19:00-21:00",
      features: [
        "Allenamento professionale",
        "Preparazione atletica",
        "Analisi video",
        "Campionati competitivi",
      ],
    },
    {
      name: "Corso Amatoriale Adulti",
      price: "€45/mese",
      schedule: "Martedì e Giovedì 20:30-22:00",
      features: [
        "Tutti i livelli",
        "Divertimento garantito",
        "Tornei amatoriali",
        "Clima informale",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            I Nostri <span className="text-secondary">Corsi</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Scegli il corso più adatto a te. Dalla scuola minivolley ai corsi competitivi, abbiamo la soluzione perfetta per ogni età e livello.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`relative border-red-primary/20 hover:shadow-red transition-all ${
                  course.featured ? "border-secondary border-2" : ""
                }`}
              >
                {course.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Più Richiesto
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <div className="text-3xl font-bold text-secondary mb-4">{course.price}</div>
                  <div className="text-sm text-muted-foreground mb-6">{course.schedule}</div>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={course.featured ? "hero" : "outline-hero"}
                    className="w-full"
                  >
                    Iscriviti
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-card rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Prova Gratuita
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg mb-6">
              Non sei sicuro? Vieni a provare gratuitamente per una settimana! Contattaci per prenotare la tua lezione di prova.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="bg-primary-foreground text-black-primary hover:bg-primary-foreground/90"
            >
              Prenota Lezione Prova
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">10+</div>
              <div className="text-muted-foreground">Anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">200+</div>
              <div className="text-muted-foreground">Atleti Attivi</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15</div>
              <div className="text-muted-foreground">Coach Certificati</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corsi;
