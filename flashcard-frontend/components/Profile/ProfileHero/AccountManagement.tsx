import { Icon } from '@rneui/themed';
import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { normalTheme } from '../../theme';

export default function AccountManagement() {
  return (
    <View style={styles.accoutManagementContainerWrapper}>
        <View style={styles.accoutManagementContainer}>
            <View style={styles.accountManagementProperty}>
                <Icon reverse name='sync' type='material' color={normalTheme.allow} size={15} onPress={() => console.log('Sync With DB')} />
                <Text style={{ color: 'grey', fontSize: 10 }}>Sync Local Decks</Text>
            </View>
            <View style={styles.verticalBreak}></View>
            <View style={styles.accountManagementProperty}>
                <Icon reverse name='google' type='font-awesome' color={normalTheme.allow
                } size={15} onPress={() => console.log('Connect with Google')} />
                <Text style={{ color: 'grey', fontSize: 10 }}>Connect with Google</Text>
            </View>
        </View>                    
    </View>
  )
}

const styles = StyleSheet.create({
    accoutManagementContainerWrapper: {
        flex: 1, 
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center', 
        // backgroundColor: 'orange',
    },
    accoutManagementContainer: {
        width: '100%',
        // paddingHorizontal: 10,
        // marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: '#ebe4e4'
    },
    verticalBreak: {
        height: '100%',
        width: 1,
        backgroundColor: 'black',
    },
    accountManagementProperty: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        width: '50%',
    },
})