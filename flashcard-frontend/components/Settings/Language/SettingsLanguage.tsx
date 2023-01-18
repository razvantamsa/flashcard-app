import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { normalTheme } from '../../theme';

export default function SettingsLanguage({ language, setLanguage }: any) {
  return (
    <View style={styles.selectTheme}>
        <View style={styles.settingsPropertyHeader}>
            <Text style={{ fontWeight: '700'}}>Select Language</Text>
        </View>
        <View style={styles.selectThemeHero}>
            <View style={styles.toggleCurrentTheme}>
                <Text>Current Language</Text>
                <TouchableWithoutFeedback
                    onPress={() => {
                        if(language === 'ro') {
                            setLanguage('gb');
                            return;
                        }
                        setLanguage('ro');
                    }}
                    >
                    <View>
                        <CountryFlag
                            isoCode={language} 
                            size={20} 
                            style={{ borderRadius: 5 }} 
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    selectTheme: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        marginBottom: 5,
    },
    selectLanguage: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#6897e3'
    },
    settingsPropertyHeader: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    selectThemeHero: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    toggleCurrentTheme: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
});
