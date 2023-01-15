import uuid from 'react-native-uuid';

const possibleDeckNames = [
    'Romanian',
    'English',
    'German',
    'Spanish',
    'English-Spanish',
    'English-Romanian',
    'English-German',
    'German-Spanish',
    'German-French',
    'German-Romanian',
    'French-Italian',
    'Networking',
    'Firewalls 101',
    'JavaScript Shortcuts',
    'AlgoExpert',
    'Trading Terminology'
]

const possibleCardFrontBack = [
    { front: 'Which is the coldest location in the earth?', back: 'East Antarctica' },
    { front: 'Which is the highest peak in India?', back: 'Mount Everest' },
    { front: 'The second highest peak in India', back: 'K2' },
    { front: 'WHich is the continent with the most number of countries?', back: 'Africa' },
    { front: 'Which is the country with the most people?', back: 'China' },
    { front: 'Which is the fastest animal on land?', back: 'Cheetah' },
    { front: 'Which is the first biosphere reserve in India?', back: 'Nilgiri Biopshere Reserve' },
    { front: 'Which is the first element on the periodic table of elements?', back: 'Hydrogen' },
    { front: 'Which is the largest state of India?', back: 'Rajasthan' },
    { front: 'Which is the hardest substance available on earth?', back: 'Diamond' },
    { front: 'The national river of India?', back: 'Gange' },
    { front: 'Which is the hottest continent on Earth?', back: 'Africa' },
    { front: 'Which is the national fruit of India?', back: 'Mango' },
    { front: 'Which is the national flower of India?', back: 'Lotus' },
    { front: 'Which is the instrument used to measure blood pressure?', back: 'Sphygmomanometer' },
    { front: 'Which is the largest ‘Democracy’ country in the world?', back: 'India' },
    { front: 'Which animal is known as the ‘Ship of the Desert”?', back: 'Camel' },
    { front: 'Which is the largest animal in the world?', back: 'Blue whale' },
    { front: 'Which is the largest bone in the human body?', back: 'Femur, Also Known As The Thighbone' },
    { front: 'Which animal is known as the king of the jungle?', back: 'Lion' },
    { front: 'Name the National bird of India?', back: 'The Peacock' },
    { front: 'Which is the largest continent in the world?', back: 'Asia' },
]

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

function generateDeckName() {
    const id = Math.floor(Math.random() * possibleDeckNames.length);
    return possibleDeckNames[id];
}

export function generateDecks(numberOfDecks: number) {
    const decks: any = [];

    [...Array(numberOfDecks).keys()].forEach((index) => {
        const newDeck: any = { id: uuid.v4().toString() };
        newDeck.name = generateDeckName();
        newDeck.createdAt = new Date().toLocaleDateString();
        newDeck.updatedAt = new Date().toLocaleDateString();
        newDeck.lastPracticed = new Date().toLocaleDateString();
        newDeck.numberOfCards = Math.floor(Math.random() * 100);
        newDeck.cardsDue = Math.floor(Math.random() * newDeck.numberOfCards);
        decks.push(newDeck);
    })

    return decks;
}

export function generateCards(numberOfCards: number) {
    const cards: any = [];

    [...Array(numberOfCards).keys()].forEach((index) => {
        const newCard: any = { id: uuid.v4().toString() };
        const newCardQuestionIndex = getRandomInt(possibleCardFrontBack.length);
        newCard.front = possibleCardFrontBack[newCardQuestionIndex].front;
        newCard.back = possibleCardFrontBack[newCardQuestionIndex].back;
        newCard.createdAt = new Date().toLocaleDateString();
        newCard.updatedAt = new Date().toLocaleDateString();
        newCard.lastPracticed = new Date().toLocaleDateString();
        newCard.timesPracticed = Math.floor(Math.random() * 100);
        newCard.isDue = Math.random() < 0.5;
        cards.push(newCard);
    })

    return cards;
}