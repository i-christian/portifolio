import { Component } from "solid-js";

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact">
      <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
      <div class="container p-6 mx-auto text-center">
        <h3 class="text-primary uppercase">Contact</h3>
        <span class="block mt-2 text-sm text-secondary">honorifia@gmail.com</span>

        <p class="mt-5 text-center text-secondary">
          &copy; {currentYear} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
