import { useEffect, useState } from "react";

const Section = () => {
  // state to hold fetch data
  const [menu, setMenu] = useState([]);
  // state to hold filtered items
  const [filteredItems, setFilteredItems] = useState([]);
  //state to hold selected category
  const [selectedCategory, setSelectedCategory] = useState("All");
  //state to hold sort Option
  const [sortOption, setsortOption] = useState("Default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  //filtering data based on category
  const filteredItem = (category) => {
    const filtered =
      category === "All"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  //function to show all
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("All");
  };

  //sorting based on A-Z, Z-A, Low-High pricing
  const handleSorting = (option) => {
    setsortOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Low-High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High-Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className='container mx-auto max-w-screen-2xl xl:px-24 px-4'>
      menuSection
    </div>
  );
};
export default Section;
