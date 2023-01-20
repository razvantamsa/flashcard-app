import { createContext } from "react";

export const DeckContext = createContext({
    deckContext: {
        deck: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phonenumber: '',
            profilePicture: '',
        },
        cards: [],
    },
    setDeckContext: (object: any) => {},
});