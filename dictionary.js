// ==========================================
// 「ナギリッシュ10」教科書完全データファイル (dictionary.js)
// ==========================================

// 1. 単語特訓データ（10語1セット：ナギリッシュ10）
const textbookDictionary = [
    { id: 1, textbookId: "NEW CROWN 1-01", page: "P. 10", unit: "Start - Part 1", emoji: "👋", en: "hello", correctMeaning: "こんにちは", choices: ["こんにちは", "さようなら", "ありがとう", "ごめんなさい"], ex: "Hello, nice to meet you." },
    { id: 2, textbookId: "NEW CROWN 1-02", page: "P. 14", unit: "Unit 1 - Part 1", emoji: "🏫", en: "school", correctMeaning: "学校", choices: ["学校", "病院", "公園", "図書館"], ex: "We go to school every day." },
    { id: 3, textbookId: "NEW CROWN 1-03", page: "P. 18", unit: "Unit 1 - Part 2", emoji: "👦", en: "friend", correctMeaning: "友達", choices: ["先生", "友達", "家族", "医者"], ex: "He is my best friend." },
    { id: 4, textbookId: "NEW CROWN 1-04", page: "P. 22", unit: "Unit 2 - Part 1", emoji: "📚", en: "book", correctMeaning: "本", choices: ["本", "机", "椅子", "ノート"], ex: "This is an English book." },
    { id: 5, textbookId: "NEW CROWN 1-05", page: "P. 26", unit: "Unit 2 - Part 2", emoji: "⚽", en: "soccer", correctMeaning: "サッカー", choices: ["サッカー", "テニス", "野球", "バスケットボール"], ex: "Do you play soccer?" },
    { id: 6, textbookId: "NEW CROWN 1-06", page: "P. 30", unit: "Unit 3 - Part 1", emoji: "🍎", en: "apple", correctMeaning: "りんご", choices: ["りんご", "みかん", "もも", "バナナ"], ex: "I like eating an apple." },
    { id: 7, textbookId: "NEW CROWN 1-07", page: "P. 34", unit: "Unit 3 - Part 2", emoji: "🍌", en: "banana", correctMeaning: "バナナ", choices: ["ぶどう", "バナナ", "いちご", "メロン"], ex: "Monkeys love to eat a banana." },
    { id: 8, textbookId: "NEW CROWN 1-08", page: "P. 38", unit: "Unit 4 - Part 1", emoji: "🍊", en: "orange", correctMeaning: "オレンジ / みかん", choices: ["レモン", "オレンジ / みかん", "すいか", "キウイ"], ex: "She drinks orange juice." },
    { id: 9, textbookId: "NEW CROWN 1-09", page: "P. 42", unit: "Unit 4 - Part 2", emoji: "🍇", en: "grape", correctMeaning: "ぶどう", choices: ["さくらんぼ", "りんご", "ぶどう", "パイナップル"], ex: "These grapes are very sweet." },
    { id: 10, textbookId: "NEW CROWN 1-10", page: "P. 46", unit: "Unit 5 - Part 1", emoji: "🍑", en: "peach", correctMeaning: "もも", choices: ["もも", "なし", "かき", "マンゴー"], ex: "A peach is soft and juicy." }
];

// 2. 熟語特訓データ（10問）
const idiomDictionary = [
    { id: 1, textbookId: "NEW CROWN 1-ID1", page: "P. 32", unit: "Unit 3 関連熟語", meaning: "〜を気に入っている、好きである", correct: "I am fond of playing the piano after school.", idiom: "fond of", distractors: ["I am afraid of playing the piano after school.", "I am good at playing the piano after school.", "I am interested in playing the piano after school.", "I am tired of playing the piano after school."] },
    { id: 2, textbookId: "NEW CROWN 1-ID2", page: "P. 40", unit: "Unit 4 関連熟語", meaning: "〜に興味がある", correct: "She is interested in learning English history.", idiom: "interested in", distractors: ["She is tired of learning English history.", "She is proud of learning English history.", "She is different from learning English history.", "She is busy with learning English history."] },
    { id: 3, textbookId: "NEW CROWN 1-ID3", page: "P. 48", unit: "Unit 5 関連熟語", meaning: "すぐに、まもなく", correct: "He will come back home in a minute.", idiom: "in a minute", distractors: ["He will come back home at last in a minute.", "He will come back home by mistake.", "He will come back home on time.", "He will come back home for a long time."] },
    { id: 4, textbookId: "NEW CROWN 1-ID4", page: "P. 54", unit: "Unit 5 関連熟語", meaning: "〜が得意である", correct: "Ken is good at playing soccer in the park.", idiom: "good at", distractors: ["Ken is bad at playing soccer in the park.", "Ken is tired of playing soccer in the park.", "Ken is fond of playing soccer in the park.", "Ken is busy with playing soccer in the park."] },
    { id: 5, textbookId: "NEW CROWN 1-ID5", page: "P. 62", unit: "Unit 6 関連熟語", meaning: "たくさんの〜", correct: "There are a lot of books on the desk.", idiom: "a lot of", distractors: ["There are a few of books on the desk.", "There are a little of books on the desk.", "There are a piece of books on the desk.", "There are a kind of books on the desk."] },
    { id: 6, textbookId: "NEW CROWN 1-ID6", page: "P. 70", unit: "Unit 6 関連熟語", meaning: "起立する、立つ", correct: "Please stand up and look at the blackboard.", idiom: "stand up", distractors: ["Please sit down and look at the blackboard.", "Please look up and look at the blackboard.", "Please turn on and look at the blackboard.", "Please wake up and look at the blackboard."] },
    { id: 7, textbookId: "NEW CROWN 1-ID7", page: "P. 78", unit: "Unit 7 関連熟語", meaning: "〜を楽しみにして待つ", correct: "I'm looking forward to seeing you soon.", idiom: "looking forward to", distractors: ["I'm looking for seeing you soon.", "I'm looking at seeing you soon.", "I'm looking over seeing you soon.", "I'm looking back seeing you soon."] },
    { id: 8, textbookId: "NEW CROWN 1-ID8", page: "P. 86", unit: "Unit 7 関連熟語", meaning: "〜の世話をする", correct: "She always takes care of her cute cat.", idiom: "takes care of", distractors: ["She always takes part of her cute cat.", "She always takes place of her cute cat.", "She always takes off her cute cat.", "She always takes time of her cute cat."] },
    { id: 9, textbookId: "NEW CROWN 1-ID9", page: "P. 92", unit: "Unit 8 関連熟語", meaning: "お互いに", correct: "The two boys talked with each other.", idiom: "each other", distractors: ["The two boys talked with every other.", "The two boys talked with one other.", "The two boys talked with another", "The two boys talked with some other."] },
    { id: 10, textbookId: "NEW CROWN 1-ID10", page: "P. 98", unit: "Unit 8 関連熟語", meaning: "もちろん、いいですよ", correct: "Sure, I would be glad to help you.", idiom: "glad to", distractors: ["Sure, I would be sad to help you.", "Sure, I would be tired to help you.", "Sure, I would be afraid to help you.", "Sure, I would be busy to help you."] }
];

// 3. 全文リーディングデータ
const fullReaderData = [
    { id: 1, en: "Hello. I'm Kohei. Nice to meet you.", jp: "こんにちは。私はコーヘイです。はじめまして。" },
    { id: 2, en: "Hi, Kohei. I'm Kate. Nice to meet you, too.", jp: "やあ、コーヘイ。私はケイトです。こちらこそはじめまして。" },
    { id: 3, en: "Are you a new student here?", jp: "あなたはここの新入生ですか？" },
    { id: 4, en: "Yes, I am. I live in Oita now.", jp: "はい、そうです。今は大分に住んでいます。" },
    { id: 5, en: "This is my friend, Mike. He is from America.", jp: "こちらは私の友達のマイクです。彼はアメリカ出身です。" }
];