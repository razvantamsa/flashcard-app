import { Icon } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { normalTheme } from '../../theme';

const generateRandomNumber = (): number => {
    return Math.round(Math.random() * 100);
}

export default function ProfileHeader({ user }: any) {

  return (
    <View style={styles.headerContainer}>
        <View style={styles.headerCoverContainer}></View>
        <View style={styles.headerBelowCoverSection} >
            <View style={styles.profileImageWrapper}>
                <Image
                        style={styles.profileImage}
                        source={require('../../../profile-default.jpg')}
                    />
                <View style={styles.editProfilePictureIcon}>
                    <Icon reverse name='edit' type='material' color={normalTheme.warning} size={10} onPress={() => console.log('Edit Profile Picture')} />
                </View>
            </View>
            <View style={styles.headerUserInfoContainer}>
                <Text style={styles.textStyle}>{user.firstName} {user.lastName}</Text>
                <Text>{`@${user.firstName.toLowerCase()}${user.lastName.toLowerCase()}${generateRandomNumber()}`}</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
    },
    headerCoverContainer: {
        flex: 3, 
        width: '100%',
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: normalTheme.allow, 
    },
    headerBelowCoverSection: {
        flex: 2, 
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    profileImage: {
        // transform: [{translateY: 40}],
        // padding: 20,
        width: '100%',
        // height: 100,
        borderRadius: 100,
        // borderWidth: 5,
        // borderColor: 'white',
        // width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    headerUserInfoContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        // width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'grey'
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '700',
    },
    profileImageWrapper: {
        transform: [{translateY: -25}],
        // padding: 20,
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: 'white',
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        // backgroundColor: require('../../profile-default.jpg'),
    },
    editProfilePictureIcon: {
        // transform: [{translateY: 10}],
        position: 'absolute'
    },
});
