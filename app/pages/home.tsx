import Hero from "../components/hero";
import About from "../components/about";
import Events from "../components/events";
import Quote from "../components/quote";
import Schedule from "../components/schedule";
import LocationMaps from "../components/location-maps";
import Footer from "../components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Events />
      <Quote />
      <Schedule />
      <LocationMaps />
      <Footer />
    </>
  );
}
