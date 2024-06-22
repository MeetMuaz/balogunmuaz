// custom components
import Navbar from "../component/Navbar";
import ProjectCard from "../component/ProjectCard";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Footer />
    </main>
  );
}
