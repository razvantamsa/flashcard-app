import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { AppContext, updateAppContextDecks } from '../../context/app.context';
import { generateDecks } from '../../mock-values';
import { decks } from '../../utils/mockDatabase';
import { deckRequests } from '../../utils/requests';
import DeckModal from '../Modal/DeckModal';
import CalendarComponent from '../Statistics/Calendar/CalendarComponent';
import Menu from './Menu/MenuComponent';

export default function HomeScreen({ navigation }: any) {
    const { appContext, setAppContext } = useContext(AppContext);
    const [ isAddDeckModalVisible, setIsAddDeckModalVisible ] = useState(false);
    
    useEffect(() => {
        // TODO: fetch real decks
        updateAppContextDecks(setAppContext, decks.filter((deck) => deck.userId === appContext.user.id));
    }, [appContext.user]);

  return (
    <View style={styles.appContainer}>
        <DeckModal 
            isModalVisible={isAddDeckModalVisible} 
            setIsModalVisible={setIsAddDeckModalVisible} 
        />
        <Menu
            navigation={navigation} 
            isAddDeckModalVisible={isAddDeckModalVisible} 
            setIsAddDeckModalVisible={setIsAddDeckModalVisible} 
        />
        <CalendarComponent styleProps={{flex: 3}} />
    </View>
  )
}

const styles = StyleSheet.create({
    appContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white'
    },
})

