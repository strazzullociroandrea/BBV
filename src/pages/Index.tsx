import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Trophy, Users, Calendar, Award, Phone} from "lucide-react";
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
            <Navbar/>

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
                    <div className="absolute inset-0 bg-gradient-overlay"/>
                </div>

                <div className="container mx-auto px-4 z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
                        CLUB <span className="text-secondary">BLACK BULLS</span> VOLLEY
                    </h1>
                    <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                        Passione, formazione e valori sportivi.
                    </p>
                </div>
            </section>

            {/* Chi siamo Section */}
            <section className="py-16 bg-muted">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <Card className="bg-background/95 shadow-xl border-0">
                            <CardContent className="p-6 md:p-10">
                                <h2 className="text-3xl md:text-5xl font-extrabold mb-2 md:mb-4 text-secondary text-center md:text-left">
                                    Black Bulls Volley
                                </h2>
                                <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 text-primary text-center md:text-left">
                                    Più di una squadra, una famiglia
                                </h3>
                                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6 text-center md:text-left">
                                    Un club dove la pallavolo è passione, amicizia e rispetto. Cresciamo insieme, ci
                                    divertiamo e costruiamo una vera comunità.
                                </p>
                                <div
                                    className="flex flex-row md:flex-col justify-center md:justify-start gap-4 md:gap-3 mb-4 md:mb-6">
                                    <div
                                        className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-3">
                                        <Users className="text-secondary" size={24}/>
                                        <span className="font-semibold text-base md:text-lg">Comunità</span>
                                    </div>
                                    <div
                                        className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-3">
                                        <Award className="text-secondary" size={24}/>
                                        <span className="font-semibold text-base md:text-lg">Crescita</span>
                                    </div>
                                    <div
                                        className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-3">
                                        <Trophy className="text-secondary" size={24}/>
                                        <span className="font-semibold text-base md:text-lg">Passione</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="w-full md:w-1/2 relative flex flex-col items-center">
                        <img
                            src={heroImage}
                            alt="Squadra Black Bulls Volley"
                            className="rounded-xl shadow-2xl w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-hero">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <div
                        className="w-full max-w-xl backdrop-blur-md bg-background/70 rounded-2xl border border-secondary/30 shadow-lg p-10 flex flex-col items-center">
                        <h2 className="text-4xl font-bold text-secondary mb-4 text-center drop-shadow">
                            Scopri la tua passione per la pallavolo
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6 text-center">
                            Prenota una{" "}
                            <span className="font-semibold text-secondary">prova gratuita</span>{" "}
                            e vivi l’esperienza Black Bulls.
                            <br/>
                            Il nostro staff ti accoglierà con professionalità e entusiasmo.
                        </p>
                        <div className="w-full mb-6 flex flex-col items-center">
                            <div className="flex items-center gap-2 mb-3">
                                <svg
                                    width="22"
                                    height="22"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    className="text-secondary"
                                >
                                    <path
                                        d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span className="font-semibold text-lg">351 750 6557</span>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    Dal Lunedì al Venerdì
                  </span>
                                    <span className="text-base text-muted-foreground">
                    10:00 – 13:00 / 16:00 - 20:00
                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    Sabato
                  </span>
                                    <span className="text-base text-muted-foreground">
                    10:00 - 13:00
                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                  <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    Domenica
                  </span>
                                    <span className="text-base text-muted-foreground">
                    Chiuso
                  </span>
                                </div>
                            </div>
                        </div>
                        <a href="tel:+393517506557">
                            <Button
                                className="text-base font-medium bg-red-primary hover:bg-red-primary/90 transition-transform duration-200 ease-in-out hover:scale-105"
                            ><Phone className="w-16 h-16 text-white"/>
                                Chiamaci ora
                            </Button>
                        </a>
                    </div>
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
                            <Card
                                key={item}
                                className="overflow-hidden group hover:shadow-red transition-all"
                            >
                                <div className="h-48 bg-gradient-card"/>
                                <CardContent className="pt-6">
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-secondary transition-colors">
                                        Vittoria nel Derby Regionale
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        La nostra squadra Under 18 conquista una vittoria importante nel
                                        derby contro i rivali storici.
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

            <Footer/>
        </div>
    );
};

export default Index;
