import FeaturesPage from "@/components/internal/features";
import FooterSection from "@/components/internal/footer";
import Header from "@/components/internal/header";
import HeroSection from "@/components/internal/hero";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesPage />
      <FooterSection />
    </>
  );
}
