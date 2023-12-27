import { motion } from "framer-motion";
import breakFast from "../assets/breakFast.png";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
const Carousel = () => {
  const carousell = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carousell.current.scrollWidth - carousell.current.offsetWidth);
  }, []);
  return (
    <motion.div
      ref={carousell}
      className='cursor-grab overflow-hidden'
      whileTap={{ cursor: "dragging" }}
    >
      <motion.div
        className='flex w-[10rem]'
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className=' flex overflow-hidden gap-6'
        >
          <Card
            image={breakFast}
            text='Break Fast'
            description='(12 break fast)'
          />
          <Card
            image={breakFast}
            text='Break Fast'
            description='(12 break fast)'
          />
          <Card
            image={breakFast}
            text='Break Fast'
            description='(12 break fast)'
          />
          <Card
            image={breakFast}
            text='Break Fast'
            description='(12 break fast)'
          />
          <Card
            image={breakFast}
            text='Break Fast'
            description='(12 break fast)'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Carousel;
