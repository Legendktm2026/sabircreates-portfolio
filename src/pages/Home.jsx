import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import ScrollProgress from "../components/layout/ScrollProgress.jsx";
import About from "../components/sections/About.jsx";
import AIFeatures from "../components/sections/AIFeatures.jsx";
import BikeShowcase from "../components/sections/BikeShowcase.jsx";
import Collaboration from "../components/sections/Collaboration.jsx";
import Community from "../components/sections/Community.jsx";
import Gallery from "../components/sections/Gallery.jsx";
import Hero from "../components/sections/Hero.jsx";
import Reels from "../components/sections/Reels.jsx";
import SocialFeed from "../components/sections/SocialFeed.jsx";
import Stories from "../components/sections/Stories.jsx";
import TravelMap from "../components/sections/TravelMap.jsx";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-carbon text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Reels />
        <Gallery />
        <BikeShowcase />
        <TravelMap />
        <Stories />
        <Community />
        <AIFeatures />
        <Collaboration />
        <SocialFeed />
      </main>
      <Footer />
    </div>
  );
}
