// ==========================================
// ナギリッシュ10 辞書データ 2/3 (Unit 3 〜 Unit 5) [絵なし・3択仕様]
// ==========================================

const dictPart2 = [
    { id: 11, textbookId: "NEW CROWN 1-11", page: "P. 32", unit: "Unit 3 - Part 1", en: "soccer", correctMeaning: "サッカー", choices: ["サッカー", "テニス", "野球"], ex: "Do you play soccer?" },
    { id: 12, textbookId: "NEW CROWN 1-12", page: "P. 34", unit: "Unit 3 - Part 1", en: "music", correctMeaning: "音楽", choices: ["音楽", "美術", "英語"], ex: "I listen to music." },
    { id: 13, textbookId: "NEW CROWN 1-13", page: "P. 38", unit: "Unit 4 - Part 1", en: "bike", correctMeaning: "自転車", choices: ["自転車", "車", "電車"], ex: "He rides a bike." },
    { id: 14, textbookId: "NEW CROWN 1-14", page: "P. 42", unit: "Unit 4 - Part 2", en: "food", correctMeaning: "食べ物", choices: ["食べ物", "飲み物", "野菜"], ex: "Japanese food is good." },
    { id: 15, textbookId: "NEW CROWN 1-15", page: "P. 48", unit: "Unit 5 - Part 1", en: "time", correctMeaning: "時間", choices: ["時間", "時計", "日"], ex: "What time is it?" }
];

// 熟語特訓データ（10問）
const idiomDictionary = [
    { id: 1, textbookId: "NEW CROWN 1-ID1", page: "P. 32", unit: "Unit 3 関連熟語", meaning: "〜を気に入っている、好きである", correct: "I am fond of playing the piano after school.", idiom: "fond of", distractors: ["I am afraid of playing the piano after school.", "I am good at playing the piano after school.", "I am interested in playing the piano after school."] },
    { id: 2, textbookId: "NEW CROWN 1-ID2", page: "P. 40", unit: "Unit 4 関連熟語", meaning: "〜に興味がある", correct: "She is interested in learning English history.", idiom: "interested in", distractors: ["She is tired of learning English history.", "She is proud of learning English history.", "She is busy with learning English history."] },
    { id: 3, textbookId: "NEW CROWN 1-ID3", page: "P. 48", unit: "Unit 5 関連熟語", meaning: "すぐに、まもなく", correct: "He will come back home in a minute.", idiom: "in a minute", distractors: ["He will come back home by mistake.", "He will come back home on time.", "He will come back home for a long time."] },
    { id: 4, textbookId: "NEW CROWN 1-ID4", page: "P. 54", unit: "Unit 5 関連熟語", meaning: "〜が得意である", correct: "Ken is good at playing soccer in the park.", idiom: "good at", distractors: ["Ken is bad at playing soccer in the park.", "Ken is tired of playing soccer in the park.", "Ken is fond of playing soccer in the park."] },
    { id: 5, textbookId: "NEW CROWN 1-ID5", page: "P. 62", unit: "Unit 6 関連熟語", meaning: "たくさんの〜", correct: "There are a lot of books on the desk.", idiom: "a lot of", distractors: ["There are a few of books on the desk.", "There are a little of books on the desk.", "There are a piece of books on the desk."] },
    { id: 6, textbookId: "NEW CROWN 1-ID6", page: "P. 70", unit: "Unit 6 関連熟語", meaning: "起立する、立つ", correct: "Please stand up and look at the blackboard.", idiom: "stand up", distractors: ["Please sit down and look at the blackboard.", "Please look up and look at the blackboard.", "Please turn on and look at the blackboard."] },
    { id: 7, textbookId: "NEW CROWN 1-ID7", page: "P. 78", unit: "Unit 7 関連熟語", meaning: "〜を楽しみにして待つ", correct: "I'm looking forward to seeing you soon.", idiom: "looking forward to", distractors: ["I'm looking for seeing you soon.", "I'm looking at seeing you soon.", "I'm looking over seeing you soon."] },
    { id: 8, textbookId: "NEW CROWN 1-ID8", page: "P. 86", unit: "Unit 7 関連熟語", meaning: "〜の世話をする", correct: "She always takes care of her cute cat.", idiom: "takes care of", distractors: ["She always takes part of her cute cat.", "She always takes place of her cute cat.", "She always takes off her cute cat."] },
    { id: 9, textbookId: "NEW CROWN 1-ID9", page: "P. 92", unit: "Unit 8 関連熟語", meaning: "お互いに", correct: "The two boys talked with each other.", idiom: "each other", distractors: ["The two boys talked with every other.", "The two boys talked with one other.", "The two boys talked with another."] },
    { id: 10, textbookId: "NEW CROWN 1-ID10", page: "P. 98", unit: "Unit 8 関連熟語", meaning: "もちろん、いいですよ", correct: "Sure, I would be glad to help you.", idiom: "glad to", distractors: ["Sure, I would be sad to help you.", "Sure, I would be tired to help you.", "Sure, I would be afraid to help you."] }
];