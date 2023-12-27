import Card from "../../widgets/Card";
import catImage from "../../assets/mainDish.png";
import breakFast from "../../assets/breakFast.png";
import combo from "../../assets/combo.png";
import browseAll from "../../assets/browseAll.png";
const Categories = () => {
  return (
    <div className='container mx-auto space-y-7 mt-10 mb-36'>
      <h3 className='text-red-500 text-sm md:text-lg font-krona'>
        Customer favorites
      </h3>
      <p className='md:text-3xl text-xl font-krona'>Popular Categories</p>
      <div className='flex flex-col sm:flex-row flex-wrap justify-center gap-7 md:gap-16 items-center'>
        <Card image={catImage} text='Main Dish' description='(86 Dishes)' />
        <Card
          image={breakFast}
          text='Break Fast'
          description='(12 break fast)'
        />
        <Card image={combo} text='Sushi Combo' description='(Combo of 6)' />
        <Card image={browseAll} text='Browse All' description='(255 Items)' />
      </div>
    </div>
  );
};
export default Categories;
