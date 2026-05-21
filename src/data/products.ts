export type ProductCategory =
  | "tractors"
  | "implements"
  | "seeding"
  | "irrigation"
  | "hay"
  | "transport"
  | "special"
  | "energy";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  power?: string;
  image: string;
  features: string[];
  warranty: string;
  leadTime: string;
}

export const products: Product[] = [
  { id: "tx304", name: "TORVEXIA TX304 Compact", category: "tractors", price: 10850, power: "30 HP", image: "/images/tractors/tx304.jpg", features: ["4WD disponible", "Cabine confort", "Transmission HST", "Prise de force 540 rpm"], warranty: "12 meses", leadTime: "30-45 días" },
  { id: "tx404", name: "TORVEXIA TX404 Utility", category: "tractors", price: 11400, power: "40 HP", image: "/images/tractors/tx404.jpg", features: ["Turbo diesel", "Dirección asistida", "3 puntos Cat.1", "Cabina climatizada"], warranty: "12 meses", leadTime: "30-45 días" },
  { id: "tx504", name: "TORVEXIA TX504 Standard", category: "tractors", price: 12000, power: "50 HP", image: "/images/tractors/tx504.jpg", features: ["Motor turbo intercooler", "Transmisión 12+12", "4WD integral", "Pantalla digital"], warranty: "12 meses", leadTime: "35-50 días" },
  { id: "tx604", name: "TORVEXIA TX604 Turbo", category: "tractors", price: 14200, power: "60 HP", image: "/images/tractors/tx604.jpg", features: ["Motor turbo avanzado", "Cargador frontal compatible", "AC cabina", "GPS ready"], warranty: "12 meses", leadTime: "35-50 días" },
  { id: "tx704", name: "TORVEXIA TX704 Heavy Duty", category: "tractors", price: 16500, power: "70 HP", image: "/images/tractors/tx704.jpg", features: ["Alta potencia de tracción", "Suspensión reforzada", "Transmisión powershift", "Monitor de rendimiento"], warranty: "18 meses", leadTime: "40-60 días" },
  { id: "tx804", name: "TORVEXIA TX804 Professional", category: "tractors", price: 18900, power: "80 HP", image: "/images/tractors/tx804.jpg", features: ["Profesional agroindustrial", "Cabina premium", "Control electrónico avanzado", "Sistema hidráulico dual"], warranty: "18 meses", leadTime: "40-60 días" },
  { id: "tx904", name: "TORVEXIA TX904 AgroForce", category: "tractors", price: 21500, power: "90 HP", image: "/images/tractors/tx904.jpg", features: ["Fuerza agronómica máxima", "Motor Stage V", "Telemetría integrada", "Asiento neumático"], warranty: "24 meses", leadTime: "45-60 días" },
  { id: "tx1104", name: "TORVEXIA TX1104 MaxPower", category: "tractors", price: 27000, power: "110 HP", image: "/images/tractors/tx1104.jpg", features: ["Máxima potencia", "Electrónica Tier 4", "Cabina premium full", "Ideal cultivos extensivos"], warranty: "24 meses", leadTime: "50-70 días" },
  { id: "rt150", name: "Rotavator RT150", category: "implements", price: 1850, image: "/images/implements/rt150.jpg", features: ["Ancho 150cm", "Rotor reforzado", "Compatible TX304-TX504", "Cuchillas intercambiables"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "rt180", name: "Rotavator RT180", category: "implements", price: 2150, image: "/images/implements/rt180.jpg", features: ["Ancho 180cm", "Alto rendimiento", "Compatible TX404-TX604", "Enganche Cat.2"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "rt220", name: "Rotavator RT220 Heavy", category: "implements", price: 3250, image: "/images/implements/rt220.jpg", features: ["Ancho 220cm", "Uso intensivo", "Compatible TX704+", "Transmisión cadena reforzada"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "bx180", name: "Broyeur BX180", category: "implements", price: 2450, image: "/images/implements/bx180.jpg", features: ["Corte fino uniforme", "Ancho 180cm", "Cuchillas bimetálicas", "Compatible tractores 40-70HP"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "bx220", name: "Broyeur BX220", category: "implements", price: 3950, image: "/images/implements/bx220.jpg", features: ["Industrial pesado", "Ancho 220cm", "Ideal pasturas duras", "Compatible 60-100HP"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "ch2d", name: "Charrue 2 disques", category: "implements", price: 1250, image: "/images/implements/charrue2.jpg", features: ["2 discos reversibles", "Profundidad ajustable", "Construcción robusta", "Compatible 30-50HP"], warranty: "6 meses", leadTime: "10-20 días" },
  { id: "ch3d", name: "Charrue 3 disques renforcée", category: "implements", price: 1950, image: "/images/implements/charrue3.jpg", features: ["3 discos reforzados", "Mayor cobertura", "Ideal suelos duros", "Compatible 50-80HP"], warranty: "6 meses", leadTime: "10-20 días" },
  { id: "her", name: "Herse lourde professionnelle", category: "implements", price: 2850, image: "/images/implements/herse.jpg", features: ["Dientes templados", "Ancho 3m", "Preparación suelo premium", "Compatible 50-90HP"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "cul11", name: "Cultivateur renforcé 11 dents", category: "implements", price: 2300, image: "/images/implements/cultivateur.jpg", features: ["11 brazos reforzados", "Resortes de alta tensión", "Punta reversible", "Compatible 40-70HP"], warranty: "6 meses", leadTime: "10-20 días" },
  { id: "sm2", name: "Semoir maïs 2 rangs", category: "seeding", price: 2100, image: "/images/implements/semoir2.jpg", features: ["2 hileras precisas", "Dosificador mecánico", "Marcador surcos", "Compatible 30-50HP"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "sm4", name: "Semoir maïs 4 rangs", category: "seeding", price: 4500, image: "/images/implements/semoir4.jpg", features: ["4 hileras", "Alta eficiencia", "Monitor de siembra", "Compatible 60-90HP"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "sble", name: "Semoir blé multifonction", category: "seeding", price: 3850, image: "/images/implements/semoir_ble.jpg", features: ["Siembra trigo/avena/cebada", "Dosificador continuo", "Ancho 3m", "Compatible 50-80HP"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "ppp", name: "Planteuse pommes de terre", category: "seeding", price: 4950, image: "/images/implements/planteuse.jpg", features: ["Plantación automática", "2 hileras", "Fertilización integrada", "Compatible 50-80HP"], warranty: "6 meses", leadTime: "20-35 días" },
  { id: "pul400", name: "Pulvérisateur 400L", category: "irrigation", price: 1350, image: "/images/implements/pulv400.jpg", features: ["Tanque 400L PEAD", "Bomba membrana", "Botalón 8m", "Compatible 30-50HP"], warranty: "6 meses", leadTime: "10-20 días" },
  { id: "pul800", name: "Pulvérisateur 800L", category: "irrigation", price: 2450, image: "/images/implements/pulv800.jpg", features: ["Tanque 800L", "Agitador hidráulico", "Botalón 12m", "Compatible 50-80HP"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "pul1200", name: "Pulvérisateur 1200L", category: "irrigation", price: 3950, image: "/images/implements/pulv1200.jpg", features: ["Tanque 1200L", "Profesional", "Botalón 14m", "Compatible 70-110HP"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "pirrD", name: "Pompe irrigation diesel", category: "irrigation", price: 2150, image: "/images/implements/pompe_irr.jpg", features: ["Motor diesel autónomo", "Caudal 80 m³/h", "Alteza 40m", "Arranque eléctrico"], warranty: "12 meses", leadTime: "15-25 días" },
  { id: "gen15irr", name: "Générateur irrigation 15KVA", category: "irrigation", price: 4500, image: "/images/generators/gen15irr.jpg", features: ["15KVA trifásico", "Motor diesel", "Ideal bombas eléctricas", "Panel digital"], warranty: "12 meses", leadTime: "20-30 días" },
  { id: "fm210", name: "Faucheuse FM210", category: "hay", price: 2900, image: "/images/implements/fm210.jpg", features: ["Corte 2.10m", "Discos de corte", "Acondicionador", "Compatible 40-70HP"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "fm260", name: "Faucheuse FM260 Pro", category: "hay", price: 4500, image: "/images/implements/fm260.jpg", features: ["Corte 2.60m", "Profesional", "Acondicionador de dedos", "Compatible 60-90HP"], warranty: "6 meses", leadTime: "25-35 días" },
  { id: "rateau", name: "Râteau agricole rotatif", category: "hay", price: 3250, image: "/images/implements/rateau.jpg", features: ["4 rotores", "Hilerado perfecto", "Ancho trabajo 4m", "Compatible 40-70HP"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "pb80", name: "Presse à foin PB80", category: "hay", price: 7500, image: "/images/implements/pb80.jpg", features: ["Paquetes 80x90cm", "Alta densidad", "Atadora automática", "Compatible 60-90HP"], warranty: "12 meses", leadTime: "30-45 días" },
  { id: "pb120", name: "Presse à foin PB120 Pro", category: "hay", price: 10800, image: "/images/implements/pb120.jpg", features: ["Paquetes 120x90cm", "Profesional intensivo", "Monitor rendimiento", "Compatible 80-110HP"], warranty: "12 meses", leadTime: "35-50 días" },
  { id: "rt3", name: "Remorque RT3", category: "transport", price: 2450, image: "/images/implements/rem3.jpg", features: ["Capacidad 3 ton", "Carrocería acero", "Frenos hidráulicos", "Compatible todos tractores"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "rt5", name: "Remorque RT5 renforcée", category: "transport", price: 3250, image: "/images/implements/rem5.jpg", features: ["Capacidad 5 ton", "Reforzada", "Rampa trasera", "Compatible 50HP+"], warranty: "6 meses", leadTime: "15-25 días" },
  { id: "rt8", name: "Remorque RT8 Heavy Duty", category: "transport", price: 5950, image: "/images/implements/rem8.jpg", features: ["Capacidad 8 ton", "Industrial pesada", "Frenos dobles", "Compatible 70HP+"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "benne", name: "Benne hydraulique agricole", category: "transport", price: 6850, image: "/images/implements/benne.jpg", features: ["Volteo hidráulico", "Acero reforzado 4mm", "3 direcciones descarga", "Compatible 60HP+"], warranty: "6 meses", leadTime: "20-30 días" },
  { id: "mx18", name: "Mini pelle agricole MX18", category: "special", price: 18500, image: "/images/implements/mx18.jpg", features: ["1.8 ton", "Brazo extensible", "Múltiples accesorios", "Ideal drenajes/zanjeos"], warranty: "12 meses", leadTime: "40-60 días" },
  { id: "tl200", name: "Chargeur frontal TL200", category: "special", price: 6500, image: "/images/implements/tl200.jpg", features: ["Compatible TX504-TX1104", "Cuchara 1.2m³", "Control joystick", "Instalación rápida"], warranty: "12 meses", leadTime: "20-30 días" },
  { id: "fourche", name: "Fourche hydraulique", category: "special", price: 1850, image: "/images/implements/fourche.jpg", features: ["Capacidad 1.5 ton", "Acero reforzado", "Compatible cargadores", "Ajuste hidráulico"], warranty: "6 meses", leadTime: "10-20 días" },
  { id: "md15", name: "Motoculteur diesel MD15", category: "special", price: 2350, image: "/images/implements/md15.jpg", features: ["15HP diesel", "Multifunción", "Fresadora/arado/surcador", "Ideal pequeñas parcelas"], warranty: "12 meses", leadTime: "15-25 días" },
  { id: "gen5", name: "Générateur diesel 5KVA", category: "energy", price: 1950, image: "/images/generators/gen5.jpg", features: ["5KVA monofásico", "Motor diesel", "AVR automático", "Arranque eléctrico"], warranty: "12 meses", leadTime: "15-25 días" },
  { id: "gen15", name: "Générateur diesel 15KVA", category: "energy", price: 4500, image: "/images/generators/gen15.jpg", features: ["15KVA trifásico", "Insonorizado", "Panel digital", "Autonomía 8h"], warranty: "12 meses", leadTime: "20-30 días" },
  { id: "gen30", name: "Générateur industriel 30KVA", category: "energy", price: 8900, image: "/images/generators/gen30.jpg", features: ["30KVA industrial", "Motor Perkins/Cummins", "ATS automático", "Monitoreo remoto"], warranty: "18 meses", leadTime: "30-45 días" },
  { id: "solar", name: "Kit solaire irrigation", category: "energy", price: 6800, image: "/images/generators/solar.jpg", features: ["10 paneles 400W", "Inversor trifásico", "Bomba solar 5HP", "Sin combustible"], warranty: "24 meses", leadTime: "25-40 días" },
];

export const categories: { key: ProductCategory | "all"; label: string }[] = [
  { key: "all", label: "Tous / All" },
  { key: "tractors", label: "Tracteurs" },
  { key: "implements", label: "Implementos" },
  { key: "seeding", label: "Siembra" },
  { key: "irrigation", label: "Irrigación" },
  { key: "hay", label: "Foin & Forraje" },
  { key: "transport", label: "Transport" },
  { key: "special", label: "Especial" },
  { key: "energy", label: "Energía" },
];
