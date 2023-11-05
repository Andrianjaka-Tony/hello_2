import { useInView, motion } from "framer-motion";
import Counter from "../../counter/Counter";
import "./SkillsCard.scss";
import { useRef } from "react";
import WordWrapper from "../../wrapper/word-wrapper/WordWrapper";

export const props = {
  icon: "",
  title: "",
  skills: 0,
};

/**
 *
 * @param {props} param0
 * @returns {React.FC}
 */
function SkillsCard({ icon, title, skills }) {
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  const scaleValue = skills / 100;

  return (
    <motion.div ref={ref} style={{ height: "112px" }}>
      {inView ? (
        <motion.div className="skills__card">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="skills__card__icon"
          >
            {icon}
          </motion.div>
          <h2 className="skills__card__title">
            <WordWrapper word={title} />
          </h2>
          <h2 className="skills__card__value">
            <Counter from={0} to={skills} />%
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scaleValue }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
            className="border"
          ></motion.div>
        </motion.div>
      ) : (
        <></>
      )}
    </motion.div>
  );
}

export default SkillsCard;
