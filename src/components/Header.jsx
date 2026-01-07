import {useState , useEffect , useRef } from "react";

function Header() {
    const [ visible , setVisible ] = useState(true);
    const [ showBorder , setShowBorder ] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        function controlHeader() {
            const currentScrollY = window.scrollY;

            if(currentScrollY > lastScrollY.current) {
                setVisible(false);
                setShowBorder(false);
            } else if(currentScrollY < lastScrollY.current) {
                setVisible(true);
                setShowBorder(currentScrollY >  15);
            }

            if(currentScrollY <= 15) {
                setShowBorder(false);
            }

            lastScrollY.current = currentScrollY;
        }

        window.addEventListener("scroll", controlHeader, { passive: true });

        return () => {
            window.removeEventListener("scroll", controlHeader);
        };
    }, []);
    
    return (
        <header 
            className={`flex items-center justify-between px-12 py-8 text-white header ${
            !visible ? "header-hidden" : ""} ${showBorder ? "border-b border-white/40" : "bg-transparent"}`}
            style={showBorder ? { backgroundColor: '#141414' } : {}}
        >
            <img src="/assets/react.svg" alt="Logo" className="h-10 ml-10" />
            <ul className="flex space-x-12 pr-16">
                <li>
                    <a className="custom-target font-icomoon font-bold text-purple-800 " href="#">HOME</a>

                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800" href="#about">ABOUTME</a>
                </li>
                    
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800" href="#services">SERVICES</a>

                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800" href="#projects">PROJECTS</a>

                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800" href="#contact">CONTACT</a>
                </li>

                            
            </ul>
        </header>
    )
}

export default Header;