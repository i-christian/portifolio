import { Component, For } from "solid-js";

const Gigs: Component = () => {
  const services = [
    {
      title: "Static Website Development",
      price: "$30",
      description: "Perfect for small businesses or personal projects. This service includes:\n- Fully responsive design\n- SEO-friendly structure\n- Basic contact form"
    },
    {
      title: "Full Stack Application Development",
      price: "$250",
      description: "Get a complete web application tailored to your needs. This service includes:\n- Custom back-end development\n- User authentication\n- Database integration"
    },
    {
      title: "Custom Website Design",
      price: "$500",
      description: "Stand out with a unique website. This service includes:\n- Personalized design consultation\n- Unlimited revisions\n- Mobile and desktop compatibility"
    },
    {
      title: "Deployment Services",
      price: "$200",
      description: "Launch your site seamlessly. Includes:\n- Configuration of hosting\n- SSL setup for security\n- Post-launch support"
    },
    {
      title: "Web Debugging and Fixes",
      price: "$50",
      description: "Keep your site running smoothly. This service covers:\n- Bug identification and resolution\n- Performance optimization\n- Code review"
    },
  ];

  return (
    <section id="gigs" class="p-10 mt-10">
      <h2 class="text-3xl font-bold text-center text-primary">My Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <For each={services}>
          {(service) => (
            <div class="card p-5 rounded shadow-lg">
              <h3 class="text-xl font-semibold text-primary">{service.title}</h3>
              <p class="text-lg text-secondary">{service.price}</p>
              <p class="text-sm mt-2">{service.description.split("\n").map(line => <span>{line}<br /></span>)}</p>
              <button class="btn-primary mt-3 px-4 py-2 rounded">Contact</button>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default Gigs;
