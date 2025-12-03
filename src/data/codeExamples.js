
export const codeExamples = {
  "App.jsx": `
    import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
    <div></div>
    );
}
    
    `,

  "Hero.jsx": `
    import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
    <div></div>
    );
}
    
    `,

  "Navbar.jsx": `
    import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react"

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY});
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
    <div></div>
    );
}
    
    `,
};