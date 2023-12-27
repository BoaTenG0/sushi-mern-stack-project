import { FaCircleChevronRight } from "react-icons/fa6";
import SpecialCard from "../../widgets/SpecialCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";

const SpecialDishes = () => {
  const [dishes, setDishes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popular = data.filter((item) => item.category === "popular");
        setDishes(popular);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container mx-auto max-w-screen-2xl lg:px-20 text-start space-y-10 mb-20 md:mb-52'>
      <div className='text-left space-y-3'>
        <h3 className='text-customRed font-base text-xl md:font-bold'>
          Special Dishes
        </h3>
        <h4 className='font-krona text-2xl md:text-3xl md:w-[320px]'>
          Best Dishes From Our Menu{" "}
        </h4>
      </div>
      <Slider {...settings}>
        {dishes.map((item, i) => (
          <SpecialCard key={i} item={item} />
        ))}
      </Slider>

      {/* <div className='flex justify-between'>
        <FaCircleChevronRight />
      </div> */}
      {/* <div className='flex justify-center items-center'>
        <SpecialCard
          image={sushi1}
          name='Best Sushi Salad'
          text='Description of the Item'
          price='10.00'
        />
        <SpecialCard
          image={sushi2}
          name='Best Sushi Salad'
          text='Description of the Item'
          price='10.00'
        />
        <SpecialCard
          image={sushi3}
          name='Best Sushi Salad'
          text='Description of the Item'
          price='10.00'
        />
      </div> */}
    </div>
  );
};
export default SpecialDishes;
