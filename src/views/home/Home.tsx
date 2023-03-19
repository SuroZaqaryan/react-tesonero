import DefaultLayout from 'layouts/DefaultLayout';
import HeroSection from './sections/hero-section/HeroSection'
import MainSection from "./sections/main-section/MainSection";

function Home() {
  return (
    <DefaultLayout>
      <main>
          <HeroSection />
          <MainSection />
      </main>
    </DefaultLayout>
  );
}

export default Home;
