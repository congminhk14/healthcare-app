export default function Footer() {
  const footerItems = [
    '会員登録',
    '運営会社',
    '利用規約',
    '個人情報の取扱いについて',
    '特定商取引法に基づく表記',
    'お問い合わせ'
  ];

  return (
    <footer className="bg-[#414141] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-start gap-20 text-sm">
          {footerItems.map((item, index) => (
            <div key={index}>
              <a href="#" className="hover:text-orange-400 transition-colors whitespace-nowrap">
                {item}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
