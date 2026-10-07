// ==========================================
// ナギリッシュ10 辞書データ 3/3 (Unit 6 〜 8 ＆ 全文データ) [絵なし・3択仕様]
// ==========================================

const dictPart3 = [
    { id: 16, textbookId: "NEW CROWN 1-16", page: "P. 52", unit: "Unit 6 - Part 1", en: "swim", correctMeaning: "泳ぐ", choices: ["泳ぐ", "走る", "跳ぶ"], ex: "I can swim in the pool." },
    { id: 17, textbookId: "NEW CROWN 1-17", page: "P. 56", unit: "Unit 6 - Part 2", en: "guitar", correctMeaning: "ギター", choices: ["ギター", "ピアノ", "バイオリン"], ex: "Can you play the guitar?" },
    { id: 18, textbookId: "NEW CROWN 1-18", page: "P. 65", unit: "Unit 7 - Part 1", en: "yesterday", correctMeaning: "昨日", choices: ["昨日", "今日", "明日"], ex: "I was busy yesterday." },
    { id: 19, textbookId: "NEW CROWN 1-19", page: "P. 72", unit: "Unit 8 - Part 1", en: "summer", correctMeaning: "夏", choices: ["夏", "春", "冬"], ex: "I like summer." },
    { id: 20, textbookId: "NEW CROWN 1-20", page: "P. 80", unit: "Unit 8 - Part 2", en: "doctor", correctMeaning: "医者、医師", choices: ["医者、医師", "先生", "歌手"], ex: "He wants to be a doctor." }
];

// 全ての単語データを合体させる
const textbookDictionary = [...dictPart1, ...dictPart2, ...dictPart3];

// 全文リーディングデータ
const fullReaderData = [
    { id: 1, en: "Hello. I'm Kohei. Nice to meet you.", jp: "こんにちは。私はコーヘイです。はじめまして。" },
    { id: 2, en: "Hi, Kohei. I'm Kate. Nice to meet you, too.", jp: "やあ、コーヘイ。私はケイトです。こちらこそはじめまして。" },
    { id: 3, en: "Are you a new student here?", jp: "あなたはここの新入生ですか？" },
    { id: 4, en: "Yes, I am. I live in Oita now.", jp: "はい、そうです。今は大分に住んでいます。" },
    { id: 5, en: "This is my friend, Mike. He is from America.", jp: "こちらは私の友達のマイクです。彼はアメリカ出身です。" },
    { id: 6, en: "Is this your bag, Ken?", jp: "ケン、これはあなたのバッグですか？" },
    { id: 7, en: "No, it isn't. It's not mine.", jp: "いいえ、違います。それは私のじゃありません。" },
    { id: 8, en: "I play soccer after school every day.", jp: "私は毎日放課後にサッカーをします。" },
    { id: 9, en: "Do you play tennis on weekends?", jp: "あなたは週末にテニスをしますか？" },
    { id: 10, en: "What time is it now in London?", jp: "ロンドンは今何時ですか？" },
    { id: 11, en: "I can swim fast, but I can't play the guitar.", jp: "私は速く泳げますが、ギターを弾くことはできません。" },
    { id: 12, en: "Let's enjoy learning English and make our dreams come true!", jp: "英語の勉強を楽しんで、私たちの夢を叶えましょう！" }
];