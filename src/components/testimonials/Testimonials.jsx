import chefImage from "../../assets/chef.png";
import testi from "../../assets/testimonials.png";
import TestimonialCards from "../../widgets/TestimonialCards";
const Testimonials = () => {
  return (
    <div className='container mx-auto flex flex-col md:flex-row md:justify-center md:items-center gap-30 mb-20'>
      <img
        src={chefImage}
        alt='Chef'
        className='w-10/12 md:w-1/3 mx-auto hover:scale-110 transition delay-75 duration-300 ease-in-out'
      />
      <div className='md:w-1/2 md:text-start text-left space-y-7'>
        <h3 className='text-sm text-red-500 uppercase font-krona'>
          testimonials
        </h3>
        <h2 className='font-krona text-lg md:text-3xl'>
          What Our Customers Say About Us
        </h2>
        <p>
          &quot;I had the pleasure of dining at Foodi last night, and I'm still
          raving about the experience! The attention to detail in presentation
          and service was impeccable&quot;
        </p>
        <TestimonialCards />
        {/* <img src={testi} alt='' className='w-1/3' /> */}
      </div>
    </div>
  );
};
export default Testimonials;
