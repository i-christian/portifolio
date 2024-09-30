import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";

const WrongPage: Component = () => {
  const navigate = useNavigate();
  return (
    <section class="bg-primary dark:bg-secondary min-h-screen flex items-center justify-center">
      <div class="text-center">
        <p class="text-sm font-medium text-blue-500 dark:text-red-400">404 error</p>
        <h1 class="mt-3 text-2xl font-semibold text-primary md:text-3xl">
          We can’t find that page
        </h1>
        <p class="mt-4 text-secondary">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <div class="flex items-center justify-center mt-6 gap-x-3">
          <button class="btn-primary flex items-center gap-2 px-4 py-2 rounded-md"
            onClick={() => navigate("/")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 rtl:rotate-180">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>

            <span>Go home</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WrongPage;
