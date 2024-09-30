import { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="fixed top-0 left-0 w-full shadow-md z-50 bg-inherit backdrop-filter backdrop-blur-3xl backdrop-brightness-100 backdrop-contrast-100 flex items-center justify-center max-w-full p-5">
      <nav>
        <ul class="flex space-x-8">
          <li><a href="#gigs" class="text-primary hover:underline">Gigs</a></li>
          <li><a href="#portfolio" class="text-primary hover:underline">Portfolio</a></li>
          <li><a href="#contact" class="text-primary hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
