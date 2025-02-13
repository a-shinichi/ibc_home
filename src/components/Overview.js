function Overview() {
    return (
        <section id="overview" data-name="overview" className="mb-20 px-15 p-12 bg-gradient-to-b from-black to-[#1E3760]">
            <h2 data-name="overview-title" className="section-title text-white pb-20 select-none">
                <ruby>
                    OVERVIEW<rt className="text-xs">会社概要</rt>
                </ruby>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div data-name="company-info" className="space-y-6 text-white">
                    <div className="space-y-2">
                        <h3 className="font-bold">会社名</h3>
                        <p>株式会社IBC</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold">代表者</h3>
                        <p>代表取締役：鶴田純一</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold">所在地</h3>
                        <p>〒100-0005 東京都千代田区丸の内</p>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-bold">事業内容</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold">1. ウェブサービス開発</h4>
                                <p>
                                    高品質で効率的なウェブアプリケーションやシステムの開発を提供します。
                                    お客様のニーズに合わせたカスタマイズを行い、使いやすいデジタル体験を実現します。
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold">2. AIソリューションの提案</h4>
                                <p>生成AI技術を活用したビジネス向けの革新的なソリューションを提供します。</p>
                            </div>
                            <div>
                                <h4 className="font-bold">3. 生成AI導入支援</h4>
                                <p>業務の効率化やコンテンツ生成、データ分析の自動化を通じて、業務の生産性向上をサポートします。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-name="map" className="map-container pl-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.828030556506!2d139.766789!3d35.681167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf8baf09e5f%3A0x9008014b1d96a3c1!2z5Li44Gu5YaF44OI44Op44K544OI44K_44Ov44O8!5e0!3m2!1sja!2sjp!4v1708570433436!5m2!1sja!2sjp"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
