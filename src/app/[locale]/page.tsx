import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { CatalogPreview } from "@/components/sections/CatalogPreview";
import { PaymentSection } from "@/components/sections/PaymentSection";
import { ShippingSection } from "@/components/sections/ShippingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CatalogPreview />
      <PaymentSection />
      <ShippingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
