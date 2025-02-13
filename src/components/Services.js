function Services() {
    const services = [
        {
            title: "AIチャットボット開発",
            description: "企業のカスタマーサポートやFAQ対応を自動化し、業務効率を向上。",
            icon: "fa-comments"  // チャットバブル
        },
        {
            title: "カスタマーサポート支援ツール",
            description: "企業のサポートチームの効率を最大化し、顧客とのコミュニケーションを円滑に進める支援ツール。",
            icon: "fa-headset"  // ヘッドセット
        },
        {
            title: "Webシステム開発",
            description: "クライアントのニーズに合わせた高度なカスタマイズが可能なWebシステムの開発。",
            icon: "fa-laptop-code"  // ラップトップでコードを書く
        }
    ];

    return (
        <section id="services" data-name="services" className="select-none py-32 bg-gradient-to-b from-[rgba(186,0,47,0.95)] to-black">
            <div className="container mx-auto px-4">
                <h2 data-name="services-title" className="section-title text-white pb-12">
                    <ruby>
                        SERVICES<rt className="text-xs">サービス</rt>
                    </ruby>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-name={`service-card-${index}`}
                            className="service-card bg-white p-8 rounded-lg shadow-lg text-center"
                        >
                            <i className={`fas ${service.icon} text-4xl text-[#BA002F] mb-4`}></i> {/* アイコン色を変更 */}
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            {service.description && (
                                <p className="text-gray-600">{service.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
