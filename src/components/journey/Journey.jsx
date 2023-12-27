import JourneyCard from "../../widgets/JourneyCard";
import CustomLink from "../CustomLink";
import catering from "../../assets/catering.png";
import delivery from "../../assets/delivery.png";
import cart from "../../assets/cart.png";
import gift from "../../assets/gift.png";

const Journey = () => {
  return (
    <div className='container mx-auto flex flex-wrap justify-evenly  text-start mb-20 md:mb-52'>
      <div className='md:w-1/3 space-y-10'>
        <h3 className='text-red-500 font-krona text-sm'>
          OUR STORY & SERVICES
        </h3>
        <h4 className='font-krona text-2xl'>
          Our Culinary Journey <br /> And Services
        </h4>
        <p className='text-sm'>
          Rooted in passion, we curate unforgettable dining experiences and
          offer exceptional services, blending culinary artistry with warm
          hospitality.
        </p>
        <CustomLink path='/offer' text='Order Now' odd />
      </div>
      <div>
        <div className='flex flex-wrap'>
          <JourneyCard
            icon={catering}
            name='Catering'
            text='Delight your guests with our flavors and  presentation'
          />
          <JourneyCard
            icon={delivery}
            name='FAST DELIVERY'
            text='We deliver your order promptly to your door'
          />
        </div>
        <div className='flex flex-wrap'>
          <JourneyCard
            icon={cart}
            name='ONLINE ORDERING'
            text='Explore menu & order with ease using our Online Ordering '
          />
          <JourneyCard
            icon={gift}
            name='Gift Cards'
            text='Give the gift of exceptional dining with Foodi Gift Cards'
          />
        </div>
      </div>
    </div>
  );
};
export default Journey;
