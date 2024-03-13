import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Interesting Jobs</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to='/'>Home</NavbarLink>
        <NavbarLink as={Link} to='/pageTwo'> First Page</NavbarLink>
        <NavbarLink as={Link} to='/pageTwo'> Second Page</NavbarLink>
        <NavbarLink as={Link} to='/pageThree'>Third Page</NavbarLink>
        <NavbarLink as={Link} to='/pageFour'>Fourth Page</NavbarLink>
        <NavbarLink as={Link} to='/pageFive'>Fifth Page</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;