import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import CTA from '../components/sections/CTA';
import LatestArticles from "../components/sections/LatestArticles";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <CTA />
      <LatestArticles />
    </main>
  );
}
