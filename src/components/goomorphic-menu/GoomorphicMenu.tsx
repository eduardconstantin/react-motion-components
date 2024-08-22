import { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Props, Section } from "./GoomorphicMenu.d";
import styles from "./GoomorphicMenu.module.css";
import * as anim from "./GoomorphicMenu.anim";

const GoomorphicMenu: FC<Props> = ({ section, sections }) => {
  return (
    <AnimatePresence mode="wait">
      <div className={styles.header}>
        <motion.div
          className={styles.mainBar}
          initial="home"
          animate={section.toLowerCase()}
          variants={anim.mainBar}
          transition={{ type: "spring", duration: 1 }}
        >
          <motion.div className={styles.dots} variants={anim.leftDot} transition={{ type: "spring", duration: 1 }}>
            <p>Ed</p>
            <motion.span variants={anim.span} transition={{ type: "linear", duration: 0.05 }}>
              Edd & Eddie
            </motion.span>
          </motion.div>
          <motion.ul
            initial={{ opacity: 1 }}
            animate={section === "Contact" ? { opacity: 0 } : { opacity: 1, gap: 20, transition: { delay: 0.3 } }}
          >
            {sections.slice(1, -1).map((sec: Section) => (
              <motion.li
                initial={{ opacity: 0.5 }}
                animate={sec.id === section ? { opacity: 1 } : { opacity: 0.5 }}
                key={sec.key}
              >
                {sec.id} {sec.id === section && <motion.span layoutId="indicator"></motion.span>}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className={styles.dots} variants={anim.rightDot} transition={{ type: "spring", duration: 1 }}>
            <img src="https://avatars.githubusercontent.com/u/9199763?v=4" alt="Profile pic" />
            <motion.span variants={anim.span} transition={{ type: "linear", duration: 0.05 }}>
              {section === "Contact" ? " Let's chat" : "Book a call"}
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
export default GoomorphicMenu;
