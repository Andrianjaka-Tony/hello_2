import { motion } from "framer-motion";
import "./SentenceWrapper.scss";

export const props = {
  sentence: "",
  style: {},
};

const staggerChildren = 0.03;

const sentenceVariants = {
  animate: {
    transition: {
      staggerChildren,
      // delayChildren: 0.5,
    },
  },
  exit: {
    transition: {
      staggerChildren,
    },
  },
};

const wordVariants = {
  initial: {
    y: "100%",
  },
  animate: {
    y: 0,
  },
  exit: {
    y: "100%",
  },
};

/**
 *
 * @param {props} param0
 * @returns {React.FC}
 */
function SentenceWrapper({ sentence }) {
  return (
    <motion.div
      variants={sentenceVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sentence__wrapper"
    >
      {sentence.split(" ").map((word, index) => (
        <motion.span key={index} className="sentece__wrapper__word">
          <motion.span
            variants={wordVariants}
            transition={{
              ease: "circOut",
              duration: 0.8,
            }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </motion.div>
  );
}

export default SentenceWrapper;
