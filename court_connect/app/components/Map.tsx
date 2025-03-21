import React, { useState } from 'react';
// import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import PickleballPin from './PickleballPin';
import BadmintonPin from './BadmintonPin';
import { Facility } from '../models/Facility'
import { sampleFacilities } from '../models/Facility'
import FacilityInfoWindow from './FacilityInfoWindow';
export default function Map() {
    const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 30.26725509491616,
                longitude: -97.74873768893336,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}> 
            {sampleFacilities.map((facility) => (
                <Marker 
                    key={facility.id}
                    coordinate={facility.coordinate}
                    onPress={() => setSelectedFacility(facility)}>
                    {facility.sportType === 'pickleball' ? <PickleballPin /> : <BadmintonPin />}
                </Marker>
                ))}
            </MapView>
            {selectedFacility && (
                <FacilityInfoWindow
                    facility={selectedFacility}
                    onClose={() => setSelectedFacility(null)}
                />
            )}
        </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    marker: {
        width: 33,
        height: 40
    }
})
