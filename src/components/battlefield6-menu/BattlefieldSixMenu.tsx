import { useState, useEffect } from "react";
import styles from "./BattlefieldSixMenu.module.css";

type MenuItem = {
  label: string;
  href: string;
};

interface BattlefieldSixMenuProps {
  menuItems: MenuItem[];
}

const BattlefieldSixMenu = ({ menuItems }: BattlefieldSixMenuProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "q") {
        setActiveIndex((prev) => (prev === 0 ? menuItems.length - 1 : prev - 1));
      } else if (key === "e") {
        setActiveIndex((prev) => (prev === menuItems.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuItems]);

  return (
    <div className={styles.container}>
      <div className={styles.leftIcon}>{/* svg unchanged */}</div>

      <nav className={styles.nav}>
        <div className={styles.keyHint}>
          <p>Q</p>
        </div>

        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
              className={styles.menuButton}
            >
              <span className={`${styles.menuLabel} ${isActive ? styles.menuLabelActive : ""}`}>{item.label}</span>

              <span className={`${styles.underline} ${isActive ? styles.underlineActive : ""}`} />

              {isActive && (
                <>
                  <span className={styles.triangle} />
                  <span className={styles.glow} />
                </>
              )}
            </a>
          );
        })}

        <div className={styles.keyHint}>
          <p>E</p>
        </div>
      </nav>

      <div className={styles.rightBox}></div>
    </div>
  );
};

export default BattlefieldSixMenu;
