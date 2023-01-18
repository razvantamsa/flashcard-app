import { Icon } from '@rneui/themed';
import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import { normalTheme } from '../../theme';

export default function ProfileFooter() {
  return (
    <View style={styles.footerContainer}>
        <View style={styles.logoutContainer}>
            <Icon name='logout' type='material' color='white' size={20} onPress={() => console.log('Logging Out')}/>
            <Text style={{ margin: 10, color: 'white', fontSize: 14, fontWeight: '600' }}>Log Out</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    footerContainer: {
        borderTopWidth: 1,
        borderTopColor: normalTheme.modalBackground,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        // backgroundColor: normalTheme.modalBackground
    },

    logoutContainer: {
        // width: '100%',
        borderRadius: 10,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // flex: 1, 
        backgroundColor: normalTheme.danger
    },
});
