import { View, Text, StyleSheet } from 'react-native';

export default function TabSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>HALAMAN SETTINGS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teks: {
    color: 'white',
    fontSize: 50,
  }
});
