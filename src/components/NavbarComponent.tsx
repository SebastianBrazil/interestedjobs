import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar className='bg-yellow-200'>
      <NavbarBrand>
        <span className="font-serif self-center whitespace-nowrap text-xl font-semibold dark:text-white">Interesting Jobs</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink className='text-black font-serif' as={Link} to='/'>Home</NavbarLink>
        <NavbarLink className='text-black font-serif' as={Link} to='/carnegie'>Carnegie</NavbarLink>
        <NavbarLink className='text-black font-serif' as={Link} to='/ofv'>OFV</NavbarLink>
        <NavbarLink className='text-black font-serif' as={Link} to='/evvent'>Evvent</NavbarLink>
        <NavbarLink className='text-black font-serif' as={Link} to='/goit'>GroupOne IT</NavbarLink>
        <NavbarLink className='text-black font-serif' as={Link} to='/paccoast'>Pacific Coast Companies</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;