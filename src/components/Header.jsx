import {useState , useEffect , useRef } from "react";
import ClearIcon from '@mui/icons-material/Clear';

function Header() {
    const [ visible , setVisible ] = useState(true);
    const [ showBorder , setShowBorder ] = useState(false);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const lastScrollY = useRef(0);
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

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
    
    
    useEffect(() => {
        function handleKey(e) {
            if (e.key === 'Escape') setIsMobileMenuOpen(false);
        }

        function handleResize() {
            if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
        }

        window.addEventListener('keydown', handleKey);
        window.addEventListener('resize', handleResize, { passive: true });

        return () => {
            window.removeEventListener('keydown', handleKey);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    
    useEffect(() => {
        function updateHeight() {
            if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight || 0);
        }

        updateHeight();
        window.addEventListener('resize', updateHeight, { passive: true });
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    
    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        const prevOverflowX = document.body.style.overflowX;
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.overflowX = 'hidden';
            document.documentElement.style.overflowX = 'hidden';
        } else {
            document.body.style.overflow = prevOverflow || '';
            document.body.style.overflowX = prevOverflowX || '';
            document.documentElement.style.overflowX = '';
        }

        return () => {
            document.body.style.overflow = prevOverflow || '';
            document.body.style.overflowX = prevOverflowX || '';
            document.documentElement.style.overflowX = '';
        };
    }, [isMobileMenuOpen]);
    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleAboutClick = (e) => {
        e.preventDefault();

        const aboutSection = document.getElementById('about');
        if (!aboutSection) return;

        document.body.classList.add('about-click-animate');

        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        
        setTimeout(() => {
            document.body.classList.remove('about-click-animate');
        }, 2000);

        closeMobileMenu();
    };
    
    return (
        <header 
            ref={headerRef}
            className={`w-full box-border flex items-center justify-between px-3 sm:px-4 md:px-8 lg:px-12 py-3 md:py-6 lg:py-8 text-white header ${
            !visible ? "header-hidden" : ""} ${showBorder ? "border-b border-white/40" : "bg-transparent"}`}
            style={showBorder ? { backgroundColor: '#141414' } : {}}
        >

            <img src="/assets/react.svg" alt="Logo" className="h-6 md:h-8 lg:h-10 ml-1 md:ml-4 lg:ml-10 flex-shrink-0 w-auto max-w-[140px]" />

            <ul className="hidden md:flex space-x-6 md:space-x-10 lg:space-x-12 pr-4 md:pr-8 lg:pr-16 flex-shrink-0">
                <li>
                    <a className="custom-target font-icomoon font-bold text-purple-800 whitespace-nowrap" href="#" onClick={closeMobileMenu}>HOME</a>
                </li>
                <li>
                    <a
                        className="custom-target font-icomoon font-bold hover:text-purple-800 whitespace-nowrap"
                        href="#about"
                        onClick={handleAboutClick}
                    >
                        ABOUTME
                    </a>
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
                className="md:hidden text-white focus:outline-none flex-shrink-0"
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
            
            <div
                className={`md:hidden fixed inset-x-0 bg-black/95 backdrop-blur-sm transition-all duration-300 overflow-y-auto overflow-x-hidden ${
                    isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)`, zIndex: 60 }}
            >
                <ul className="flex flex-col items-center py-6 px-4 w-full max-w-full space-y-4">
                    <li>
                        <a className="custom-target font-icomoon font-bold text-purple-800 block py-2" href="#" onClick={closeMobileMenu}>HOME</a>
                    </li>
                    <li>
                        <a
                            className="custom-target font-icomoon font-bold hover:text-purple-800 block py-2"
                            href="#about"
                            onClick={handleAboutClick}
                        >
                            ABOUTME
                        </a>
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