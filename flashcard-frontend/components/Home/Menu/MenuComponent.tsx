import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MenuDecks from './MenuDecks';
import { DECKS_DISPLAYED } from '../../theme';
import { getDecksToDisplay } from './utils';
import MenuActions from './MenuActions';
import MenuNavigation from './MenuNavigation';
import { AppContext } from '../../../context/app.context';

export default function Menu({ navigation, setIsAddDeckModalVisible }: any) {
    const { appContext, setAppContext } = useContext(AppContext);

    const [pagination, setPagination] = useState(0);
    const [searchByName, setSearchByName] = useState('');

    function displayOnlyOnePage() {
        const startingPointSlice = pagination;
        const endingPointSlice = Math.min(pagination + DECKS_DISPLAYED, getDecksToDisplay(appContext.decks, searchByName).length);
        return getDecksToDisplay(appContext.decks, searchByName).slice(startingPointSlice, endingPointSlice);
    }

  return (
    <View style={[{ flex: 4, width: '80%' }]}>
        <View style={styles.menuControlContainer}>
            <MenuActions 
                setPagination={setPagination}
                searchByName={searchByName} 
                setSearchByName={setSearchByName} 
                navigation={navigation}
                setIsAddDeckModalVisible={setIsAddDeckModalVisible}
                />
            <MenuNavigation 
                pagination={pagination} 
                setPagination={setPagination} 
                decks={getDecksToDisplay(appContext.decks, searchByName)}
                />
        </View>
        <MenuDecks 
            decks={displayOnlyOnePage()} 
            navigation={navigation}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    menuControlContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})