import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import { IoIosStar } from "react-icons/io";

const TestimonialCards = () => {
  return (
    <div className='flex flex-wrap gap-20'>
      <div className='flex flex-wrap '>
        <div className='w-8 h-8 bg-red-600 rounded-full z-10 relative -mr-3 flex justify-center items-center'>
          <img src={img1} alt='' className='w-2/3' />
        </div>
        <div className='w-8 h-8 bg-blue-600 rounded-full z-10 -mr-3 flex justify-center items-center'>
          <img src={img2} alt='' className='w-2/3' />
        </div>
        <div className='w-8 h-8 bg-red-600 rounded-full z-10 relative -mr-3 flex justify-center items-center'>
          <img src={img3} alt='' className='w-2/3' />
        </div>
      </div>
      <div className='text-xs font-bold md:font-krona'>
        <h5>Customer Feedback</h5>
        <div className='flex gap-3 justify-center items-center '>
          <IoIosStar className='text-yellow-500' />
          <p>(18.6k Reviews)</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCards;
