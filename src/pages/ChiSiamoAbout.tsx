import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Award } from "lucide-react";

const ChiSiamoAbout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 text-center">
            About <span className="text-secondary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Il Club Black Bills Volley nasce dalla passione per la pallavolo e dalla voglia di creare una comunità sportiva inclusiva e competitiva.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-red-primary/20 hover:shadow-red transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">La Nostra Missione</h3>
                <p className="text-muted-foreground">
                  Formare atleti completi attraverso valori di rispetto, impegno e fair play, promuovendo la crescita sportiva e personale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-primary/20 hover:shadow-red transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">I Nostri Valori</h3>
                <p className="text-muted-foreground">
                  Passione, dedizione, spirito di squadra e rispetto sono i pilastri su cui costruiamo ogni giorno la nostra famiglia sportiva.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-primary/20 hover:shadow-red transition-all">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">La Nostra Storia</h3>
                <p className="text-muted-foreground">
                  Fondata nel 2010, la società ha raggiunto traguardi importanti nei campionati regionali e nazionali.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-card rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Un Club, Una Famiglia
            </h2>
            <p className="text-primary-foreground/90 max-w-3xl mx-auto text-lg">
              Ogni giorno lavoriamo per offrire ai nostri atleti un ambiente stimolante dove crescere tecnicamente e umanamente. La nostra struttura all'avanguardia e il nostro staff qualificato sono al servizio di chi vuole raggiungere i propri obiettivi sportivi.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChiSiamoAbout;
