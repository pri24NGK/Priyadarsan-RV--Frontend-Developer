import React from "react";

export const HeroBanner = (props) => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl text-cyan-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Space Capsule Information
          </h1>
          <p class="max-w-2xl mb-6 font-light text-grey-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            A space capsule is an often-crewed spacecraft that uses a blunt-body
            reentry capsule to reenter the Earth's atmosphere without wings.
            Capsules are distinguished from other satellites primarily by the
            ability to survive reentry and return a payload to the Earth's
            surface from orbit. Capsule-based crewed spacecraft such as Soyuz or
            Orion are often supported by a service or adapter module, and
            sometimes augmented with an extra module for extended space
            operations. Capsules make up the majority of crewed spacecraft
            designs, although one crewed spaceplane, the Space Shuttle, has
            flown in orbit.
          </p>
          <a
            href="#capsules_list"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-cyan-600 text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Information_List
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="data:image/jpeg;base64,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"
            alt="capsule"
          />
        </div>
      </div>
    </section>
  );
};
