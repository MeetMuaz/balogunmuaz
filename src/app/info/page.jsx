"use client";
// custom components
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AboutMe from "../component/AboutMe";
import GridContainer from "../component/GridContainer";
import ContentCard1 from "../component/ContentCard1";
import ContentCard2 from "../component/ContentCard2";
import TechStack from "../component/TechStack";

import { FaDocker, FaAws, FaReact, FaNode, FaPhp, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiPostgresql } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";

const techstacks = [
  { logo: FaDocker },
  { logo: FaAws },
  { logo: FaReact },
  { logo: FaNode },
  { logo: FaPhp },
  { logo: FaJava },
  { logo: IoLogoJavascript },
  { logo: DiPostgresql },
  { logo: DiMysql },
  { logo: DiMongodb }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <AboutMe />
      <GridContainer>
        <ContentCard1 title={""} content={""} />
        <ContentCard2 title={""} content={""} />
        <ContentCard2 title={""} content={""} />
        <ContentCard1 title={""} content={""} />
      </GridContainer>
      <TechStack techstacks={techstacks} />
      <Footer />
    </main>
  );
}
