import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component: React.ComponentType, idName: string) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="py-24 bg-gradient-to-b from-black via-slate-950 to-black relative overflow-hidden"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;