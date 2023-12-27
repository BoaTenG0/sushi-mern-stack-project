import { Link } from "react-router-dom";
import links from "../../footerData/data.json";
import logo from "../../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className='container mx-auto flex flex-col md:flex-row justify-evenly items-center px-8 py-3 space-y-5'>
      <div className='space-y-5 md:w-1/4 md:text-start '>
        <Link to='/' className=''>
          <img src={logo} alt='sushi logo' className='w-1/2 -ml-10' />
        </Link>
        <p className='hidden md:flex'>
          Savor the artistry where every dish is a culinary masterpiece
        </p>
      </div>
      <div className='flex justify-between'>
        {links.map((item) => (
          <div
            className='flex justify-between flex-col flex-wrap mr-3 md:mr-10'
            key={item.name}
          >
            <h6 className='font-krona '>{item.name}</h6>
            {item.links.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className='text-xs text-center py-1 md:py-2'
              >
                {link.name}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
