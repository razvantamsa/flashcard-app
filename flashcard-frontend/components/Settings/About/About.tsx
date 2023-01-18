import { Icon } from '@rneui/themed';
import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { normalTheme } from '../../theme';

export default function About() {
  return (
    <View style={styles.selectTheme}>
        <View style={styles.settingsPropertyHeader}>
            <Text style={{ fontWeight: '700'}}>About</Text>
        </View>
        <View style={styles.selectThemeHero}>
            <View style={styles.toggleCurrentTheme}>
                <Text style={{ fontSize: 12, color: 'grey' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec vulputate orci, non vulputate tellus. Sed aliquet at nisl vitae consectetur.
                    Proin non libero sollicitudin, sagittis neque nec, fermentum mi. 
                </Text>
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
        // borderBottomWidth: 1,
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
