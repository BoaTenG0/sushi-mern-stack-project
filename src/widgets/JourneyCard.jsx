const JourneyCard = ({ icon, name, text }) => {
  return (
    <div className='w-36 py-4 m-4 flex flex-col space-y-2 shadow-xl items-center bg-gray-100 dark:bg-white text-green-500 rounded-2xl hover:scale-110 hover:shadow-2xl hover:rounded-2xl transition delay-75 duration-300 ease-in-out'>
      <img src={icon} alt={text} className='w-2/6' />

      <h5 className='text-xs font-krona lowercase'>{name}</h5>
      <p className='text-xs text-center text-green-700 px-4'>{text}</p>
    </div>
  );
};
export default JourneyCard;
