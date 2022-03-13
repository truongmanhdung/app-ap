import React from 'react';
import PropTypes from 'prop-types';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  ListItem,
  Avatar,
  Icon,
  Badge,
  ListItemProps,
  Button,
  Switch,
  colors,
} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    name: '* Gia hạn học phí',
    nameScreen: 'Fee',
  },
  {
    name: '* Đăng ký học lại',
    nameScreen: 'Subject',
  },
  {
    name: '* Đăng ký thi lại',
    nameScreen: 'Subject',
  },
  {
    name: '* Chuyển ngành',
    nameScreen: 'Subject',
  },
  {
    name: '* Đăng ký bảo lưu',
    nameScreen: 'Subject',
  },
];
const data2 = [
  {
    name: 'Khen thưởng / Kỉ luật',
    icon: 'grade',
    nameScreen: 'Home',
  },
  {
    name: 'SMS',
    icon: 'chat',
    nameScreen: 'Sms',
  },
];
function ScheduleScreen(props) {
  return <Text>ABC</Text>;
}

ScheduleScreen.propTypes = {};

export default ScheduleScreen;
