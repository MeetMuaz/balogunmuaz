// custom components
import Head from "next/head";
import Navbar from "./component/Navbar";
import ProjectCard from "./component/ProjectCard";
import Footer from "./component/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <ProjectCard hoverCardProp='hover-card-1'/>
      <ProjectCard hoverCardProp='hover-card-2'/>
      <ProjectCard hoverCardProp='hover-card-3'/>
      <ProjectCard hoverCardProp='hover-card-4'/>
      <Footer />
    </main>
  );
}
