import { motion } from "framer-motion";

export default function RevealSection({
  children,
  staggerChildren = 0.4,
  hidden = { opacity: 0, y: 70 },
  transition = { duration: 0.9, ease: "easeOut" },
  viewport = { amount: 0 },
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren, // valeur configurable
      },
    },
  };

  const childVariants = {
    hidden, // valeur configurable
    visible: {
      opacity: 1,
      y: 0,
      transition, // valeur configurable
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport} // valeur configurable
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>}
    </motion.div>
  );
}
