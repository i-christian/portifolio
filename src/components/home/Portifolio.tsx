import { Component, For } from "solid-js";

const Portfolio: Component = () => {
  const projects = [
    { title: "School Management Project", link: "https://github.com/i-christian/school_management_system.git" },
    {
      title: "Maze Runner game", link: "https://github.com/i-christian/pixel_escape.git"
    },
    {
      title: "Expense Tracker", link: "https://github.com/i-christian/react_projects/tree/main/expense_tracker"
    },
    {
      title: "Realtime Chat App", link: "https://github.com/i-christian/bytechat-web.git"
    }
  ];

  return (
    <section id="portfolio" class="p-10">
      <h2 class="text-3xl font-bold text-center text-primary">My Portfolio</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <For each={projects}>
          {(project) => (
            <div class="card p-5 rounded border border-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <h3 class="text-xl font-semibold text-primary">{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default Portfolio;
