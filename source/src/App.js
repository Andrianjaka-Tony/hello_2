import Hero from "./components/hero/Hero";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoJava } from "react-icons/bi";
import { DiCss3Full, DiJavascript1, DiReact } from "react-icons/di";
import { SiMysql, SiPostgresql } from "react-icons/si";
import SkillsContainer from "./components/skills/skills-container/SkillsContainer";
import ProjectContainer from "./components/project/project-container/ProjectContainer";
import Footer from "./components/footer/Footer";

function App() {
  const skillsContainerItems = [
    {
      icon: <AiOutlineHtml5 />,
      title: "html5",
      skills: 100,
    },
    {
      icon: <DiCss3Full />,
      title: "css3",
      skills: 95,
    },
    {
      icon: <DiJavascript1 />,
      title: "Javascript",
      skills: 80,
    },
    {
      icon: <DiReact />,
      title: "react",
      skills: 70,
    },
    {
      icon: <BiLogoJava />,
      title: "java",
      skills: 70,
    },
    {
      icon: <SiMysql />,
      title: "mysql",
      skills: 60,
    },
    {
      icon: <SiPostgresql />,
      title: "postgresql",
      skills: 70,
    },
  ];

  return (
    <>
      <Hero />
      <SkillsContainer items={skillsContainerItems} />
      <ProjectContainer />
      <Footer />
    </>
  );
}

export default App;
