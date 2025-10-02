import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {Calendar as CalendarIcon, MapPin, Clock, Phone, Check} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const Calendario = () => {
  const matches = [
    {
      date: "15 Gen 2025",
      time: "18:30",
      home: "Black Bills Volley",
      away: "ASD Pallavolo Rossi",
      location: "Palazzetto dello Sport",
      category: "Serie C Femminile",
    },
    {
      date: "18 Gen 2025",
      time: "20:00",
      home: "Volley Club Bianchi",
      away: "Black Bills Volley U18",
      location: "Palestra Comunale",
      category: "Under 18",
    },
    {
      date: "22 Gen 2025",
      time: "17:00",
      home: "Black Bills Volley U16",
      away: "ASD Junior Volley",
      location: "Palazzetto dello Sport",
      category: "Under 16",
    },
    {
      date: "25 Gen 2025",
      time: "19:00",
      home: "Sporting Volley",
      away: "Black Bills Volley",
      location: "Arena Sportiva",
      category: "Serie C Femminile",
    },
    {
      date: "29 Gen 2025",
      time: "18:00",
      home: "Black Bills Volley U14",
      away: "Polisportiva Verde",
      location: "Palazzetto dello Sport",
      category: "Under 14",
    },
  ];

  const categorie = [
      {
          name: "1° Div. Maschile",
          imgPath: "",
          link: "https://www.sol.milano.federvolley.it/sol/webRisultati/Calendari.aspx?serie=1DM&fase=1&girone=C&squadra=474&stagione=2023"
      },
      {
          name: "Open Maschile",
          imgPath: "",
          link: "https://volley.pgsmilano.org/calendari"
      },
      {
          name: "Under 20 femminile",
          imgPath: "",
          link: "https://volley.pgsmilano.org/calendari"
      },
      {
          name: "Under 16 femminile",
          imgPath: "",
          link: "https://volley.pgsmilano.org/calendari"
      },
      {
          name: "Under 12",
          imgPath: "",
          link: "https://volley.pgsmilano.org/calendari"
      },
      {
          name: "Minivolley",
          imgPath: "",
          link: "https://www.sol.milano.federvolley.it/campionatiris"
      }

  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Calendario <span className="text-secondary">Partite</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Vieni a sostenere le nostre squadre!
          </p>

          {/* Prossime Partite */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CalendarIcon className="text-secondary" />
              Visualizza il calendario della tua squadra
            </h2>
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${categorie.length/2} gap-6 mb-16`}>
                {categorie.map((categoria, index) => {
                  const imgSrc = categoria.imgPath && categoria.imgPath.trim() !== "" ? categoria.imgPath : "/placeholder.svg";
                  return (
                    <Card
                      key={index}
                      className="relative border-red-primary/20 hover:shadow-red transition-all flex flex-col items-center p-4"
                      onClick={() => window.open(categoria.link, "_blank")}
                    >
                      <img
                        src={imgSrc}
                        alt={categoria.name}
                        className="w-24 h-24 object-cover rounded-full shadow mb-4 bg-muted"
                      />
                      <CardContent className="pt-2 text-center">
                        <h3 className="text-xl font-semibold mb-2">{categoria.name}</h3>
                        <a href={categoria.link} className="text-red-900 hover:underline" target="_blank" rel="noopener noreferrer">
                          Visualizza il calendario
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
          </div>


            <div className="mt-16 bg-gradient-card rounded-lg p-12 text-center">
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calendario;
