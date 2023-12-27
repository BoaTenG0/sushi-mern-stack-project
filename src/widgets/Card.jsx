const Card = ({ image, text, description }) => {
  return (
    <div className='w-36 py-3 flex flex-col space-y-1 shadow-xl items-center bg-gray-100 dark:bg-white text-black rounded-2xl hover:scale-110 hover:shadow-2xl hover:rounded-2xl transition delay-75 duration-300 ease-in-out'>
      <div className='w-20 h-20 rounded-full bg-green-300 flex justify-center items-center'>
        <img src={image} alt={text} className='w-2/3' />
      </div>
      <h5 className='text-xs font-krona'>{text}</h5>
      <p className='text-xs'>{description}</p>
    </div>
  );
};
export default Card;
