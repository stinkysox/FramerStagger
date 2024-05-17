import "./App.css";
import { blogList } from "./blog-list.js";
import { motion } from "framer-motion";

const Card = ({ image, h2, p, id }) => {
  const imageAnimate = {
    offScreen: { x: -100, opacity: 0 },
    onScreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 10, 0],
      transition: { type: "spring", bounce: 0.2, duration: 1 },
    },
  };

  const textAnimate = {
    offScreen: { y: 100, opacity: 0 },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.2, duration: 2 },
    },
  };

  return (
    <motion.div
      className="card"
      id={id}
      initial={"offScreen"}
      whileInView={"onScreen"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.5 }}
    >
      <motion.div className="image-container" variants={imageAnimate}>
        {image}
      </motion.div>
      <motion.h2 variants={textAnimate}>{h2}</motion.h2>
      <motion.p variants={textAnimate}>{p}</motion.p>
    </motion.div>
  );
};

const App = () =>
  blogList.map((item, index) => (
    <div className="card-wrapper" key={index}>
      <Card image={item.image} h2={item.h2} p={item.p} />
    </div>
  ));

export default App;

//to apply the staggerEffect we have to remove the initial,
//animate on individual child elements. And apply them to the parent
