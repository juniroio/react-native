import { SafeAreaView, Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

//~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~
//         ✩ Feliz Natal Aluízio ✩
//~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~*~~o~~

export default function Index5() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.login}><Text style={styles.white}>Login</Text></View>
            <View style={styles.form}>
                <View style={styles.container2}>
                    <TextInput placeholder='digite seu email' style={styles.input}></TextInput>
                    <TextInput placeholder='digite sua senha' secureTextEntry={true} style={styles.input}></TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.white}>SIGN IN</Text>
                </TouchableOpacity>
                <Text style={styles.link}>Dont have account? Click here to sing up</Text>
                <Link href="/" style={{ color: 'blue'}}>
                    Clique para ir para primeira página
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },
    login: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#00F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        flex: 10,
        flexDirection: 'column',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    white: {
        color: '#FFF',
        fontSize: 20
    },
    input: {
        borderColor: '#EEE',
        borderBottomWidth: 3,
        width: '80%',
        fontSize: 20
    },
    container2: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#00F',
        paddingVertical: 10,
        width: '80%',
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
    },
    link: {
        marginTop: 15,
        color: '#00F',
    }
})