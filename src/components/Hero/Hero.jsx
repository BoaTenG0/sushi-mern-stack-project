import sushiImage from "../../assets/MAIN SUSHI IMAGE.png";
import IIitems from "../../assets/2 Items Below Sushi.png";
import CustomLink from "../../components/CustomLink";
const Hero = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto font-base lg:px-20  text-black dark:text-black '>
      <div className='py-5 flex flex-col-reverse md:flex-row md:py-20 justify-between items-center'>
        <div className='md:w-1/2 space-y-5 text-start'>
          <h1 className='font-base text-4xl font-bold leading-snug md:text-5xl md:leading-snug'>
            Sushi Bliss, Every Roll a Flavorful
            <span className='text-green-500'> Kiss</span>
          </h1>
          <p className='text-lg leading-snug  md:text-xl md:leading-tight text-[#4A4A4A]'>
            Masters of Maki: Elevate Your Taste Buds with Our Sushi Creations,
            Where Tradition Meets Innovation!
          </p>
          <div className='space-x-20 '>
            <CustomLink path='/offer' text='Order Now' odd />
          </div>
        </div>
        <div className='md:w-1/2 flex-col justify-center items-start mb-7'>
          <img src={sushiImage} alt='sushi Image' className='-ml-7' />
          <img src={IIitems} alt='sushi Image' className=' -mt-20 md:-mt-36' />
        </div>
      </div>
    </div>
  );
};
export default Hero;

// for text - "py-14 space-y-10 text-start" img "flex flex-col items-end"
