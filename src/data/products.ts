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
  { id: "tx304", name: "TORVEXIA TX304 Compact", category: "tractors", price: 10850, power: "30 HP", image: "/images/tractors/tx304.jpg", features: ["4WD available", "Comfort cabin", "HST transmission", "PTO 540 rpm"], warranty: "12 months", leadTime: "30-45 days" },
  { id: "tx404", name: "TORVEXIA TX404 Utility", category: "tractors", price: 11400, power: "40 HP", image: "/images/tractors/tx404.jpg", features: ["Turbo diesel", "Power steering", "Cat.1 3-point hitch", "Air-conditioned cabin"], warranty: "12 months", leadTime: "30-45 days" },
  { id: "tx504", name: "TORVEXIA TX504 Standard", category: "tractors", price: 12000, power: "50 HP", image: "/images/tractors/tx504.jpg", features: ["Turbo intercooler engine", "12+12 transmission", "Full 4WD", "Digital display"], warranty: "12 months", leadTime: "35-50 days" },
  { id: "tx604", name: "TORVEXIA TX604 Turbo", category: "tractors", price: 14200, power: "60 HP", image: "/images/tractors/tx604.jpg", features: ["Advanced turbo engine", "Front loader compatible", "Cabin AC", "GPS ready"], warranty: "12 months", leadTime: "35-50 days" },
  { id: "tx704", name: "TORVEXIA TX704 Heavy Duty", category: "tractors", price: 16500, power: "70 HP", image: "/images/tractors/tx704.jpg", features: ["High traction power", "Reinforced suspension", "Powershift transmission", "Performance monitor"], warranty: "18 months", leadTime: "40-60 days" },
  { id: "tx804", name: "TORVEXIA TX804 Professional", category: "tractors", price: 18900, power: "80 HP", image: "/images/tractors/tx804.jpg", features: ["Agro-industrial professional", "Premium cabin", "Advanced electronic control", "Dual hydraulic system"], warranty: "18 months", leadTime: "40-60 days" },
  { id: "tx904", name: "TORVEXIA TX904 AgroForce", category: "tractors", price: 21500, power: "90 HP", image: "/images/tractors/tx904.jpg", features: ["Maximum agronomic power", "Stage V engine", "Integrated telemetry", "Pneumatic seat"], warranty: "24 months", leadTime: "45-60 days" },
  { id: "tx1104", name: "TORVEXIA TX1104 MaxPower", category: "tractors", price: 27000, power: "110 HP", image: "/images/tractors/tx1104.jpg", features: ["Maximum power", "Tier 4 electronics", "Full premium cabin", "Ideal for extensive crops"], warranty: "24 months", leadTime: "50-70 days" },
  { id: "rt150", name: "Rotavator RT150", category: "implements", price: 1850, image: "/images/implements/rt150.jpg", features: ["150cm width", "Reinforced rotor", "Compatible TX304-TX504", "Interchangeable blades"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "rt180", name: "Rotavator RT180", category: "implements", price: 2150, image: "/images/implements/rt180.jpg", features: ["180cm width", "High performance", "Compatible TX404-TX604", "Cat.2 hitch"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "rt220", name: "Rotavator RT220 Heavy", category: "implements", price: 3250, image: "/images/implements/rt220.jpg", features: ["220cm width", "Heavy duty use", "Compatible TX704+", "Reinforced chain drive"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "bx180", name: "Mulcher BX180", category: "implements", price: 2450, image: "/images/implements/bx180.jpg", features: ["Fine uniform cut", "180cm width", "Bi-metallic blades", "Compatible 40-70HP tractors"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "bx220", name: "Mulcher BX220", category: "implements", price: 3950, image: "/images/implements/bx220.jpg", features: ["Heavy industrial", "220cm width", "Ideal for tough pastures", "Compatible 60-100HP"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "ch2d", name: "2-Disc Plow", category: "implements", price: 1250, image: "/images/implements/charrue2.jpg", features: ["2 reversible discs", "Adjustable depth", "Robust construction", "Compatible 30-50HP"], warranty: "6 months", leadTime: "10-20 days" },
  { id: "ch3d", name: "3-Disc Heavy Plow", category: "implements", price: 1950, image: "/images/implements/charrue3.jpg", features: ["3 reinforced discs", "Greater coverage", "Ideal for hard soils", "Compatible 50-80HP"], warranty: "6 months", leadTime: "10-20 days" },
  { id: "her", name: "Heavy Professional Harrow", category: "implements", price: 2850, image: "/images/implements/herse.jpg", features: ["Hardened tines", "3m width", "Premium soil preparation", "Compatible 50-90HP"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "cul11", name: "11-Tine Reinforced Cultivator", category: "implements", price: 2300, image: "/images/implements/cultivateur.jpg", features: ["11 reinforced arms", "High-tension springs", "Reversible tip", "Compatible 40-70HP"], warranty: "6 months", leadTime: "10-20 days" },
  { id: "sm2", name: "2-Row Maize Seeder", category: "seeding", price: 2100, image: "/images/implements/semoir2.jpg", features: ["2 precision rows", "Mechanical seed meter", "Row marker", "Compatible 30-50HP"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "sm4", name: "4-Row Maize Seeder", category: "seeding", price: 4500, image: "/images/implements/semoir4.jpg", features: ["4 rows", "High efficiency", "Seeding monitor", "Compatible 60-90HP"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "sble", name: "Multifunction Wheat Seeder", category: "seeding", price: 3850, image: "/images/implements/semoir_ble.jpg", features: ["Sows wheat/oats/barley", "Continuous seed meter", "3m width", "Compatible 50-80HP"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "ppp", name: "Potato Planter", category: "seeding", price: 4950, image: "/images/implements/planteuse.jpg", features: ["Automatic planting", "2 rows", "Integrated fertilization", "Compatible 50-80HP"], warranty: "6 months", leadTime: "20-35 days" },
  { id: "pul400", name: "Sprayer 400L", category: "irrigation", price: 1350, image: "/images/implements/pulv400.jpg", features: ["400L HDPE tank", "Diaphragm pump", "8m boom", "Compatible 30-50HP"], warranty: "6 months", leadTime: "10-20 days" },
  { id: "pul800", name: "Sprayer 800L", category: "irrigation", price: 2450, image: "/images/implements/pulv800.jpg", features: ["800L tank", "Hydraulic agitator", "12m boom", "Compatible 50-80HP"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "pul1200", name: "Sprayer 1200L", category: "irrigation", price: 3950, image: "/images/implements/pulv1200.jpg", features: ["1200L tank", "Professional", "14m boom", "Compatible 70-110HP"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "pirrD", name: "Diesel Irrigation Pump", category: "irrigation", price: 2150, image: "/images/implements/pompe_irr.jpg", features: ["Autonomous diesel engine", "80 m³/h flow rate", "40m head", "Electric start"], warranty: "12 months", leadTime: "15-25 days" },
  { id: "gen15irr", name: "Irrigation Generator 15KVA", category: "irrigation", price: 4500, image: "/images/generators/gen15irr.jpg", features: ["15KVA 3-phase", "Diesel engine", "Ideal for electric pumps", "Digital panel"], warranty: "12 months", leadTime: "20-30 days" },
  { id: "fm210", name: "Mower FM210", category: "hay", price: 2900, image: "/images/implements/fm210.jpg", features: ["2.10m cutting width", "Cutting discs", "Conditioner", "Compatible 40-70HP"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "fm260", name: "Mower FM260 Pro", category: "hay", price: 4500, image: "/images/implements/fm260.jpg", features: ["2.60m cutting width", "Professional", "Finger conditioner", "Compatible 60-90HP"], warranty: "6 months", leadTime: "25-35 days" },
  { id: "rateau", name: "Rotary Agricultural Rake", category: "hay", price: 3250, image: "/images/implements/rateau.jpg", features: ["4 rotors", "Perfect swathing", "4m working width", "Compatible 40-70HP"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "pb80", name: "Hay Baler PB80", category: "hay", price: 7500, image: "/images/implements/pb80.jpg", features: ["80x90cm bales", "High density", "Automatic knotting", "Compatible 60-90HP"], warranty: "12 months", leadTime: "30-45 days" },
  { id: "pb120", name: "Hay Baler PB120 Pro", category: "hay", price: 10800, image: "/images/implements/pb120.jpg", features: ["120x90cm bales", "Intensive professional", "Yield monitor", "Compatible 80-110HP"], warranty: "12 months", leadTime: "35-50 days" },
  { id: "rt3", name: "Trailer RT3", category: "transport", price: 2450, image: "/images/implements/rem3.jpg", features: ["3 ton capacity", "Steel body", "Hydraulic brakes", "Compatible with all tractors"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "rt5", name: "Reinforced Trailer RT5", category: "transport", price: 3250, image: "/images/implements/rem5.jpg", features: ["5 ton capacity", "Reinforced", "Rear ramp", "Compatible 50HP+"], warranty: "6 months", leadTime: "15-25 days" },
  { id: "rt8", name: "Heavy Duty Trailer RT8", category: "transport", price: 5950, image: "/images/implements/rem8.jpg", features: ["8 ton capacity", "Heavy industrial", "Double brakes", "Compatible 70HP+"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "benne", name: "Hydraulic Tipper", category: "transport", price: 6850, image: "/images/implements/benne.jpg", features: ["Hydraulic tipping", "4mm reinforced steel", "3-way discharge", "Compatible 60HP+"], warranty: "6 months", leadTime: "20-30 days" },
  { id: "mx18", name: "Mini Excavator MX18", category: "special", price: 18500, image: "/images/implements/mx18.jpg", features: ["1.8 ton", "Extendable arm", "Multiple attachments", "Ideal for drainage/trenching"], warranty: "12 months", leadTime: "40-60 days" },
  { id: "tl200", name: "Front Loader TL200", category: "special", price: 6500, image: "/images/implements/tl200.jpg", features: ["Compatible TX504-TX1104", "1.2m³ bucket", "Joystick control", "Quick installation"], warranty: "12 months", leadTime: "20-30 days" },
  { id: "fourche", name: "Hydraulic Fork", category: "special", price: 1850, image: "/images/implements/fourche.jpg", features: ["1.5 ton capacity", "Reinforced steel", "Loader compatible", "Hydraulic adjustment"], warranty: "6 months", leadTime: "10-20 days" },
  { id: "md15", name: "Diesel Walking Tractor MD15", category: "special", price: 2350, image: "/images/implements/md15.jpg", features: ["15HP diesel", "Multi-function", "Rotary tiller/plow/furrower", "Ideal for small plots"], warranty: "12 months", leadTime: "15-25 days" },
  { id: "gen5", name: "Diesel Generator 5KVA", category: "energy", price: 1950, image: "/images/generators/gen5.jpg", features: ["5KVA single-phase", "Diesel engine", "Automatic AVR", "Electric start"], warranty: "12 months", leadTime: "15-25 days" },
  { id: "gen15", name: "Diesel Generator 15KVA", category: "energy", price: 4500, image: "/images/generators/gen15.jpg", features: ["15KVA 3-phase", "Sound-insulated", "Digital panel", "8h autonomy"], warranty: "12 months", leadTime: "20-30 days" },
  { id: "gen30", name: "Industrial Generator 30KVA", category: "energy", price: 8900, image: "/images/generators/gen30.jpg", features: ["30KVA industrial", "Perkins/Cummins engine", "Automatic ATS", "Remote monitoring"], warranty: "18 months", leadTime: "30-45 days" },
  { id: "solar", name: "Solar Irrigation Kit", category: "energy", price: 6800, image: "/images/generators/solar.jpg", features: ["10 x 400W panels", "3-phase inverter", "5HP solar pump", "No fuel needed"], warranty: "24 months", leadTime: "25-40 days" },
];

export const categories: { key: ProductCategory | "all" }[] = [
  { key: "all" },
  { key: "tractors" },
  { key: "implements" },
  { key: "seeding" },
  { key: "irrigation" },
  { key: "hay" },
  { key: "transport" },
  { key: "special" },
  { key: "energy" },
];
