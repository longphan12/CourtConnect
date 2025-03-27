import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#92b8ff'
        }}>
            <Tabs.Screen name="index" options={{
                title: 'Map',
                tabBarIcon: ({ color }) => (
                    <Feather name="map" size={24} color={color} />
                )
            }} />

            <Tabs.Screen name="profile" options={{
                title: 'Profile', tabBarIcon: ({color}) => (
                    <Feather name="user" size={24} color={color} />
                )
            }} />
        </Tabs>
    )
}