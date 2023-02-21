import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  StatusBar,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import chatImage from '../../assets/chat.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabView, SceneMap} from 'react-native-tab-view';

interface Props {}

const ChatScreen: React.FC<Props> = ({navigation, route}) => {
  console.log('---------------------', route.params);
  const item = route?.params;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftArea}>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.goBack();
            }}>
            <View style={styles.headerLeftAreaBackIcon}>
              <Icon name={'chevron-left'} size={20} color="white" />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.avatarContainer}>
            <Image source={item?.image} style={styles.avatarImage} />
          </View>
          <View>
            <Text style={styles.userNameText}>{item?.name}</Text>
          </View>
          <View />
        </View>
        <View style={styles.headerRightArea}>
          <View style={styles.headerSearchIconContainer}>
            <Icon name={'phone'} size={24} color="white" />
          </View>
          <View style={styles.headerMenuIconContainer}>
            <Icon name={'video-camera'} size={24} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.contentArea} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#3F7EFF',
  },
  headerContainer: {
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeftArea: {
    backgroundColor: '#3F7EFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightArea: {
    backgroundColor: '#3F7EFF',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 20,
  },
  headerIconContainer: {
    marginHorizontal: 10,
  },
  headerSearchIconContainer: {},
  headerMenuIconContainer: {
    marginHorizontal: 20,
  },
  headerIcon: {
    width: 95,
    height: 95,
  },
  headerText: {
    fontSize: 25,
    fontWeight: '300',
    color: 'white',
  },
  headerLeftAreaBackIcon: {
    padding: 10,
  },
  contentArea: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    paddingHorizontal: 10,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userNameText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ChatScreen;
