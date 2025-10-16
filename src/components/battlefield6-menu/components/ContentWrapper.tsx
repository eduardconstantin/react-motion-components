import { useState, useEffect, FC } from "react";
import { motion, animate } from "framer-motion";
import BattlefieldSixMenu from "../BattlefieldSixMenu";
import styles from "../BattlefieldSixMenu.module.css";
// import { ContentWrapperProps, Section } from "../GoomorphicMenu.d";

type MenuItem = {
  label: string;
  href: string;
};

interface ContentWrapperProps {
  menuItems: MenuItem[];
}

const ContentWrapper: FC<ContentWrapperProps> = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      animate(window.scrollY, section.offsetTop, {
        duration: 0.4,
        onUpdate: (latest) => window.scrollTo(0, latest),
        ease: "easeInOut",
      });
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "q") {
        setActiveIndex((prev) => {
          const next = prev === 0 ? menuItems.length - 1 : prev - 1;
          scrollToSection(menuItems[next].label);
          return next;
        });
      } else if (key === "e") {
        setActiveIndex((prev) => {
          const next = prev === menuItems.length - 1 ? 0 : prev + 1;
          scrollToSection(menuItems[next].label);
          return next;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuItems]);

  return (
    <div>
      <BattlefieldSixMenu
        menuItems={menuItems}
        activeIndex={activeIndex}
        setActiveIndex={(index) => {
          setActiveIndex(index);
          scrollToSection(menuItems[index].label);
        }}
      />
      {menuItems.map((item, index) => (
        <motion.div
          key={item.label}
          viewport={{ once: true, amount: 0.9 }}
          onViewportEnter={(e) => setActiveIndex(index)}
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
