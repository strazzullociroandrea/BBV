import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

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

  const results = [
    {
      date: "10 Gen 2025",
      home: "Black Bills Volley",
      scoreHome: 3,
      away: "Volley Team Gialli",
      scoreAway: 1,
      category: "Serie C Femminile",
    },
    {
      date: "8 Gen 2025",
      home: "Black Bills Volley U18",
      scoreHome: 3,
      away: "Junior Volley Academy",
      scoreAway: 0,
      category: "Under 18",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Calendario <span className="text-secondary">Partite</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Vieni a sostenere le nostre squadre! Qui trovi tutte le prossime partite e i risultati recenti.
          </p>

          {/* Prossime Partite */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <CalendarIcon className="text-secondary" />
              Prossime Partite
            </h2>
            <div className="space-y-4">
              {matches.map((match, index) => (
                <Card
                  key={index}
                  className="border-red-primary/20 hover:border-secondary hover:shadow-red transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                            {match.category}
                          </span>
                        </div>
                        <div className="text-xl font-semibold mb-2">
                          {match.home} <span className="text-muted-foreground">vs</span> {match.away}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <CalendarIcon size={16} className="text-secondary" />
                            {match.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-secondary" />
                            {match.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-secondary" />
                            {match.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Risultati Recenti */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Ultimi <span className="text-secondary">Risultati</span>
            </h2>
            <div className="space-y-4">
              {results.map((result, index) => (
                <Card
                  key={index}
                  className="border-red-primary/20 hover:shadow-red transition-all"
                >
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                            {result.category}
                          </span>
                          <span className="text-sm text-muted-foreground">{result.date}</span>
                        </div>
                        <div className="flex items-center gap-4 text-xl font-semibold">
                          <span>{result.home}</span>
                          <span className="text-3xl text-secondary">
                            {result.scoreHome} - {result.scoreAway}
                          </span>
                          <span>{result.away}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-gradient-card rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Vieni a Tifare per Noi!
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg">
              L'ingresso alle partite casalinghe è gratuito. Porta la tua famiglia e i tuoi amici a sostenere il Black Bills Volley!
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Calendario;
