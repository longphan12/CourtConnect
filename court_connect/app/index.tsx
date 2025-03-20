import { Text, View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Map from "./components/Map";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MapScreen() {
  return (
    <View style={{flex: 1}}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search for a facility" 
        />
        <TouchableOpacity >
          <Feather name="search" size={18} color="#777" />
        </TouchableOpacity>
      </View>
      <Map />
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    top: 34,
    left: 16,
    right: 16,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 100,
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4
  },
  searchInput: {
    flex: 1,
    paddingRight: 10,
  }
})


