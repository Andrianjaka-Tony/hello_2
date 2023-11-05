import { motion } from "framer-motion";
import "./ProjectCard.scss";

export const props = {
  images: ["", "", "", ""],
  y: 0,
};

/**
 *
 * @param {props} param0
 * @returns {React.FC}
 */
function ProjectCard({ images, y = 0 }) {
  return (
    <div className="project__card">
      <motion.div style={{ y }} className="project__card__images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={image} />
        ))}
        {images.map((image, index) => (
          <img key={index * 100} src={image} alt={image} />
        ))}
      </motion.div>
    </div>
  );
}

export default ProjectCard;
