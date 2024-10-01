import { Component, For } from "solid-js";

const TechnologyStack: Component = () => {
  const technologies = [
    "HTML5",
    "CSS3",
    "SolidJS",
    "TailwindCSS",
    "React",
    "Node.js",
    "FastAPI",
    "Docker",
    "GitHub",
  ];

  return (
    <section id="tech" class="p-10">
      <h2 class="text-3xl font-bold text-center text-primary">Technology Stack</h2>
      <div class="flex flex-wrap justify-center mt-6 gap-4">
        <For each={technologies}>
          {(tech) => (
            <div class="card p-3 rounded border border-gray-300 shadow-md hover:shadow-lg transition-shadow">
              <span class="text-primary font-medium">{tech}</span>
            </div>
          )}
        </For>
      </div>
    </section>
  );
};

export default TechnologyStack;
