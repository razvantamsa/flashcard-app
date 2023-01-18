import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { DECKS_DISPLAYED, normalTheme } from '../../theme';

function getDeckPracticeStatus(deck: any) {
    if(deck.cardsDue <= 5 || deck.cardsDue <= 25/100 * deck.numberOfCards) {
        return normalTheme.allow;
    }
    if(deck.cardsDue <= 50/100 * deck.numberOfCards){
        return normalTheme.warning;
    }
    return normalTheme.danger;
}

export default function MenuDecks({ decks, navigation }: any) {
  return (
    <View style={styles.menuDecks}>
        { decks.length ? 
            <>
                {decks.map((deck: any) =>
                    <TouchableWithoutFeedback onPress={() => navigation.push('Deck', { deck })}>
                        <View style={styles.deckRow} key={deck.id}>
                            <>
                                <View style={[styles.deckRowColumn, { flex: 3 }]}>
                                    <Text>{deck.name}</Text>  
                                </View>
                                <View style={styles.deckRowColumn}>
                                    <Text>{deck.numberOfCards}</Text>  
                                </View>
                                <View style={styles.deckRowColumn}>
                                    <Text style={[{color: getDeckPracticeStatus(deck)}]}>{deck.cardsDue}</Text>  
                                </View>
                            </> 
                        </View>
                    </TouchableWithoutFeedback>
                )}
                <View style={{flex: DECKS_DISPLAYED - decks.length}}></View>
            </>
            : <Text style={{fontWeight: '700', fontSize: 18, textAlign: 'center'}}>No decks</Text>
        }
    </View>
  )
}

const styles = StyleSheet.create({
    menuDecks: {
        flex: 3,
        paddingVertical: 20,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deckRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deckRowColumn: {
        flex: 1,
        padding: 10,
        paddingVertical: 15,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
    }
});
