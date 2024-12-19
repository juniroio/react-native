import { SafeAreaView, Text, StyleSheet, View} from 'react-native';
import { Link } from 'expo-router';

export default function Index3() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <View style={[styles.cor1]}>
            <Link
                href="/index4"
                style={{ color: 'white', fontSize: 20 }}
            >
                Clique para ir para proxima página
            </Link>
        </View>
        <View style={[styles.cor2]}></View>
      </View>
      <View style={styles.container2}>
        <View style={[styles.cor3]}></View>
        <View style={[styles.cor4]}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',

  },
  container2: {
    flex: 1,
    flexDirection: 'row',

  },
  cor1: {
    flex: 1,
    backgroundColor: '#00F'
  },
  cor2: {
    flex: 1,
    backgroundColor: '#05F'
  },
  cor3: {
    flex: 1,
    backgroundColor: '#0AF'
  },
  cor4: {
    flex: 1,
    backgroundColor: '#0BF'
  },

})