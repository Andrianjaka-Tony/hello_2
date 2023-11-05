import WordWrapper from "../../wrapper/word-wrapper/WordWrapper";
import SkillsCard from "../skills-card/SkillCard";
import { motion, useInView } from "framer-motion";
import "./SkillsContainer.scss";
import { useRef } from "react";
import SentenceWrapper from "../../wrapper/sentence-wrapper/SentenceWrapper";

export const props = {
  items: [
    {
      icon: "",
      title: "",
      skills: 0,
    },
  ],
};

/**
 *
 * @param {props} param0
 * @returns {React.FC}
 */
function SkillsContainer({ items }) {
  const titleRef = useRef();
  const titleView = useInView(titleRef, { once: true });

  const textRef = useRef();
  const textView = useInView(textRef, { once: true });

  return (
    <section className="skills__container">
      <motion.h1 ref={titleRef} className="skills__container__title">
        {titleView && <WordWrapper word="Skills" />}
      </motion.h1>
      <div ref={textRef} className="skills__container__text">
        {textView && (
          <SentenceWrapper sentence="From my past experiences and lessons that I have carried out, I have been able to acquire and enrich my knowledge in terms of coding skills. I master the classic frontend composed by HTML5. CSS3 and Javascript; but I also master the web level 2 with ReactJS. For the backend, I choose Java coupled with two databases MySQL and PostgreSQL." />
        )}
      </div>
      {items.map((item, key) => (
        <SkillsCard key={key} {...item} />
      ))}
    </section>
  );
}

export default SkillsContainer;
