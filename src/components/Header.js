function Header() {
    const scrollToSection = (id) => {
        try {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`Element with id ${id} not found.`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header data-name="header" className="header fixed w-full top-0 z-50 shadow-md bg-[#BA002F]">
            <div className="container mx-auto px-7 flex justify-between items-center">
                <div data-name="logo" className="flex items-center">
                    <a href="/" onClick={(e) => e.preventDefault()}>
                        <img src="public/images/logo.png" alt="IBC ロゴ" className="h-12" onContextMenu={(e) => e.preventDefault()} />
                    </a>
                </div>

                <nav data-name="navigation">
                    <ul className="flex">
                        {['VISION', 'SERVICES', 'OVERVIEW', 'RECRUIT'].map((item) => (
                            <li key={item}>
                                <button
                                    data-name={`nav-${item.toLowerCase()}`}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className="text-white hover:bg-opacity-15 hover:bg-white text-base py-4 px-4 transition-colors duration-500"
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                        <li>
                            <a
                                href="mailto:info@ibc.com"
                                data-name="nav-contact"
                                className="text-white hover:bg-opacity-15 hover:bg-white text-base py-4 px-4 transition-colors duration-500 flex items-center justify-center"
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
