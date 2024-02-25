import React, { useState, useEffect } from 'react';
import logo from '/images/homelogo1.png'
import logo1 from '/images/logo.png'
import { NavLink ,Link, useNavigate} from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { useSelect } from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/userSlicer';


function Navbar() {
  const user = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMedium, setIsMedium] = useState(window.innerWidth <= 1024);
  const [activeNavLink, setActiveNavLink] = useState(null);

  const navigate = useNavigate();
  let i =0;



   const handleLogout = ()=>{
    console.log(user);
    console.log("after logout");
    dispatch(removeUser());
    navigate('/login');
   }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsMedium(window.innerWidth <= 1024);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
   
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (path) => {
    setActiveNavLink(path);
  };


  let navItems=[];
  
  console.log("mode is", localStorage.getItem("mode"));
  if(localStorage.getItem("mode")==='ngo'){
    navItems = [
      { path: '/ngo', title: 'Home' },
      { path: '/ngo-events', title: 'Events' },
      {path:'/event-registration',title:'Post Event'},
      {path:'/update-ngo-detail',title:'Update Detail'},
      { path: '/aboutus', title: 'About us' },
      
    ];
  }
  else if(localStorage.getItem("mode")==='donator'){
    navItems = [
      { path: '/', title: 'Home' },
      { path: '/events', title: 'Events' },
      { path: '/ngo-donator', title: 'NGOs' },
      { path: '/aboutus', title: 'About us' },
      {path:'/donator-profile',title:'Profile'}
    ];
  }
  if(!navItems){
    return <></>
  }
  return (
    <div className='relative '>
      {/* Background Image */}
      <img src={logo} alt="" className='w-full h-full' />

      {/* Navbar */}
      <header className={`sm:mt-2 sm:h-20 h-16 absolute top-0 left-0 right-0 shadow-lg flex items-center z-10  ${isMenuOpen ? 'mb-40' : ''}`}>
        <nav className={`flex items-center ${isMedium ? 'justify-start' : 'justify-between'}  sm:w-[95%] w-[100%] mx-auto`}>
          <div>
            <a href='/' className='flex justify-start'>
              <img src={logo1} alt='logo' className='sm:h-24 h-16 sm:w-60 w-28' />
            </a>
          </div>

          {/* navitems */}
          <div className='flex items-center justify-end space-x-5'>
            <ul className={`sm:flex items-center space-x-10 ${isMedium ? 'hidden' : ''} ml-auto`}>
           
              {navItems.map(({ path, title},index) => (
                
                <li key={path}  className={`text-base font-semibold hover:text-primary hover:text-blue-500 ${index}`}>
                  <NavLink 
                   to={path}
                   activeClassName='active'  
                   onClick={() => handleNavLinkClick(path)} 
                   style={{ borderBottom: activeNavLink === path ? '4px solid #007BFF' : 'none' , paddingBottom: '4px'}} >
                      {title}
                     
                  </NavLink>
                </li>
              ))}
            
               <button onClick={handleLogout}  className={`font-semibold px-5 py-1 border border-primary hover:bg-blue-500 hover:text-white transition-all duration-300 ease-in rounded ${
                  isMedium ? 'hidden' : ''
                }`}>Logout</button>
            </ul>

            {/* Mobile menu */}
            <div className='md:hidden ml-auto'>
              <button className='' onClick={handleMenuToggler} style={{marginLeft:"190px"}}>
                {isMenuOpen ? (
                  <FaXmark className='w-7 h-7 text-primary' />
                ) : (
                  <FaBarsStaggered className='w-7 h-6 text-primary' />
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* navitems for mobile */}
      <div
        className={`px-4 sm:flex sm:flex-col bg-white py-5 rounded-sm lg:hidden fixed  top-16 right-0 w-full ${
          isMenuOpen ? 'z-50' : 'hidden'
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path}  className='text-base font-semibold hover:text-primary hover:text-blue-500 py-1'>
              <NavLink to={path} className={({ isActive }) => (isActive ? 'active' : '')}>
                {title}
              </NavLink>
            </li>
          ))}
          <li>
             <div>
                <label 
                   htmlFor='logout' 
                   className='text-base font-semibold hover:text-primary hover:text-blue-500 py-1'
                   onClick={handleLogout}
                >
                  Logout
                </label>
             </div>
          </li>
        
        </ul>
      
      </div>
    </div>

  );
}

export default Navbar;
