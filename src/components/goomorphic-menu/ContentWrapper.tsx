import { useState, FC } from "react";
import { motion } from "framer-motion";
import GoomorphicMenu from "./GoomorphicMenu";
import styles from "./GoomorphicMenu.module.css";
import { ContentWrapperProps } from "./GoomorphicMenu.d";

const ContentWrapper: FC<ContentWrapperProps> = ({ sections }) => {
  const [section, setSection] = useState<string>(sections[0].id);

  return (
    <div>
      <GoomorphicMenu section={section} sections={sections} />
      {sections.map((sec) => (
        <motion.div
          key={sec.key}
          viewport={{ once: true, amount: 0.9 }}
          onViewportEnter={(e) => setSection(e?.target.id!)}
          id={sec.id}
          className={styles.section}
        >
          <h1>{sec.id}</h1>
        </motion.div>
      ))}
    </div>
  );
};

export default ContentWrapper;
