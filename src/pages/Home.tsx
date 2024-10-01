import { Component } from "solid-js";
import Header from "../components/home/Header";
import Gigs from "../components/home/Gigs";
import TechnologyStack from "../components/home/TechnologyStack";
import Portfolio from "../components/home/Portifolio";
import Footer from "../components/home/Footer";



const Home: Component = () => {
  return (
    <main class="flex flex-col w-screen h-auto max-w-full">
      <Header />
      <section class="p-10 text-center">
        <h1 class="text-4xl mt-10 font-bold text-primary">Welcome to My Portfolio</h1>
        <p class="mt-4 text-lg text-secondary">I offer a variety of web development services tailored to your needs.</p>
      </section>
      <Gigs />
      <TechnologyStack />
      <Portfolio />
      <Footer />
    </main>
  );
};

export default Home;
