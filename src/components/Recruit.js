function Recruit() {
    // スクロールイベントを追加
    React.useEffect(() => {
        const button = document.getElementById("scroll-to-top");
        if (!button) return;

        const handleScroll = () => {
            if (window.scrollY > 300) {
                button.classList.remove("opacity-0", "scale-0");
                button.classList.add("opacity-100", "scale-100");
            } else {
                button.classList.remove("opacity-100", "scale-100");
                button.classList.add("opacity-0", "scale-0");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="recruit" data-name="recruit" className="select-none py-20 bg-gradient-to-b from-[#1E3760] to-[#BA002F] relative">
            <div className="container mx-auto px-4">
                <h2 data-name="recruit-title" className="section-title text-white mb-20">
                    <ruby>
                        RECRUIT
                        <rt className="text-xs">採用情報</rt>
                    </ruby>
                </h2>
                <p data-name="recruit-message" className="text-center text-xl text-white">
                    現在、募集は行っておりません。
                </p>
            </div>

            {/* ページトップボタン */}
            <button
                id="scroll-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="fixed bottom-6 right-6 p-3 bg-white bg-opacity-20 rounded-full shadow-lg hover:bg-opacity-25 transition-all opacity-0 scale-0"
            >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </section>
    );
}

export default Recruit;
