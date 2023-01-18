import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { normalTheme } from '../theme';
import About from './About/About';
import SettingsLanguage from './Language/SettingsLanguage';
import SettingsTheme from './Theme/SettingsTheme';


export default function Settings() {

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('ro');

  return (
    <View style={styles.appContainer}>
        <View style={styles.settingsHeader}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Settings</Text>
        </View>
        <View style={styles.settingsHero}>
            <SettingsTheme theme={theme} setTheme={setTheme} />
            <SettingsLanguage language={language} setLanguage={setLanguage} />
            <About />
        </View>
        <View style={{ flex: 1 }}></View>
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

    settingsHeader: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: '#96b3e0'
    },
    settingsHero: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4,
        borderRadius: 10,
        backgroundColor: normalTheme.modalBackground
    },
    selectTheme: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        marginBottom: 5,
        // backgroundColor: '#5c6e8a'
    },
    selectLanguage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#6897e3'
    },
    aboutContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#96b3e0'
    },
    settingsPropertyHeader: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    selectThemeHero: {
        width: '100%',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: 'orange',
    },
    toggleCurrentTheme: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
