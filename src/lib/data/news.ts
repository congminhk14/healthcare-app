export interface INewsArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  tags: string[];
}

export const newsCategories = {
  column: 'オススメ',
  diet: 'ダイエット',
  beauty: '美容',
  health: '健康'
};

export const newsArticles: INewsArticle[] = [
  {
    id: '1',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '魚に含まれるDHAやEPAなどのオメガ3脂肪酸が脳の健康に与える効果について詳しく解説します。',
    category: 'column',
    date: '2021.05.17 23:25',
    image: '/images/column/column-1.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '2',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '良質なタンパク質と必須脂肪酸を豊富に含む魚類の栄養価について紹介します。',
    category: 'diet',
    date: '2021.05.17 23:25',
    image: '/images/column/column-2.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '3',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '魚に含まれるコラーゲンやビタミンが美容に与える効果について解説します。',
    category: 'beauty',
    date: '2021.05.17 23:25',
    image: '/images/column/column-3.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '4',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '日常的に魚を摂取することで得られる健康効果について詳しく説明します。',
    category: 'health',
    date: '2021.05.17 23:25',
    image: '/images/column/column-4.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '5',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '新鮮な魚の選び方から調理法まで、魚を美味しく食べるコツをご紹介します。',
    category: 'diet',
    date: '2021.05.17 23:25',
    image: '/images/column/column-5.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '6',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '魚を使った簡単で栄養満点のレシピをご紹介します。',
    category: 'beauty',
    date: '2021.05.17 23:25',
    image: '/images/column/column-6.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '7',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '魚の栄養成分が肌の健康に与える影響について詳しく解説します。',
    category: 'health',
    date: '2021.05.17 23:25',
    image: '/images/column/column-7.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '8',
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット',
    excerpt: '魚を食べることで得られる総合的な健康効果について説明します。',
    category: 'column',
    date: '2021.05.17 23:25',
    image: '/images/column/column-8.jpg',
    tags: ['#魚料理', '#健康', '#DHA']
  },
  {
    id: '9',
    title: '朝食の重要性と栄養バランスの取り方',
    excerpt: '一日の始まりである朝食の重要性と、効果的な栄養バランスの取り方について解説します。',
    category: 'diet',
    date: '2021.05.16',
    image: '',
    tags: ['#朝食', '#栄養', '#健康']
  },
  {
    id: '10',
    title: '美肌を保つための日常スキンケア',
    excerpt: '毎日のスキンケアで美肌を保つためのポイントと効果的な方法をご紹介します。',
    category: 'beauty',
    date: '2021.05.15',
    image: '',
    tags: ['#スキンケア', '#美肌', '#美容']
  },
  {
    id: '11',
    title: '運動不足解消のための簡単エクササイズ',
    excerpt: '忙しい日常でも取り入れやすい、運動不足解消のための簡単エクササイズをご紹介します。',
    category: 'health',
    date: '2021.05.14',
    image: '',
    tags: ['#運動', '#エクササイズ', '#健康']
  },
  {
    id: '12',
    title: '季節の野菜を使った健康レシピ',
    excerpt: '旬の野菜を使った栄養価の高い健康レシピをご紹介。季節に合わせた食材選びのコツも。',
    category: 'diet',
    date: '2021.05.13',
    image: '',
    tags: ['#野菜', '#レシピ', '#栄養']
  },
  {
    id: '13',
    title: 'ストレス管理と心の健康',
    excerpt: '現代社会で重要なストレス管理の方法と心の健康を保つためのアプローチについて。',
    category: 'health',
    date: '2021.05.12',
    image: '',
    tags: ['#ストレス', '#メンタル', '#健康']
  },
  {
    id: '14',
    title: 'アンチエイジングのための生活習慣',
    excerpt: '若々しさを保つためのアンチエイジング効果的な生活習慣と食事のポイント。',
    category: 'beauty',
    date: '2021.05.11',
    image: '',
    tags: ['#アンチエイジング', '#美容', '#生活習慣']
  },
  {
    id: '15',
    title: '健康的な間食の選び方',
    excerpt: 'ダイエット中でも安心して食べられる健康的な間食の選び方とタイミングについて。',
    category: 'diet',
    date: '2021.05.10',
    image: '',
    tags: ['#間食', '#ダイエット', '#健康']
  },
  {
    id: '16',
    title: '良質な睡眠のための環境づくり',
    excerpt: '質の良い睡眠を得るための寝室環境の整え方と睡眠の質を向上させるコツ。',
    category: 'health',
    date: '2021.05.09',
    image: '',
    tags: ['#睡眠', '#健康', '#環境']
  },
  {
    id: '17',
    title: 'ナチュラルメイクで素肌美人',
    excerpt: '自然な美しさを引き出すナチュラルメイクのテクニックと素肌を活かすポイント。',
    category: 'beauty',
    date: '2021.05.08',
    image: '',
    tags: ['#メイク', '#ナチュラル', '#美容']
  },
  {
    id: '18',
    title: '水分補給の重要性と効果的な方法',
    excerpt: '健康維持に欠かせない水分補給の重要性と、効果的な水分の取り方について解説。',
    category: 'health',
    date: '2021.05.07',
    image: '',
    tags: ['#水分補給', '#健康', '#デトックス']
  },
  {
    id: '19',
    title: 'プロテインを活用した筋力アップ',
    excerpt: 'プロテインを効果的に活用して筋力アップを目指す方法と摂取のタイミング。',
    category: 'diet',
    date: '2021.05.06',
    image: '',
    tags: ['#プロテイン', '#筋力', '#栄養']
  },
  {
    id: '20',
    title: 'ヨガで心と体のバランスを整える',
    excerpt: 'ヨガの基本ポーズと呼吸法で心と体のバランスを整える方法をご紹介します。',
    category: 'column',
    date: '2021.05.05',
    image: '',
    tags: ['#ヨガ', '#バランス', '#リラックス']
  }
];
