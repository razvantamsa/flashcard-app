import Deck from "../models/Deck";

const db = {
    userDecks:  ['CrpytoBani', 'Build-uri Lol', 'Sociologie', 'WoW', 'Versuri Ian', 'Okok', 'Testing'],
    user: {
        id: '12836',
        firstName: 'Michael',
        lastName: 'Cors',
        email: 'michaelcors@clothing.com',
        accountCreatedDate: new Date().toLocaleDateString(),
        numberOfDecks: 10,
        reviewsPerDay: 25,
        profileImage: '',
        phonenumber: '(+40) 733 896 986'
    },
    decks: [],
    cards: [],
}

export const decks = [
    new Deck({ userId: '1', name: 'Trading' }),
    new Deck({ userId: '1', name: 'Game of Thrones Trivia' }),
    new Deck({ userId: '1', name: 'Pickup Lines' }),
    new Deck({ userId: '1', name: 'Spanish' }),
    new Deck({ userId: '1', name: 'Docker Commands' }),
    new Deck({ userId: '1', name: 'NGINX' }),
    new Deck({ userId: '1', name: 'MSA Exam' }),
]

export default db;