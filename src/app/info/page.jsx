// custom components
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutMe from "../component/AboutMe";
import GridContainer from "../component/GridContainer";
import ContentCard1 from "../component/ContentCard1";
import ContentCard2 from "../component/ContentCard2";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <AboutMe />
      <GridContainer>
        <ContentCard1 />
        <ContentCard2 />
        <ContentCard2 />
        <ContentCard1 />
        <ContentCard1 />
        <ContentCard2 />
      </GridContainer>
      <Footer />
    </main>
  );
}
