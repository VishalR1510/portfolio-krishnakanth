function Footer() {
    return (
        <footer className="w-full h-20 border-t border-white/40 text-white/40" style={{background :"#141414"}}>
            <div className="flex items-center justify-between max-w-7xl pt-5">
                <p className="text-lg ml-10"> @ PTKK {new Date().getFullYear()}</p>
                <ul className="flex space-x-12 pr-10">
                    <li>
                        <a className="text-lg">Link1</a>
                    </li>
                    <li>
                        <a className="text-lg">Link2</a>
                    </li>
                    <li>
                        <a className="text-lg">Link3</a>
                    </li>
                </ul>
            </div>
        
        </footer>
    );
}

export default Footer;