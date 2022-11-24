import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { Squash as Hamburger } from 'hamburger-react';
import { BsSpotify } from 'react-icons/bs';
import { links } from '../assets/constants';
import styled from 'styled-components';

const Nav = styled(NavLink)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(156 163 175);
  :hover {
    color: #1ed760;
  }
`;

const NavLinks = ({}) => (
  <div className='mt-5'>
    {links.map((item) => (
      <Nav end key={item.name} to={item.to}>
        <item.icon className='mr-2 h-6 w-6' title={item.name} />
        {item.icon}
      </Nav>
    ))}
  </div>
);

const NavLinksMobile = ({}) => (
  <div className='mt-28'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='my-8 ml-5 flex flex-row items-center justify-start text-sm font-medium text-gray-400 hover:text-[#1ED760]'
      >
        <item.icon className='mr-2 h-6 w-6' />
        {item.icon} {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobilemenuOpen, setMobilemenuOpen] = useState(false);

  return (
    <>
      <div className='w-240px hidden flex-col bg-[#1D1E24] py-10 px-4 md:flex'>
        <BsSpotify
          color='#1ED760'
          className='mb-14 
         '
          fontSize={30}
        />
        <hr className='border-y-[#818181]' />
        <NavLinks />
      </div>
      <div className='absolute top-[90px] left-3 z-[11] block text-white md:hidden'>
        <Hamburger toggle={setMobilemenuOpen} toggled={mobilemenuOpen} />
      </div>
      <div
        className={`p6 smooth-transition absolute top-0 z-10 h-screen w-2/3 bg-black backdrop-blur-lg md:hidden ${
          mobilemenuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <NavLinksMobile handleClick={() => setMobilemenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
