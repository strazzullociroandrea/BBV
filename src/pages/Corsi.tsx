import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Check, Phone} from "lucide-react";

const Corsi = () => {
  const courses = [
    {
      name: "Avviamento allo sport",
      years: "4-6 anni",
      features: [
        "Stimolazione sviluppo fisico e sociale",
        "Ambiente divertente e sicuro",
        "Lavoro di squadra",
        "Allenatori esperti e dedicati",
      ],
    },
    {
      name: "Pre-agonismo",
      years: "7-12 anni",
      features: [
        "Dal minivolley all'Under 12",
        "Ambiente coinvolgente e formativo",
        "Competenze tecniche e tattiche",
        "Sviluppo del lavoro di squadra",
      ]
    },
    {
      name: "Agonismo",
      years: "13+ anni",
      features: [
        "Ambiente stimolante e sfidante",
        "Preparazione sportiva e gestione stress",
        "Sviluppo abilità tecniche e tattiche",
        "Competizioni (FIPAV, CSI e PGS)",
      ],
    }
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
            Scegli il corso più adatto a te. Dalla scuola minivolley ai corsi agonistici, abbiamo la soluzione perfetta per ogni età e livello.
          </p>

          <div   className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${courses.length} gap-6 mb-16`}>
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`relative border-red-primary/20 hover:shadow-red transition-all  `}
              >
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <div className="text-3xl font-bold text-secondary mb-4 ms-4">{course.years}</div>
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              <a href="tel:+393517506557">
                  <Button
                      className="text-base font-medium bg-white hover:bg-white/90 transition-transform duration-200 ease-in-out hover:scale-105"
                      onClick={() => window.scrollTo(0, 0)}
                  ><Phone className="w-16 h-16 text-red-900" />
                      <span className="text-red-900">+39 351 750 6557</span>
                  </Button>
              </a>
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
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-muted-foreground">Allenatori qualificati</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Corsi;
