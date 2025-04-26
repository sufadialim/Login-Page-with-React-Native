import React from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function FirstLogin() {
    const router = useRouter();  // Menggunakan useRouter() dari expo-router

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            
            <Image 
                source={require('./src/images/OIP.jpeg')} 
                style={styles.image}
            />

            <Text style={styles.text}> LOREM </Text>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => router.push('/login')}  // Navigasi ke login
            >
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    image:{
        width: 100,
        height: 100,
    },
    text:{
        fontSize: 30, 
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#2396F2",
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "25%",
        alignItems: "center",
        elevation: 30,
    },
    buttonText:{
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },

})