import React from 'react';
import { Image } from 'react-native';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} initialRegion={{
                latitude: 30.266666,
                longitude: -97.733330,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}> 
                <Marker coordinate={{latitude: 30.266666, longitude: -97.733330}}>
                    <Image source={require('../../assets/images/pickleballPin.png')} style={styles.marker}/>
                </Marker>
 
                <Marker coordinate={{latitude: 30.306666, longitude: -97.733330}}>
                    <Image source={require('../../assets/images/badmintonPin.png')} style={styles.marker}/>
                </Marker>
            </MapView>
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
