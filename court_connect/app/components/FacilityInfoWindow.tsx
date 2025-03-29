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
    text: '#2D3748',
    textLight: '#718096',
    background: '#fafcf6',
    accent: '#FF9F1C'
}

const StyledText = ({ style, ...props }: StyledTextProps) => {
    return (
        <Text style={[{ 
            fontSize: 15,
            color: COLORS.text,
            lineHeight: 24  
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
                        <Feather name="phone" size={16} /> 
                        <Text style={styles.infoText}> {facility.phone}</Text>
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
        backgroundColor: COLORS.primary,
        flex: 1,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
    },
    handle: {
        backgroundColor: COLORS.background,
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        paddingTop: 8
    },
    innerContainer: {
        padding: 18,
    },
    headerContainer: {
        flexDirection: 'column',
        gap: 12,
        marginBottom: 24,
        paddingHorizontal: 8
    },
    header: {
        fontSize: 28,
        fontWeight: '600',
        color: '#fafcf6',
        textAlign: 'center',
        letterSpacing: 0.5
    },
    button: {
        padding: 14,
        backgroundColor: '#F4ED8B',
        borderRadius: 12,
        width: '45%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 4
    },
    infoContainer: {
        flexDirection: 'column',
        gap: 16,
        backgroundColor: '#fafcf6',
        padding: 20,
        borderRadius: 16,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.05)'
    },
    infoText: {
        marginLeft: 12,
    },
    cancelText: {
        fontSize: 24,
        color: 'red',
    }
})