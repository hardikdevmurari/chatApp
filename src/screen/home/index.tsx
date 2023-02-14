import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInputWithIcon from '../../components/textInput';
interface Props {}

const HomeScreen: React.FC<Props> = ({}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <TextInputWithIcon />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
