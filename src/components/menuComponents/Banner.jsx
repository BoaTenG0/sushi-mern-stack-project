import CustomLink from "../CustomLink";

const Banner = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto font-base lg:px-20  text-black dark:text-black '>
      <div className='py-20 flex flex-col md:py-28 justify-center items-center'>
        <div className=' space-y-5 text-center'>
          <h1 className='font-krona text-3xl leading-snug md:text-4xl md:leading-snug'>
            Dive into Delights Of Delectable
            <span className='text-green-500'> Food</span>
          </h1>
          <p className='text-lg leading-snug  md:text-xl md:leading-tight text-[#4A4A4A] font-base'>
            Come with family & feel the joy of mouthwatering food such as
            Makizushi, Gunkan Maki, Narezushi, Nigiri, Oshizushi, Sasazushi and
            more for a moderate cost.
          </p>
          <div className='space-x-20 '>
            <CustomLink path='/offer' text='Order Now' odd />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
