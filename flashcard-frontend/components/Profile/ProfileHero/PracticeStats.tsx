import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default function PracticeStats() {
  return (
    <View style={styles.practiceStatsContainer}>
        <Text style={{ fontWeight: '700', textAlign: 'center' }}>Average cards practiced per day: X</Text>
        <Text style={{ fontWeight: '700', textAlign: 'center' }}>Average success rate: X%</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    practiceStatsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    }    
});