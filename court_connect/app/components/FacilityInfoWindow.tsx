import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Facility } from '../models/Facility';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

type Props = {
    facility: Facility;
    onClose: () => void;
}

export default function FacilityInfoWindow({ facility, onClose }: Props) {
    const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
    return (
            <BottomSheet handleIndicatorStyle={{width: 40, height: 3}} snapPoints={snapPoints} index={0} enablePanDownToClose={true} onClose={onClose}>
                <BottomSheetView style={styles.container}>
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
                </BottomSheetView>

            </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6DC7FF',
        flex: 1,
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
        color: '#F3E5C3',
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