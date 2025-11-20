import { useState, useEffect, FC } from "react";
import { motion, animate } from "framer-motion";
import BattlefieldSixMenu from "../BattlefieldSixMenu";
import styles from "../BattlefieldSixMenu.module.css";
import { ContentWrapperProps } from "../BattlefieldSixMenu.d";

const ContentWrapper: FC<ContentWrapperProps> = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualScrolling, setIsManualScrolling] = useState(false);

  const scrollToSection = (id: number) => {
    const label = menuItems[id].label;
    const section = document.getElementById(label);
    if (!section) return;

    setIsManualScrolling(true);

    animate(window.scrollY, section.offsetTop, {
      duration: 0.2,
      onUpdate: (latest) => window.scrollTo(0, latest),
      ease: "easeIn",
    }).then(() => {
      setIsManualScrolling(false);
      setActiveIndex(id);
    });
  };

  const handleViewportEnter = (index: number) => {
    if (!isManualScrolling) setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "q") {
        const next = activeIndex > 0 ? activeIndex - 1 : menuItems.length - 1;
        scrollToSection(next);
      } else if (key === "e") {
        const next = activeIndex < menuItems.length - 1 ? activeIndex + 1 : 0;
        scrollToSection(next);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex]);

  return (
    <div>
      <BattlefieldSixMenu menuItems={menuItems} activeIndex={activeIndex} setActiveIndex={scrollToSection} />
      {menuItems.map((item, index) => (
        <motion.div
          key={item.label}
          viewport={{ amount: 0.9 }}
          onViewportEnter={(e) => handleViewportEnter(index)}
          id={item.label}
          className={styles.section}
        >
          <h1>{item.label}</h1>
        </motion.div>
      ))}
    </div>
  );
};

export default ContentWrapper;
