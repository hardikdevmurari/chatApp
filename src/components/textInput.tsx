import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
interface Props {}

const HomeScreen: React.FC<Props> = ({iconName, placeholder, style}) => {
  return (
    <View style={[styles.mainContainer, {...style}]}>
      <Icon name={iconName} size={20} color="#BBBAC1" />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor={'#BBBAC1'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#F5F3FF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.24,
    shadowRadius: 13.84,
    elevation: 1,
  },
  textInput: {
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 5,
    borderColor: '#F5F3FF',
    backgroundColor: '#F5F3FF',
    color: '#BBBAC1',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
