import React from 'react';
import { m } from 'framer-motion';
import { Shield, Lock, Server, EyeOff, Key, Database, WifiOff } from 'lucide-react';
import { Hero, Section, Card } from '../../components/ui';
import SEO from '../../components/core/SEO';

export default function DeDataSovereignty() {
    const principles = [
        { title: "Local-First-Architektur", description: "Ihr System läuft auf Ihrer Hardware. Cloud-Konnektivität ist optional, nicht obligatorisch.", hoverText: "Wir priorisieren On-Premise-Logik. Wenn das Internet ausfällt, funktioniert Ihr Anwesen weiterhin einwandfrei.", icon: Server },
        { title: "Eigentum beim Kunden", description: "Sie besitzen die Daten. Sie besitzen die Schlüssel. Sie besitzen den Code.", hoverText: "Keine Lizenz-Leashen. Nach dem Deployment gehört das System Ihnen auf ewig.", icon: Key },
        { title: "Null Telemetrie", description: "Wir verfolgen keine Nutzung. Wir aggregieren keine Daten.", hoverText: "Vœrynth kennt kein 'Zuhause'. Ihre Gewohnheiten und Muster bleiben strikt innerhalb Ihrer Mauern.", icon: EyeOff },
        { title: "Kryptographische Integrität", description: "Verschlüsselung auf militärischem Niveau für alle internen und externen Überprüfungen.", hoverText: "Jeder Befehl wird verifiziert. Jeder Knoten wird authentifiziert. Vertrauen ist mathematisch, nicht angenommen.", icon: Lock },
        { title: "Die Air-Gap-Option", description: "Systeme, die in vollständiger physischer Isolation funktionieren.", hoverText: "Für ultra-sichere Umgebungen können wir vollständig air-gapped Netzwerke ohne physische Route ins öffentliche Netz einrichten.", icon: WifiOff },
        { title: "Prüfbarer Code", description: "Transparenz für Ihr Sicherheitsteam.", hoverText: "Wir gewähren Ihren Sicherheitsauditoren vollständigen Quellcode-Zugang zur Validierung.", icon: Database }
    ];

    return (
        <>
            <SEO
                title="Datensouveränität & Privatsphäre"
                description="Unser Bekenntnis zu Privatsphäre, Local-First-Architektur und Dateneigentum beim Kunden."
                keywords="Datensouveränität, lokale Daten, Privatsphäre zuerst, kein Cloud"
                canonical="/de/data-sovereignty"
            />
            <Hero title="Souveränität" subtitle="Wahres Privileg ist eine Privatsphäre, die nicht widerrufen werden kann." bgImage="/assets/sovereignty_hero_bg_v2.webp">
                <div className="max-w-2xl mx-auto text-white/40 text-sm leading-loose mb-12 font-light">
                    <p className="mb-4">Im Zeitalter des Überwachungskapitalismus ist Privatsphäre das ultimative Gut.</p>
                    <p>Vœrynth baut Systeme, die sich weigern zu spionieren. Wir gestalten für Eigentum, Isolation und absolute Kontrolle.</p>
                </div>
            </Hero>

            <Section>
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                        <h2 className="text-2xl font-light text-white/95 mb-8 leading-relaxed">Die Charta des Vertrauens</h2>
                        <p className="text-white/50 leading-loose text-base font-light">
                            Wir glauben, dass eine private Umgebung privat bleiben sollte. Ihr Zuhause, Ihre Jacht und Ihr Büro sind keine Datenminen.
                        </p>
                    </m.div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((item, idx) => (
                        <Card key={idx} title={item.title} description={item.description} hoverText={item.hoverText} icon={item.icon} delay={idx * 0.1} />
                    ))}
                </div>
            </Section>

            <Section className="bg-[#0D0D0D] border-y border-white/5">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <m.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.2 }}>
                            <h2 className="text-3xl font-light text-white/95 mb-8 leading-relaxed">Der Air-Gap-Standard</h2>
                            <div className="space-y-6 text-white/60 font-light leading-loose text-sm">
                                <p>Für unsere sensibelsten Kunden installieren wir „air-gapped" Systeme. Diese Netzwerke haben keine physische oder logische Verbindung zum öffentlichen Internet.</p>
                                <p>Updates werden manuell über sichere physische Medien eingespielt. Fernzugriff ist physisch unmöglich, weil der Pfad schlicht nicht existiert.</p>
                                <p className="text-[#C9A961] border-l border-[#C9A961]/30 pl-4 py-2">„Was man nicht erreichen kann, kann man nicht hacken."</p>
                            </div>
                        </m.div>
                    </div>
                    <div className="relative h-full min-h-[400px] border border-white/5 bg-[#050505]">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Shield size={120} strokeWidth={0.5} className="text-[#C9A961]/20" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 border border-white/10 rounded-full animate-pulse opacity-20"></div>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="py-24">
                <div className="max-w-4xl mx-auto text-center border p-12 border-white/5 bg-white/[0.02]">
                    <h3 className="text-white/80 font-light mb-6 text-lg">Ein Hinweis zur Sicherheit</h3>
                    <p className="text-white/40 text-xs leading-loose font-light">
                        Obwohl wir Verschlüsselung auf militärischem Niveau und Isolationsarchitekturen einsetzen, ist kein System theoretisch unverwundbar. Sicherheit ist ein Prozess, kein Produkt. Wir arbeiten eng mit Ihren privaten Sicherheitsteams zusammen, um sicherzustellen, dass unser digitaler Fußabdruck mit Ihren physischen Sicherheitsprotokollen übereinstimmt.
                    </p>
                </div>
            </Section>
        </>
    );
}
