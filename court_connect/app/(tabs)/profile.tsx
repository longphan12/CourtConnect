import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>Profile</Text>
            <View style={styles.profileImageContainer}>
                <Image style={styles.profileImage} source={require("@/assets/images/profilePhotoCopy.jpeg")} />
            </View>
            <Text style={styles.profileName}>Long Phan</Text>
            <Text style={styles.email}>longphan084@gmail.com</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fafcf6'
    },
    profileText: {
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    profileImageContainer: {
        borderRadius: 100,
        alignSelf: 'center',
        borderWidth: 3,
        width: 100,
        height: 100,
        borderColor: 'white',
        shadowColor: 'black',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)'
    },
    profileImage: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        borderRadius: 100
    },
    profileName: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
        color: '#2D3748',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    },
    email: {
        fontSize: 14,
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: 10,
        color: 'grey',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
        textShadowOffset: { width: 0, height: 2 },
        textShadowRadius: 4
    }
})