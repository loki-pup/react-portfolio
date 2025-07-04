import Image from "next/image";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import AchievementSection from "../components/AchievementSection";
import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations();

  return (
    <main className="flex min-h-screen flex-col bg-contain " style={{ backgroundImage: "url('./images/background2.png')" }}>
      
    <Navbar />
    <div class="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AchievementSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
      </div>
      <doggie-widget project="8"></doggie-widget>
<script src="https://saas-widget-inky.vercel.app/widget.umd.js"></script>
      <Footer />
    </main>
  );
}
