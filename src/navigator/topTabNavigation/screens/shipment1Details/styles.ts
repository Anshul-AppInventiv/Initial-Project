import {StyleSheet} from 'react-native';
import {vw, vh} from '../../../../utils/dimension';
import {Colors} from '../../../../utils/colors';

export const Styles = (theme: any) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
    },
    subContainer: {
      flex: 1,
      paddingHorizontal: vw(15),
      marginTop: vh(10),
    },

    accountText: {
      fontSize: 16,
      fontWeight: '400',
      color: 'grey',
    },
    loginText: {
      fontSize: 16,
      fontWeight: '600',
      color: Colors.blue,
    },
    footer: {
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: vh(14),
    },
    disabledButton: {
      width: '85%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius:10,
      paddingVertical: vh(10),
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.8,
      shadowRadius: 3,
      elevation: 5,
    },
    disabledButtonText: {
      color: '#888888', // Grey text for disabled button
      fontSize: 16,
      fontWeight: 'bold',
    },
    submitButton: {
      backgroundColor: Colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '85%',
      paddingVertical: vh(10),
      borderRadius: 10,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: vw(20),
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: vh(20),
    },
    option: {
      padding: vw(15),
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    optionText: {
      fontSize: 16,
      color: '#333',
    },
    closeButton: {
      marginTop: vh(20),
      padding: vw(10),
      backgroundColor: Colors.primary,
      borderRadius: 5,
    },
    closeButtonText: {
      color: '#fff',
      fontSize: 16,
      textAlign: 'center',
    },
  });
