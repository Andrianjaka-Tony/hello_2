import { motion } from "framer-motion";
import "./WordWrapper.scss";

export const props = {
  word: "",
  className: "",
};

const staggerChildren = 0.06;

const wordVariants = {
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

const characterVariants = {
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
function WordWrapper({ className, word }) {
  return (
    <motion.div
      variants={wordVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`${className} word__wrapper`}
    >
      {Array.from(word).map((character, index) => (
        <motion.span
          variants={characterVariants}
          transition={{
            ease: "circOut",
            duration: 0.3,
          }}
          className="word__wrapper__character"
          key={index}
        >
          {character}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default WordWrapper;
