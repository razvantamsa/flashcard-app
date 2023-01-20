import { createContext } from "react";

export const AppContext = createContext({
    appContext: {
        user: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phonenumber: '',
            profilePicture: '',
        },
        decks: [],
        theme: 'light',
        language: 'en'
    },
    setAppContext: (object: any) => {},
});

export function updateAppContextDecks(setState: any, decks: any[]) {
    setState((prevValue: any) => ({ ...prevValue, decks }));
}

export function updateAppContextLanguage(setState: any, language: string) {
    setState((prevValue: any) => ({ ...prevValue, language }));
}

export function updateAppContextTheme(setState: any, theme: string) {
    setState((prevValue: any) => ({ ...prevValue, decks: theme }));
}
