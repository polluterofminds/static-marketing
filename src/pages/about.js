import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import editor from "../images/Editor.png";

const About = () => {
  return (
    <div>
      <Nav />
      <div className="relative overflow-hidden bg-white py-16 sm:w-1/2 w-3/4 m-auto">
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1 className="block text-center text-lg font-semibold">
              <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                About Static
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Static is built by <a className="underline" href="https://polluterofminds.com" target="_blank" rel="noreferrer noopener">Justin Hunter</a> under his product studio called Mind Pollution, LLC. Static arose as a solution to a problem Justin was facing himself. He wanted to own his content, which meant having every file locally available on his computer. But he also wanted to have a beautiful writing experience when writing his blog posts. 
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Just had tried static sites in the past, but he would always give up on them because writing posts in a code editor was horrible. Finally, in 2022, he started working on a desktop app to solve this problem for himself.
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              While working on writing documentation for Docasaurus, Justin finally tested the first version of his new app. It was a simple desktop app with a WYSIWYG editor layered on top of the static site content. It was a game-changer for him. 
            </p>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              After months of tweaks, plenty of feedback from other static site fans, and a conversion to the web, Static was born.
            </p>
            <div className="mt-4">
              <h3 className="block text-center text-lg font-semibold">Contact</h3>
              <p className="mt-2 text-xl leading-8 text-gray-500">Get in touch by emailing justin [at] polluterofminds [dot] com.</p>
            </div>
          </div>          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About

export const Head = () => {
  return (
    <>
    <title>Static | About</title>
    <meta property="og:title" content="About Static" />
    <meta property="og:description" content="Static is a beautiful CMS for your static site." />
    <meta property="og:image" content={editor} />
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
    </>
  )
}