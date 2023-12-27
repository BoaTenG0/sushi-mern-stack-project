import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SpecialCard = ({ item }) => {
  const [isFilled, setIsFilled] = useState(false);
  const { _id, name, recipe, image, category, price } = item;
  const handleClick = () => {
    setIsFilled(!isFilled);
  };
  return (
    <div className='card card-compact w-64 md:w-80 bg-base-100  relative'>
      <div
        className={`rating gap-1 absolute top-2 right-2 p-4 heartStar border bg-customGreen ${
          isFilled ? "text-rose-500" : "text-white"
        }`}
        onClick={() => setIsFilled(!isFilled)}
      >
        {" "}
        <FaHeart />{" "}
      </div>
      <Link to={`/menu/${_id}`}>
        <figure>
          <img
            src={image}
            alt='Shoes'
            className='hover:scale-105 transition-all delay-75 duration-300 ease-in-out md:w-[200px] md:h-[200px]'
          />
        </figure>
      </Link>
      <div className='card-body'>
        <h2 className='card-title'>{name}</h2>
        <p>{recipe}</p>
        <div className='card-actions justify-between items-center space-y-6'>
          <h5 className='font-semibold font-krona text-lg'>
            <span className='text-xs text-customRed'>$</span>
            {price}
          </h5>
          <button className='btn bg-customGreen text-white'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default SpecialCard;
