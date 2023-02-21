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
} from 'react-native';
import TextInputWithIcon from '../../components/textInput';
import chatImage from '../../assets/chat.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabView, SceneMap} from 'react-native-tab-view';

import a1 from '../../assets/1.jpg';
import a2 from '../../assets/2.jpg';
import a3 from '../../assets/3.jpg';
import a4 from '../../assets/4.jpg';
import a5 from '../../assets/5.jpg';

interface Props {}

const testArray = [
  {
    id: 1,
    name: 'Jacob Smith',
    lastMessage: 'hi bro',
    time: '02:22',
    unreadCount: 5,
    image: a1,
  },
  {
    id: 2,
    name: 'Sandara : )',
    lastMessage: 'hello numuste 🙏',
    time: '12:20',
    unreadCount: 3,
    image: a2,
  },
  {
    id: 3,
    name: 'Michel Wistron',
    lastMessage: 'that very funny bro😂😂',
    time: '12:22',
    unreadCount: 0,
    image: a3,
  },
  {
    id: 4,
    name: 'Sister',
    lastMessage: '😆😆😆',
    time: '02:02',
    unreadCount: 1,
    image: a4,
  },
  {
    id: 5,
    name: 'James D.',
    lastMessage: 'heyyyy  😛😛',
    time: '01:15',
    unreadCount: 0,
    image: a5,
  },
  {
    id: 6,
    name: 'Victor',
    lastMessage: 'ok every thing is going good',
    time: '11:22',
    unreadCount: 5,
    image: a1,
  },
  {
    id: 8,
    name: 'Jib Job JD',
    lastMessage: 'by',
    time: '08:12',
    unreadCount: 0,
    image: a3,
  },
  {
    id: 9,
    name: 'Daku Magal Sing',
    lastMessage: 'see you later 🙂',
    time: '10:00',
    unreadCount: 4,
    image: a4,
  },
  {
    id: 10,
    name: 'ChulBul Bul',
    lastMessage: 'ok let meet tommrow',
    time: '02:23',
    unreadCount: 1,
    image: a5,
  },
];

const Item = ({item}) => (
  <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <View style={styles.itemContainer}>
      <View style={styles.avatarContainer}>
        <Image source={item.image} style={styles.avatarImage} />
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.metaLeftSide}>
          <Text style={styles.metaLeftNameText}>{item?.name}</Text>
          <Text style={styles.metaLeftLastMessageText}>
            {item?.lastMessage}
          </Text>
        </View>
        <View style={styles.metaRightSide}>
          <Text style={styles.metaRightTimeText}>{item?.time}</Text>
          <View style={styles.metaUnreadCountContainer}>
            {/* under cound goes here */}
            {/* <Text style={styles.metaUnreadCountText}>{item?.unreadCount}</Text> */}
            {item?.unreadCount !== 0 && (
              <View
                style={[styles.countContainer, {backgroundColor: '#3F7EFF'}]}>
                <Text style={[styles.countText, {color: 'white'}]}>
                  {item?.unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
    <View
      style={{
        backgroundColor: '#f2f2f2',
        width: '85%',
        height: 1,
        borderRadius: 50,
      }}
    />
  </View>
);

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white', marginTop: 10}}>
    <FlatList
      data={testArray}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white', marginTop: 10}}>
    <FlatList
      data={testArray.filter(item => item.unreadCount === 0)}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  </View>
);

const thirdRoute = () => (
  <View style={{flex: 1, backgroundColor: 'white', marginTop: 10}}>
    <FlatList
      data={testArray.filter(item => item.unreadCount !== 0)}
      renderItem={({item}) => <Item item={item} />}
      keyExtractor={item => item.id}
    />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: thirdRoute,
});

const HomeScreen: React.FC<Props> = ({}) => {
  const layout = useWindowDimensions();
  const unreadCounts = testArray.filter(item => item.unreadCount !== 0);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'All', count: unreadCounts.length},
    {key: 'second', title: 'Read', count: 0},
    {key: 'third', title: 'Unread', count: unreadCounts.length},
  ]);

  const _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={[
                styles.tabItem,
                // eslint-disable-next-line react-native/no-inline-styles
                index === i && {backgroundColor: '#3F7EFF'},
                {
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}
              onPress={() => setIndex(i)}>
              <Animated.Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  opacity,
                  color: index === i ? 'white' : 'black',
                  fontWeight: 'bold',
                }}>
                {route.title}
              </Animated.Text>
              {route.count !== 0 && (
                <View
                  style={[
                    styles.countContainer,
                    index !== i && {backgroundColor: '#3F7EFF'},
                  ]}>
                  <Text
                    style={[styles.countText, index !== i && {color: 'white'}]}>
                    {route.count}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftArea}>
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerText}>Chats</Text>
          </View>
          <View style={styles.headerIconContainer}>
            <Image source={chatImage} style={styles.headerIcon} />
          </View>
        </View>
        <View style={styles.headerRightArea}>
          <View style={styles.headerSearchIconContainer}>
            <Icon name={'search'} size={24} color="white" />
          </View>
          <View style={styles.headerMenuIconContainer}>
            <Icon name={'align-justify'} size={24} color="white" />
          </View>
        </View>
      </View>
      <View style={styles.contentArea}>
        <View style={styles.tabContainer}>
          <TabView
            navigationState={{index, routes}}
            renderScene={renderScene}
            renderTabBar={_renderTabBar}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
        {/* <View style={styles.chatListContainer}>
          <Text>list of chate</Text>
        </View> */}
      </View>
      <View style={styles.newChatContainer}>
        <TouchableOpacity style={styles.newChatButton}>
          <Text style={styles.newChatPlushText}>+</Text>
          <Text style={styles.newChatText}>New Chat</Text>
        </TouchableOpacity>
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
  contentArea: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  tabContainer: {
    flex: 1,
    paddingTop: 10,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#DEE8FE',
    borderRadius: 25,
    marginHorizontal: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 25,
  },
  countContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  countText: {
    color: '#3F7EFF',
  },
  itemContainer: {
    flexDirection: 'row',
    // backgroundColor: 'gray',
    // marginBottom: 10,
    // borderBottomWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
    // borderColor: 'gray',
    // paddingHorizontal:10,
    // paddingVertical:20
  },
  avatarContainer: {
    paddingHorizontal: 10,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  metaLeftSide: {},
  metaRightSide: {},
  metaUnreadCountContainer: {},
  metaLeftNameText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  metaLeftLastMessageText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  metaRightTimeText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
  },
  metaUnreadCountText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: '500',
  },
  newChatContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 50,
    bottom: -20,
    zIndex: 100,
    // bottom:50
  },
  newChatButton: {
    backgroundColor: '#3F7EFF',
    width: 130,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    shadowColor: "#3F7EFF",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity:  0.22,
    shadowRadius: 10.24,
    elevation: 13
  },
  newChatPlushText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginRight: 5,
  },
  newChatText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // chatListContainer: {},
});

export default HomeScreen;
