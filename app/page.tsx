import ChairmanMessage from "./ChairmanMessage";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HeroABout from "./HeroABout";
import HomeForm from "./HomeForm";
import ProgramStreams from "./ProgramStreams";
import ShibleeFirsts from "./ShibleeFirsts";
import ShibleeFirstsPre from "./ShibleeFirstsPre";
import Statistics from "./Statistics";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <HeroABout />
    <Statistics />
    <ProgramStreams />
    <ShibleeFirstsPre />
    <ShibleeFirsts />
    <ChairmanMessage />
    <HomeForm />
    <Footer />
    </>
  );
}
