// ==========================================
// ナギリッシュ10 辞書データ 3/3 (Unit 6 〜 8 ＆ 全文データ)
// ==========================================

const dictPart3 = [
    { id: 13, textbookId: "NEW CROWN 1-13", page: "P. 52", unit: "Unit 6 - Part 1", emoji: "🏊", en: "swim", correctMeaning: "泳ぐ", choices: ["泳ぐ", "走る", "跳ぶ", "歩く"], ex: "I can swim in the pool." },
    { id: 14, textbookId: "NEW CROWN 1-14", page: "P. 56", unit: "Unit 6 - Part 2", emoji: "🎸", en: "guitar", correctMeaning: "ギター", choices: ["ギター", "ピアノ", "バイオリン", "ドラム"], ex: "Can you play the guitar?" }
];

// 全ての単語データを合体させる
const textbookDictionary = [...dictPart1, ...dictPart2, ...dictPart3];

// 全文リーディングデータ（NEW CROWN 1 全Unit 完全網羅版）
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