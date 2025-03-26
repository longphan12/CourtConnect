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
            <BottomSheet handleIndicatorStyle={{width: 40, height: 3}} 
            snapPoints={snapPoints} index={0} 
            enablePanDownToClose={true} 
            onClose={onClose}
            backgroundStyle={styles.container}
            handleStyle={styles.handle}
            >
                <BottomSheetView style={styles.innerContainer}>
                        <View style={styles.headerContainer}>
                            <Text style={styles.header}>{facility.name}</Text>
                            <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => console.log('Book now pressed')}>
                                <Text style={{textAlign: 'center'}}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>{facility.address}</Text>
                            <Text style={styles.infoText}>{facility.phone}</Text>
                            <Text style={styles.infoText}>{facility.openHours}</Text>
                        </View>
                </BottomSheetView>

            </BottomSheet>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#92b8ff',
        flex: 1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    handle: {
        backgroundColor: '#fafcf6',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25
    },
    innerContainer: {
        padding: 18,
    },
    headerContainer: {
        flexDirection: 'column',
        gap: 8,
        marginBottom: 18
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fafcf6',
        textAlign: 'center'
    },
    button: {
        padding: 8,
        backgroundColor: '#F4ED8B',
        borderRadius: 8,
        width: '40%',
        alignSelf: 'center'
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 8,
    },
    infoText: {
        fontSize: 15
    },

    cancelText: {
        fontSize: 24,
        color: 'red',
    }
})