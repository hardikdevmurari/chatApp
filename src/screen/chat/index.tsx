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
  TextInput,
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
      <View style={styles.contentArea}>
        <View style={styles.chatConversationContainer}>
          <Text>no message found</Text>
        </View>
        <View style={styles.sendMessageContainer}>
          <View style={styles.customInputBox}>
            <View style={{margin:10}}>
              <Icon name={'paperclip'} size={24} color="black" />
            </View>
            <TextInput
              style={{flex: 4,height:100}}
              placeholder="Write a message"
              placeholderTextColor={'black'}
            />
            <View style={{marginHorizontal:5}}>
              <Icon name={'microphone'} size={24} color="black" />
            </View>
            <View style={styles.sendIcon}>
              <Icon name={'paper-plane'} size={20} color="white" />
            </View>
          </View>
        </View>
      </View>
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
  chatConversationContainer: {
    flex: 9,
  },
  sendMessageContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 18,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20.0,
    elevation: 24,
  },
  customInputBox: {
    backgroundColor: '#E5EBFD',
    width: '90%',
    height: '75%',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sendIcon: {
    flex: 1,
    margin: 5,
    backgroundColor: '#3F7EFF',
    width: 40,
    height: 40,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;
