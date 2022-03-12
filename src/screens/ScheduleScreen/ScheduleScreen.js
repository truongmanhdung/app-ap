import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-elements';
import Tabview from '../../components/TabView/Tabview';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
const newDate = new Date();
const fakeData = [
  {
    keyIndex: 'study',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 4,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 5,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 6,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 7,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
    ],
  },
  {
    keyIndex: 'action',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 4,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 5,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 6,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 7,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
    ],
  },
  {
    keyIndex: 'hoc',
    data: [
      {
        id: 1,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 2,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 3,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
      {
        id: 4,
        title:
          'Thông báo v/v đăng ký học lại ngành công nghệ thông tin tại block 2 kỳ Fall 2020',
        author: 'huongnt166',
        authorTitle: 'Tác giả',
        time: newDate.getDate() + ' @ ' + newDate.getTime(),
        timeTitle: 'Thời gian',
      },
    ],
  },
];
const colums = [
  {
    id: 0,
    title: 'Học Tập',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'study',
  },
  {
    id: 1,
    title: 'Hoạt động',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'actions',
  },
  {
    id: 2,
    title: 'Học phí',
    titleStyle: {
      fontSize: 12,
      color: 'red',
    },
    keyIndex: 'hoc',
  },
];
const styles = StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tab: {
    height: 10,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
  },
  title: {
    fontSize: 14,
    width: '60%',
  },
  text: {
    color: '#888',
    fontSize: 12,
  },
  icon: {
    marginLeft: 350,
    position: 'absolute',
  },
  View: {
    flexDirection: 'row',
  },
  iconHeader: {
    position: 'absolute',
    paddingTop: 60,
    paddingLeft: 320,
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 7,
  },
});
function ScheduleScreen() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [api, setApi] = useState('');
 
  useEffect(() => {
    const result = () => {
      fakeData.map(item => {
        if (api === item.keyIndex) {
          setData(item.data);
        }
      });
    };
    result();
  }, [api]);

  const logic = key => {
    setApi(key);
  };

  const navigate = () => {
    navigation.navigate('viewContent');
  };
  const renderData = () => {
    const Item = ({title}) => (
      <TouchableOpacity onPress={navigate} style={styles.item}>
        <View>
          <Text style={styles.title}>{title.title}</Text>
          <Text style={styles.text}>
            {title.authorTitle}: {title.author}{' '}
          </Text>
          <Text style={styles.text}>
            {title.timeTitle}: {title.time}{' '}
          </Text>
        </View>
      </TouchableOpacity>
    );
    const renderItem = ({item}) => {
      return (
        <View>
          <Item title={item} />
        </View>
      );
    };
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  };

  const handleGo = () => navigation.navigate('notification');

  return (
    <>
      <View style={styles.header}>
        <Text>dasd</Text>
        <View style={styles.iconHeader}>
          <Icon.Button
            style={styles.icon}
            onPress={handleGo}
            backgroundColor="none"
            name="bells"
            size={20}
            color="white"
          />
          <Icon.Button
            name="search1"
            backgroundColor="none"
            size={20}
            color="white"
          />
        </View>
      </View>
      <Tabview colums={colums} data={renderData} logic={logic} />
    </>
  );
}

ScheduleScreen.propTypes = {};

export default ScheduleScreen;
