import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user"); // Default: User

    const handleLogin = () => {
        if (email && password) {
            alert(`Login sebagai: ${role}`);
            router.replace("/"); // Arahkan ke halaman utama
        } else {
            alert("Mohon isi email dan password");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>You are ready to go</Text>
            <View style={styles.loginBox}>
                <Text style={styles.title}>Sign in</Text>
                {/* Input Email */}
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {/* Input Password */}
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                {/* Pilihan Role */}
                <View style={styles.radioGroup}>
                    <Text style={styles.radioInfo}>Login As: </Text>
                    <TouchableOpacity
                        style={[styles.radioButton, role === "admin" && styles.radioButtonSelected]}
                        onPress={() => setRole("admin")}
                    >
                        <Text style={[styles.radioText, role === "admin" && styles.radioTextSelected]}>Administrator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.radioButton, role === "user" && styles.radioButtonSelected]}
                        onPress={() => setRole("user")}
                    >
                        <Text style={[styles.radioText, role === "user" && styles.radioTextSelected]}>User</Text>
                    </TouchableOpacity>
                </View>
                {/* Tombol Login */}
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Sign in</Text>
                </TouchableOpacity>
            </View>
                {/* Navigasi ke Halaman Register */}
                <TouchableOpacity onPress={() => router.push("/register")}>
                <Text style={styles.registerText}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4A90E2", 
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    loginBox: {
        backgroundColor: "#fff",
        width: "90%",
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 6,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "#ddd",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
    },
    radioInfo: {
        fontSize: 16,
        padding: 10,
    },
    radioGroup: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 15,
    },
    radioButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#2396F2",
        borderRadius: 10,
        marginHorizontal: 5,
    },
    radioButtonSelected: {
        backgroundColor: "#2396F2",
    },
    radioText: {
        fontSize: 16,
        color: "#2396F2",
    },
    radioTextSelected: {
        color: "#fff",
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#4A90E2", 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: "100%",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    registerText: {
        marginTop: 15,
        color: "#fff",
        fontSize: 16,
    },
});