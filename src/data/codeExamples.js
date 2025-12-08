export const codeExamples = {
  "App.jsx": `
  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
  import Features from "./components/Features";
  import Pricing from "./components/Pricing";
  import Testimonials from "./components/Testimonials";
  import Footer from "./components/Footer";
  
  function App() {
    return (
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        <Navbar />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    );
  }
  
  export default App;
  
    `,

  "Hero.jsx": `
   import { ChevronDown } from "lucide-react";
   import { useEffect, useState } from "react";
   import SyntaxHighlighter from "react-syntax-highlighter";
   import { codeExamples } from "../data/codeExamples";
   
   export default function Hero() {
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     const [activeTab, setActiveTab] = useState("App.jsx");
   
     useEffect(() => {
       function handleMouseMove(e) {
         setMousePosition({ x: e.clientX, y: e.clientY });
       }
   
       window.addEventListener("mousemove", handleMouseMove);
   
       return () => window.removeEventListener("mousemove", handleMouseMove);
     }, []);
     return (
       <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
         <div
           className="absolute inset-0 opacity-30"
          
         />
    
    `,

  "Navbar.jsx": `
   import { Menu, X } from "lucide-react";
   import { useState } from "react";
   
   export default function Navbar() {
       const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
       return (
         <nav className="fixed top-0 z-50 w-full transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
             <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
               <div className="flex items-center space-x-1 group cursor-pointer">
                 <div>
                   <img
                     src="/logo.png"
                     alt="joshforjosh"
                     className="w-6 h-6 sm:w-8 sm:h-8"
                   />
                 </div>
                 <span className="text-lg sm:text-xl md:text-2xl font-medium">
                   <span className="text-white">Code</span>
                   <span className="text-blue-500">Flow</span>
                 </span>
               </div>
   
    
    `,
};

export const floatingCard = {
  "App.jsx": {
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400",
    textColor: "text-blue-200",
    contentColor: "text-blue-300",
    icon: "IA",
    title: "Smart Completion",
    content: "AI-powered code suggestion in real-time",
  },

  "Hero.jsx": {
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
    textColor: "text-purple-200",
    contentColor: "text-purple-300",
    icon: "⚡",
    title: "Auto Animation",
    content: "Dynamic Typing Effects",
  },

  "Navbar.jsx": {
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    textColor: "text-emerald-200",
    contentColor: "text-blue-300",
    icon: "🔍",
    title: "Smart Completion",
    content: "AI-powered code suggestion in real-time",
  },
};
