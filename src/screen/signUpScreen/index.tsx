import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import chatImage from '../../assets/chat.png';
import TextInputWithIcon from '../../components/textInput';
interface Props {}

const SignUpScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoArea}>
        <View style={styles.logImageContainer}>
          <Image source={chatImage} style={styles.logoImage} />
        </View>
      </View>
      <View style={styles.inputArea}>
        <View style={styles.logInTextContainer}>
          <Text style={styles.logInText}>Sign Up</Text>
        </View>
        <View style={styles.inputsContainer}>
        <TextInputWithIcon
            style={styles.TextInputWithIcon}
            iconName={'user'}
            placeholder={'Username'}
          />
          <TextInputWithIcon
            style={styles.TextInputWithIcon}
            iconName={'phone'}
            placeholder={'Phone Number'}
          />
          <TextInputWithIcon
            style={styles.TextInputWithIcon}
            iconName={'envelope'}
            placeholder={'Email'}
          />
          <TextInputWithIcon
            style={styles.TextInputWithIcon}
            iconName={'lock'}
            placeholder={'Password'}
          />
          <View style={styles.loginFooterContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.logInButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgetLink}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text style={styles.forgetLinkText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: 'rgb(93,149,255)',
  },
  TextInputWithIcon: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  logoArea: {
    flex: 1,
    backgroundColor: 'rgb(93,149,255)',
  },
  logImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 250,
  },
  inputArea: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderTopEndRadius: 35,
    borderTopLeftRadius: 35,
  },
  logInTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 30,
  },
  logInText: {
    color: 'rgb(93,149,255)',
    fontSize: 32,
    fontWeight: '900',
  },
  inputsContainer: {
    flex: 4,
  },
  usernameTextInput: {
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 20,
    borderColor: '#F5F3FF',
    backgroundColor: '#F5F3FF',
    color: '#BBBAC1',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
    elevation: 1,
  },
  passwordTextInput: {},
  loginFooterContainer: {
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#3F7EFF',
    marginHorizontal: 20,
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // shadowColor:'#E8E9EE'

    shadowColor: '#3F7EFF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
    elevation: 17,
  },
  logInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgetLink: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  forgetLinkText: {
    color: '#3F7EFF',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
