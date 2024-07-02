import React from "react";

const Framworks = () => {
  return (
    <div id="frameworks" className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Works with most static site frameworks
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Whether it's Next.js, Hugo, Gatsby, or you rolled your own, Static
            works with most modern SSG frameworks. If your writing is in
            markdown and it has frontmatter, Static is for you.
          </p>
          <div className="mt-4">
            <div className="aspect-video">
              <iframe 
                className="h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/tXyi_nor4j4?si=h8l2oA5QY_v0I6eT" 
                title="Static Promo" 
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              >
              </iframe>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://tally.so/r/mK0zWz"
              className="rounded-md bg-gray-900 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Start you 60-day free trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Framworks;
