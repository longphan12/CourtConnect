import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextProps, TextStyle } from 'react-native';
import { Facility } from '../models/Facility';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Feather } from "@expo/vector-icons";

type Props = {
    facility: Facility;
    onClose: () => void;
}

type StyledTextProps = {
    style?: TextStyle;
} & TextProps;

const COLORS = {
    primary: '#92b8ff',
    secondary: '#F4ED8B',
    text: '#333',
    textLight: '#666',
    background: '#fafcf6'
}

const StyledText = ({ style, ...props }: StyledTextProps) => {
    return (
        <Text style={[{ 
            fontSize: 15,
            color: COLORS.text,
            lineHeight: 22  // Better readability
        }, style]} {...props} />
    )
}

export default function FacilityInfoWindow({ facility, onClose }: Props) {
    const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);
    const [pressed, setPressed] = useState(false);
    return (
        <BottomSheet handleIndicatorStyle={{ width: 40, height: 3 }}
            snapPoints={snapPoints} index={0}
            enablePanDownToClose={true}
            onClose={onClose}
            backgroundStyle={styles.container}
            handleStyle={styles.handle}
        >
            <BottomSheetView style={styles.innerContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{facility.name}</Text>
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        onPressIn={() => setPressed(true)}
                        onPressOut={() => setPressed(false)}
                        style={[styles.button, { transform: [{ scale: pressed ? 0.98 : 1 }] }]}
                    >
                        <Text style={{textAlign: 'center', fontWeight: '600'}}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoContainer}>
                    <StyledText>
                        <Feather name="phone" size={16} color="#666"/> 
                        <Text> {facility.phone}</Text>
                    </StyledText>
                    <StyledText><Feather name="map-pin" size={16}/> {facility.address}</StyledText>
                    <StyledText><Feather name="clock" size={16}/> {facility.openHours}</StyledText>

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
        borderTopLeftRadius: 25,
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
        padding: 12,
        backgroundColor: '#F4ED8B',
        borderRadius: 8,
        width: '40%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 8,
        backgroundColor: '#fafcf6',
        padding: 16,
        borderRadius: 12,
        marginTop: 8
    },
    infoText: {
        fontSize: 15
    },

    cancelText: {
        fontSize: 24,
        color: 'red',
    }
})