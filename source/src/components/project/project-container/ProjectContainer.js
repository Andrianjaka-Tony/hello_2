import "./ProjectContainer.scss";
import WordWrapper from "../../wrapper/word-wrapper/WordWrapper";
import { useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SentenceWrapper from "../../wrapper/sentence-wrapper/SentenceWrapper";
import img1 from "../../../image/img1.png";
import img2 from "../../../image/img2.png";
import img3 from "../../../image/img3.png";
import img4 from "../../../image/img4.png";
import img5 from "../../../image/img5.png";
import img6 from "../../../image/img6.png";
import img7 from "../../../image/img7.png";
import img8 from "../../../image/img8.png";
import img9 from "../../../image/img9.png";
import img10 from "../../../image/img10.png";
import img11 from "../../../image/img11.png";
import img12 from "../../../image/img12.png";
import ProjectCard from "../prooject-card/ProjectCard";

function ProjectContainer() {
  const titleRef = useRef();
  const titleView = useInView(titleRef, { once: true });

  const textRef = useRef();
  const textView = useInView(textRef, { once: true });

  const gallery = useRef();
  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 1200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <div className="project__container">
      <h1
        style={{ height: "69px" }}
        ref={titleRef}
        className="project__container__sticky__title"
      >
        {titleView && <WordWrapper word="PROJECTS" />}
      </h1>
      <div
        style={{ height: "110px" }}
        ref={textRef}
        className="project__container__text"
      >
        {textView && (
          <SentenceWrapper sentence="During my career, I have carried out quite a few projects. These projects allowed me to deepen my knowledge and exchange with other professionals in the field of web development." />
        )}
      </div>
      <div ref={gallery} className="project__gallery">
        <ProjectCard y={y1} images={[img1, img2, img3, img4]} />
        <ProjectCard y={y2} images={[img5, img6, img7, img8]} />
        <ProjectCard y={y3} images={[img9, img10, img11, img12]} />
      </div>
    </div>
  );
}

export default ProjectContainer;
