import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { normalTheme } from '../../theme';

export default function SettingsTheme({ theme, setTheme }: any) {
  return (
    <View style={styles.selectTheme}>
        <View style={styles.settingsPropertyHeader}>
            <Text style={{ fontWeight: '700'}}>Select Theme</Text>
        </View>
        <View style={styles.selectThemeHero}>
            <View style={styles.toggleCurrentTheme}>
                <Text>Current Theme</Text>
                <Icon 
                    name={theme === 'light' ? 'sun' : 'moon'} 
                    type='feather' 
                    color='black'
                    size={20}
                    onPress={() => {
                        if(theme === 'light') {
                            setTheme('dark');
                            return;
                        }
                        setTheme('light');
                    }}
                />
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