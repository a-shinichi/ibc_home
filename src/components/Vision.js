function Vision() {
    return (
        <section 
            id="vision" 
            data-name="vision" 
            className="py-12 mt-[15.2vh] text-white z-10"
            style={{
                background: "linear-gradient(to bottom, rgba(30, 55, 96, 0.85), rgba(110, 31, 71, 0.95), rgba(186, 0, 47, 0.95))"
            }}
        >
            <div className="container mx-auto px-4 select-none">
                <h2 data-name="vision-title" className="section-title">
                    <ruby>
                        VISION
                        <rt className="text-xs">ヴィジョン</rt>
                    </ruby>
                </h2>
                <h3 data-name="vision-subtitle" className="section-subtitle">
                    AIをもっと手軽に、もっと便利に
                </h3>
                <div data-name="vision-content" className="max-w-4xl mx-auto space-y-8 pb-12">
                    <p>
                        私たちは、AI技術を誰もが簡単に活用できる世界を目指しています。かつてAIは専門家だけが扱う高度な技術でしたが、今ではビジネスや日常生活のあらゆる場面で活用されるようになりました。しかし、多くの人にとってAIはまだ「難しい」「柔軟性に欠ける」「使いこなせない」といったハードルの高いものに感じられています。
                    </p>
                    <p>
                        私たちは、こうした壁を取り払い、AIをより手軽で便利なものにすることを使命としています。直感的な操作で使えるインターフェース、業務の自動化を支援するツール、そして誰もが手軽に導入できるシンプルなソリューションを提供することで、AIの可能性と拡張性を最大限に引き出します。
                    </p>
                    <p>
                        技術は進化し続けていますが、それを活かせるかどうかは「使いやすさ」にかかっています。私たちは、すべての人にとってAIがもっと自然で、もっと身近な存在になる未来を創り出します。
                    </p>
                </div>
            </div>
        </section>
    );
}
