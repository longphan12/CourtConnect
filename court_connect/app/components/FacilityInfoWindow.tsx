import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Facility } from '../models/Facility';

type Props = {
  facility: Facility;
  onClose: () => void;
}

export default function FacilityInfoWindow({ facility, onClose }: Props) {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{facility.name}</Text>
            <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => console.log('Book now pressed')}>
                <Text>Book Now</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
        <Text style={styles.infoText}>{facility.address}</Text>
        <Text style={styles.infoText}>{facility.phone}</Text>
        <Text style={styles.infoText}>{facility.openHours}</Text>
        </View>


      <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
        <Text style={styles.cancelText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6DC7FF',
        position: 'absolute',
        bottom: 0,
        height: '40%',
        width: '100%',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        padding: 8,
        backgroundColor: '#F4ED8B',
        borderRadius: 8,
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 8,
    },
    infoText: {
        fontSize: 15
    },
    cancelButton: {
        top: 80,
        alignSelf: 'center',
    },
    cancelText: {
        fontSize: 24,
        color: 'red',
    }
})