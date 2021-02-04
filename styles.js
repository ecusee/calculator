import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    output: {
        display: "flex",
        height: "35%"
    },
    buttons: {
        display: "flex",
        height: "65%",
        justifyContent: 'space-between'
    },
    darkMode: {
        margin: 15,
        alignSelf: 'flex-end'
    },
    equalAndLast: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    resultContainer: {
        height: "80%",
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 7
    },
    result: {
        display: 'flex',
        alignSelf: 'flex-end',
    },
    resultText: {
        fontSize: 70,
        color: "#0087F3"
    },
    equalText: {
        fontSize: 20,
        paddingLeft: 10
    },
    lastOneText: {
        fontSize: 20,
        color: 'gray'
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    button: {
        width: 77,
        height: 77,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowRadius: 10,
        shadowOpacity: 0.25,
        shadowColor: '#0087F3'
    },
    buttonText: {
        fontSize: 30,
        color: '#0087F3'
    },
    buttonNumber: {
        fontSize: 30,
        color: 'black'
    }
})

export default styles;