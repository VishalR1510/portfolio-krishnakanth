import { useState , useEffect } from "react";
import "../index.css";

function CustomCursor() {
    const [ position , setPosition ] = useState({
        x : 0 ,y : 0
    });

    function move(e) {
        setPosition({
            x : e.clientX,
            y : e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove" , move);
        return () => window.removeEventListener("mousemove",move);
    },[]);

    useEffect(() => {
        const targets = document.querySelectorAll(".custom-target");

        function enter() {
            document.body.classList.add("cursor-hover");
        }

        function leave() {
            document.body.classList.remove("cursor-hover");
        }

        targets.forEach((e) => {
            e.addEventListener("mouseenter", enter);
            e.addEventListener("mouseleave", leave);
        });

        return () => {
            targets.forEach((el) => {
                el.removeEventListener("mouseenter", enter);
                el.removeEventListener("mouseleave", leave);
            });
        };
    }, []);

    return (
        <div className="custom-cursor"
        style={{
            top: position.y,
            left: position.x,
            
        }}
        />
    );
}

export default CustomCursor; 