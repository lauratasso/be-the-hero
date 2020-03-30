import { StyleSheet } from 'react-native';
import  Constants from 'expo-constants';


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    }, 

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    incident: {
        padding: 24,
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginBottom: 16,
        marginTop: 48,
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold',
    },

    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        fontSize: 15,
        color: '#737380',
    },

    contactBox: {
        padding: 24,
        backgroundColor: '#FFF',
        borderRadius: 15,
        marginBottom: 16,
    },

    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131a',
        lineHeight: 30,
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
    },

    actionButton: {
        backgroundColor: '#e02041',
        borderRadius: 15,
        height: 50,
        width: '48%',
        justifyContent:'center',
        alignItems: 'center'
    },

    actionButtonText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    }
});