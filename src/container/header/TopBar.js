import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import IconView from '../../common/IconView';
import {useNavigation, useRoute} from '@react-navigation/native';
import routers from './routerParams';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F95B00',
    paddingTop: 10,
    paddingBottom: 10
  },
  iconBack: {
    padding: 10,
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10
  },
});
function TopBar(props) {
  const navigation = useNavigation();
  const {headerTitle} = props;
  const activeRoute = useRoute();
 
  let headerName = headerTitle ? headerTitle : activeRoute.name;
  routers.forEach((route) => {
    if(route.name === headerName){
      headerName = route.title
    }
  })
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconBack}
        onPress={() => navigation.goBack()}>
        <IconView
          component="Feather"
          name="chevron-left"
          size={28}
          color="white"
        />
      </TouchableOpacity>
      {<Text style={styles.textHeader}>{headerName}</Text>}
    </View>
  );
}

TopBar.propTypes = {};

export default TopBar;