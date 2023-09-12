import { motion } from "framer-motion";
import { sparkleAnim } from "../Button.anim";
import S from "../Button.module.css";

const Sparkles = ({ sparkles, hover }: { sparkles: number[]; hover: boolean }) => {
  const GenerateSparkles = () => {
    return sparkles.map((_, i) => (
      <motion.svg
        variants={sparkleAnim}
        key={i}
        custom={i}
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          animate={{ rotate: 360 }}
          d="M6.657 1.247C6.767 0.917 7.233 0.917 7.343 1.247L7.988 3.184C8.12997 3.6098 8.36917 3.99668 8.68664 4.31398C9.00411 4.63127 9.39112 4.87026 9.817 5.012L11.753 5.657C12.083 5.767 12.083 6.233 11.753 6.343L9.816 6.988C9.3902 7.12997 9.00332 7.36917 8.68602 7.68664C8.36873 8.00411 8.12974 8.39112 7.988 8.817L7.343 10.753C7.31929 10.8253 7.27335 10.8882 7.21176 10.9328C7.15016 10.9774 7.07605 11.0014 7 11.0014C6.92395 11.0014 6.84984 10.9774 6.78824 10.9328C6.72665 10.8882 6.68072 10.8253 6.657 10.753L6.012 8.816C5.87013 8.39031 5.63108 8.00349 5.31379 7.68621C4.99651 7.36892 4.60969 7.12987 4.184 6.988L2.247 6.343C2.17474 6.31928 2.11181 6.27335 2.0672 6.21176C2.02259 6.15016 1.99857 6.07605 1.99857 6C1.99857 5.92395 2.02259 5.84983 2.0672 5.78824C2.11181 5.72665 2.17474 5.68072 2.247 5.657L4.184 5.012C4.60969 4.87013 4.99651 4.63108 5.31379 4.31379C5.63108 3.99651 5.87013 3.60969 6.012 3.184L6.657 1.247Z"
        />
      </motion.svg>
    ));
  };

  return (
    <motion.div initial="init" animate={hover ? "anim" : "init"} className={S.sparkleContainer}>
      {GenerateSparkles()}
    </motion.div>
  );
};

export default Sparkles;
