import { Icon } from '@rneui/themed'
import CountryFlag from "react-native-country-flag";
import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { userRequests } from '../../utils/requests'
import { normalTheme } from '../theme'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import ProfileHero from './ProfileHero/ProfileHero';
import ProfileFooter from './ProfileFooter/ProfileFooter';

const generateRandomNumber = (): number => {
    return Math.round(Math.random() * 100);
}

export default function Profile() {

    const [user, setUser] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        accountCreatedDate: '',
        numberOfDecks: 0,
        reviewsPerDay: 0,
        profileImage: '',
        phonenumber: ''
    });

    const deckNames = ['CrpytoBani', 'Build-uri Lol', 'Sociologie', 'WoW', 'Versuri Ian', 'Okok', 'Okok']

    useEffect(() => {

        async function fetchUser() {
            const currentUser = await userRequests.getUser();
            setUser(currentUser);
        }

        fetchUser().catch(console.error);    
      return () => {
        // second
      }
    }, []);
    

  return (
    <View style={styles.appContainer}>
        <ProfileHeader user={user} />
        <ProfileHero user={user} />
        <ProfileFooter />
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
