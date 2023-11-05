import { motion, useInView } from "framer-motion";
import "./FooterSection.scss";
import { useRef } from "react";

export const props = {
  title: "",
  items: ["", "", ""],
};

const sectionVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const childrenVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

/**
 *
 * @param {props} param0
 * @return {React.FC}
 */
function FooterSection({ title, items }) {
  const sectionRef = useRef();
  const view = useInView(sectionRef, { once: true });

  return (
    <motion.div
      variants={sectionVariants}
      initial="initial"
      animate={view ? "animate" : "initial"}
      ref={sectionRef}
      className="footer__section"
    >
      <motion.h2 variants={childrenVariants} className="footer__section__title">
        {title}
      </motion.h2>
      <motion.div className="footer__section__item__container">
        {items.map((item, index) => (
          <motion.div
            variants={childrenVariants}
            className="footer__section__item"
            key={index}
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default FooterSection;
