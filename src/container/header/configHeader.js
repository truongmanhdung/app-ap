import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../../components/avatarComponent/Avatar';
import {useSelector} from 'react-redux';
import IconView from '../../common/IconView';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: '#F95B00',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    // marginLeft: -5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textUser: {
    marginLeft: 5,
    color: 'white',
    fontWeight: '600',
  },
});
function ConfigHeader(props) {
  const navigation = useNavigation();

  const {users} = useSelector(state => state.auths);
  console.log(users);
  return (
    <View style={styles.header}>
      <View style={styles.image}>
        <Avatar width={40} height={40} uri={users.picture} />
        <Text style={styles.textUser}>Xin chào, {users.name}</Text>
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate('notification')}
          activeOpacity={0.8}
          style={{marginRight: 10}}>
          <IconView
            component="Ionicons"
            name="ios-notifications-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          activeOpacity={0.8}>
          <IconView
            component="AntDesign"
            name="search1"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

ConfigHeader.propTypes = {};

export default ConfigHeader;
