import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { School, Heart, Users, Trophy } from "lucide-react";

const ChiSiamoIniziative = () => {
  const initiatives = [
    {
      icon: School,
      title: "Volley nelle Scuole",
      description:
        "Collaboriamo con le scuole del territorio per promuovere l'attività sportiva tra i giovani, offrendo lezioni gratuite di introduzione alla pallavolo.",
    },
    {
      icon: Heart,
      title: "Sport per Tutti",
      description:
        "Programmi inclusivi che permettono a chiunque di avvicinarsi alla pallavolo, indipendentemente dall'età o dal livello di preparazione.",
    },
    {
      icon: Users,
      title: "Camp Estivi",
      description:
        "Ogni estate organizziamo camp intensivi con coach professionisti, combinando allenamento e divertimento per ragazzi di tutte le età.",
    },
    {
      icon: Trophy,
      title: "Tornei Giovanili",
      description:
        "Organizziamo tornei locali per promuovere la competizione sana e lo spirito sportivo tra le giovani generazioni.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Le Nostre <span className="text-secondary">Iniziative</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Il Black Bills Volley è impegnato nel territorio con progetti che promuovono lo sport come strumento di crescita e inclusione sociale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {initiatives.map((initiative, index) => (
              <Card
                key={index}
                className="border-red-primary/20 hover:border-secondary hover:shadow-red transition-all group"
              >
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-all">
                    <initiative.icon className="w-7 h-7 text-secondary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-secondary transition-colors">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground">{initiative.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Progetti <span className="text-secondary">Speciali</span>
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="bg-card p-6 rounded-lg border border-red-primary/20">
                <h3 className="text-xl font-semibold mb-3">Pallavolo e Beneficenza</h3>
                <p className="text-muted-foreground">
                  Ogni anno organizziamo eventi benefici dove parte degli incassi viene devoluta ad associazioni locali che si occupano di aiutare bambini e famiglie in difficoltà.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-red-primary/20">
                <h3 className="text-xl font-semibold mb-3">Volley & Ambiente</h3>
                <p className="text-muted-foreground">
                  Siamo impegnati nella sostenibilità ambientale: promuoviamo l'uso di materiali eco-friendly e organizziamo giornate di pulizia delle aree verdi insieme ai nostri atleti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamoIniziative;
