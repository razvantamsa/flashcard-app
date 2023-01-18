import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import AccountInformation from './AccountInformation';
import AccountManagement from './AccountManagement';
import PopularDecks from './PopularDecks';
import PracticeStats from './PracticeStats';

export default function ProfileHero({ user }: any) {
  return (
    <View style={styles.heroContainer}>
        <AccountInformation user={user} />
        <AccountManagement />
        <PracticeStats />
        <PopularDecks user={user} />
    </View>
  )
}

const styles = StyleSheet.create({
    heroContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 5,
    },
})