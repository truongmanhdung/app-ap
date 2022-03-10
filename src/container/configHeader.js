import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Avatar from '../components/avatarComponent/Avatar';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
    marginLeft: -5,
  },
});
function ConfigHeader(props) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.image}>
        <Avatar  />
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
          activeOpacity={0.8}
          style={{marginRight: 20}}>
          <Ionicons name="ios-notifications-outline" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          activeOpacity={0.8}>
          <AntDesign name="search1" size={24} style={{marginRight: 20}} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

ConfigHeader.propTypes = {};

export default ConfigHeader;
