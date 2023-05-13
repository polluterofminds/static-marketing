import * as React from "react"
import CTA from "../components/CTA";
import Features from "../components/Features";
import Features_Two from "../components/Features_Two";
import Footer from "../components/Footer";
import Framworks from "../components/Frameworks";
import Hero from "../components/Hero";
import Logos from "../components/Logos";
import editor from "../images/Editor.png";

const IndexPage = () => {
  return (
    <div>
      <Hero />
      <Logos />
      <Framworks />
      <Features />    
      <Features_Two />
      <CTA />
      <Footer />
    </div>    
  )
}

export default IndexPage

export const Head = () => { 
  return (
    <>
    <title>Static</title>
    <meta property="og:title" content="About Static" />
    <meta property="og:description" content="Static is a beautiful CMS for your static site." />
    <meta property="og:image" content={editor} />
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerpolicy="no-referrer-when-downgrade" /></noscript>
    </>
  )
}
