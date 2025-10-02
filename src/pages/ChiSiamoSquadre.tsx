import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import teamPhoto from "@/assets/team-photo.jpg";

const ChiSiamoSquadre = () => {
  const teams = [
    {
      name: "Serie C Femminile",
      description: "La nostra squadra di punta che compete nel campionato regionale",
      players: "15 atlete",
    },
    {
      name: "Under 18",
      description: "Giovani promesse del volley regionale",
      players: "18 atleti",
    },
    {
      name: "Under 16",
      description: "Il vivaio del nostro club con grandi prospettive",
      players: "22 atleti",
    },
    {
      name: "Under 14",
      description: "I nostri campioni di domani",
      players: "25 atleti",
    },
    {
      name: "Minivolley",
      description: "Dai 6 ai 12 anni, dove inizia la passione",
      players: "30 atleti",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Le Nostre <span className="text-secondary">Squadre</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Dal minivolley alle categorie senior, ogni squadra rappresenta l'eccellenza e i valori del Black Bills Volley.
          </p>

          <div className="mb-16">
            <img
              src={teamPhoto}
              alt="Team Black Bills Volley"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-strong"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team, index) => (
              <Card
                key={index}
                className="border-red-primary/20 hover:border-secondary hover:shadow-red transition-all group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-semibold group-hover:text-secondary transition-colors">
                      {team.name}
                    </h3>
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {team.players}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{team.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-card rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Voglia di Competere?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto text-lg mb-6">
              Se hai la passione per la pallavolo e vuoi far parte di una squadra vincente, contattaci per informazioni sui provini.
            </p>
            <a
              href="mailto:info@blackbillsvolley.it"
              className="inline-block bg-primary-foreground text-black-primary px-8 py-3 rounded-md font-semibold hover:bg-primary-foreground/90 transition-all hover:shadow-red"
            >
              Contattaci
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamoSquadre;
