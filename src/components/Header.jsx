import {useState , useEffect , useRef } from "react";
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
    const [ visible , setVisible ] = useState(true);
    const [ showBorder , setShowBorder ] = useState(false);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        function controlHeader() {
            const currentScrollY = window.scrollY;

            if(currentScrollY > lastScrollY.current) {
                setVisible(false);
                setShowBorder(false);
                setIsMobileMenuOpen(false);
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
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };
    
    return (
        <header 
            className={`flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 md:py-6 lg:py-8 text-white header ${
            !visible ? "header-hidden" : ""} ${showBorder ? "border-b border-white/40" : "bg-transparent"}`}
            style={showBorder ? { backgroundColor: '#141414' } : {}}
        >

            <img src="/assets/react.svg" alt="Logo" className="h-8 md:h-10 ml-2 md:ml-4 lg:ml-10 flex-shrink-0" />

            <ul className="hidden xl:flex space-x-6 xl:space-x-12 pr-4 xl:pr-16 flex-shrink-0">
                <li>
                    <a className="custom-target font-icomoon font-bold text-purple-800 whitespace-nowrap" href="#" onClick={closeMobileMenu}>HOME</a>
                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800 whitespace-nowrap" href="#about" onClick={closeMobileMenu}>ABOUTME</a>
                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800 whitespace-nowrap" href="#services" onClick={closeMobileMenu}>SERVICES</a>
                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800 whitespace-nowrap" href="#projects" onClick={closeMobileMenu}>PROJECTS</a>
                </li>
                <li>
                    <a className="custom-target font-icomoon font-bold hover:text-purple-800 whitespace-nowrap" href="#contact" onClick={closeMobileMenu}>CONTACT</a>
                </li>
            </ul>

            <button 
                className="xl:hidden text-white focus:outline-none flex-shrink-0"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? (
                    <ClearIcon className="text-white w-10 h-10" />
                ) : (
                    <div className="w-10 h-10 bg-purple-800 rounded-lg flex flex-col justify-center items-center">
                        <span className="block w-5 h-0.5 bg-white mb-1"></span>
                        <span className="block w-5 h-0.5 bg-white mb-1"></span>
                        <span className="block w-5 h-0.5 bg-white"></span>
                    </div>
                )}
            </button>
            
            <div className={`xl:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <ul className="flex flex-col items-center py-4 space-y-4">
                    <li>
                        <a className="custom-target font-icomoon font-bold text-purple-800 block py-2" href="#" onClick={closeMobileMenu}>HOME</a>
                    </li>
                    <li>
                        <a className="custom-target font-icomoon font-bold hover:text-purple-800 block py-2" href="#about" onClick={closeMobileMenu}>ABOUTME</a>
                    </li>
                    <li>
                        <a className="custom-target font-icomoon font-bold hover:text-purple-800 block py-2" href="#services" onClick={closeMobileMenu}>SERVICES</a>
                    </li>
                    <li>
                        <a className="custom-target font-icomoon font-bold hover:text-purple-800 block py-2" href="#projects" onClick={closeMobileMenu}>PROJECTS</a>
                    </li>
                    <li>
                        <a className="custom-target font-icomoon font-bold hover:text-purple-800 block py-2" href="#contact" onClick={closeMobileMenu}>CONTACT</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;