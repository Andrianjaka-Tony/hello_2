import { useInView } from "framer-motion";
import { useRef } from "react";
import WordWrapper from "../wrapper/word-wrapper/WordWrapper";
import "./Footer.scss";
import SentenceWrapper from "../wrapper/sentence-wrapper/SentenceWrapper";
import FooterSection from "./footer-section/FotterSection";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { motion } from "framer-motion";

const footerIconVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.2,
    },
  },
};

const iconVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function Footer() {
  const titleRef = useRef();
  const titleView = useInView(titleRef, { once: true });

  const textRef = useRef();
  const textView = useInView(textRef, { once: true });

  const iconRef = useRef();
  const iconInView = useInView(iconRef, { once: true });

  return (
    <section className="footer">
      <h1 style={{ height: "69px" }} ref={titleRef} className="footer__title">
        {titleView && <WordWrapper word="CONTACT" />}
      </h1>
      <div
        style={{ minHeight: "110px", maxHeight: "fit-content" }}
        ref={textRef}
        className="footer__text"
      >
        {textView && (
          <SentenceWrapper sentence="To contact me, you can send me messages using the tools below. My rates are around 300 euros per day. As a note, i do not travel, except for the completion of the contract." />
        )}
      </div>
      <footer>
        <div className="footer__section__container">
          <FooterSection
            title="Tools"
            items={[
              "Microsoft Visual Studio Code",
              "Adobe XD",
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Postman",
              "Google Chrome",
            ]}
          />
          <FooterSection
            title="Frontend"
            items={["HTML5", "CSS3", "SCSS", "Javascript", "React"]}
          />
          <FooterSection title="Backend" items={["Java", "PHP", "C#"]} />
          <FooterSection
            title="Databases"
            items={["MySQL", "PostgreSQL", "MariaDB", "MongoDB"]}
          />
          <motion.div
            variants={footerIconVariants}
            initial="initial"
            animate={iconInView ? "animate" : ""}
            ref={iconRef}
            className="footer__icon__container"
          >
            <motion.div variants={iconVariants}>
              <AiOutlineGithub />
            </motion.div>
            <motion.div variants={iconVariants}>
              <AiOutlineLinkedin />
            </motion.div>
            <motion.div variants={iconVariants}>
              <AiOutlineFacebook />
            </motion.div>
            <motion.div variants={iconVariants}>
              <AiOutlineInstagram />
            </motion.div>
            <motion.div variants={iconVariants}>
              <AiOutlineWhatsApp />
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
