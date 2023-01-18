import { Icon } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CountryFlag from 'react-native-country-flag';
import { normalTheme } from '../../theme';

export default function AccountInformation({ user }: any) {
  return (
    <View style={styles.accountInformationContainer}>
        <View style={styles.accountInformationSection}>
            <View style={styles.accountInfoIcon}>
                <Icon name='email' type='material' color={normalTheme.lightBlue} size={20}/>
            </View>
            <Text>{user.email}</Text>
        </View>
        <View style={styles.accountInformationSection}>
            <View style={styles.accountInfoIcon}>
                <Icon name='phone' type='material' color={normalTheme.lightBlue} size={20} />
            </View>
            <CountryFlag isoCode="ro" size={15} style={{ marginRight: 5, borderRadius: 5 }} />
            <Text>{user.phonenumber}</Text>
        </View>
        <View style={styles.accountInformationSection}>
            <View style={styles.accountInfoIcon}>
                <Icon name='book' type='font-awesome' color={normalTheme.lightBlue} size={20}/>
            </View>
            <Text>42 decks</Text>
        </View>
        <View style={styles.accountInformationSection}>
            <View style={styles.accountInfoIcon}>
                <Icon name='book' type='font-awesome' color={normalTheme.lightBlue} size={20}/>
            </View>
            <Text>1012 cards</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    accountInformationSection: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    accountInfoIcon: {
        margin: 5,
        marginRight: 30,
    },
    accountInformationContainer: {
        paddingVertical: 10,
        width: '90%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
