// React Hooks
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

// Components

// Styles

export default function Navigation() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover={"visible"}
      onFocusCapture={() => {
        setIsHidden(false);
      }}
      variants={{
        hidden: { y: "-100%" },
        visible: { y: "0%" },
      }}
      transition={{ duration: 0.4 }}
      className="nav_container"
    >
      <nav className="nav_wrapper">
        <ul className="nav_lists">
          <li className="nav_link">
            <a href="">Home</a>
          </li>
          <li className="nav_link">
            <a href="">About</a>
          </li>
          <li className="nav_link">
            <a href="">Resources</a>
          </li>
          <li className="nav_link">
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
