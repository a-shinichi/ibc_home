function Hero() {
    return (
        <section
            data-name="hero"
            className="relative pt-60 pb-50 text-center bg-cover"
            style={{
                position: "relative",
            }}
        >   
            <div
                className="absolute top-0 left-0 w-full h-[50vh]"
                style={{
                    backgroundImage: 'url("public/images/hero-bg.gif")',
                    backgroundSize: "cover",
                    clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)",
                    position: "fixed",
                    zIndex: "-1",
                }}
            />

            <div className="relative z-20">
                <h1 data-name="hero-title" className="text-8xl pt-10 pb-10 font-serif bg-white bg-opacity-50 select-none">
                    The world of AI at your hands.
                </h1>
                <p data-name="hero-description" className="text-xl pt-30 pb-5 bg-white bg-opacity-50 font-serif select-none mb-16">
                    ウェブサービスとAIソリューションを通じて、未来の技術革新をリードし、企業の成長を支援します。
                </p>
            </div>
        </section>
    );
}
