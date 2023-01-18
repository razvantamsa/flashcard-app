import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { userRequests } from '../../../utils/requests';
import { normalTheme } from '../../theme';

export default function PopularDecks({ user }: any) {

    const [decks, setDecks] = useState(['default']);

    useEffect(() => {
        async function getUserDecks() {
            const fetchUserDecks = await userRequests.getUserDecks(user.id);
            setDecks(fetchUserDecks);
        }
        getUserDecks().catch(console.error)
      return () => {
        // second
      }
    }, [])
    

  return (
    <View style={styles.mostPopularDecksContainer}>
        <View style={styles.popularDecksHeader}>
            <Text style={{ fontWeight: '600' }}>Most Popular Decks</Text>
        </View>
        <ScrollView persistentScrollbar={true} horizontal={true} style={{ width: '100%', paddingBottom: 10}}>
            {decks.map((deck) => 
                <View style={styles.popularDeckItem} key={deck}>
                    <Text style={{ color: 'white', fontWeight: '600' }} >{deck}</Text>
                </View>
            )}
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    mostPopularDecksContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        paddingBottom: 10,
        // backgroundColor: normalTheme.modalBackground,
        borderRadius: 10,
    },
    popularDecksHeader: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        padding: 10,
    },
    popularDeckItem: {
        backgroundColor: normalTheme.lightBlue, 
        padding: 2, 
        paddingHorizontal: 5, 
        marginHorizontal: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: 20
    }
});
