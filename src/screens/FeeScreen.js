import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-elements';
const data = [
  {
    name: 'Nguyễn Đức Hải',
    studentcode: 'PH13158',
    semester: '6',
    status: '(HDI) Học đi',
    total: 0,
    time: '2019-01-01 to 2021-01-01',
  },
];
function FeeScreen(props) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <>
          <Text style={styles.textTitle}>Thông tin sinh viên</Text>
        </>
        {data.map((item, i) => (
          <View style={styles.textBody}>
            <Text style={styles.textContent}>Họ và tên: {item.name}</Text>
            <Text style={styles.textContent}>
              Mã sinh viên: {item.studentcode}
            </Text>
            <Text style={styles.textContent}>Kỳ học: {item.semester}</Text>
            <Text style={styles.textContent}>Trạng thái: {item.status}</Text>
            <Text style={styles.textContent}>Tổng tiền: {item.total}</Text>
            <Text style={styles.textContent}>
              Thời gian gia hạn:{' '}
              <Text style={styles.textContent2}>{item.time}</Text>
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.container}>
        <>
          <Text style={styles.textTitle}>
            Lí do gia hạn <Text style={styles.Icon}>*</Text>
          </Text>
          <TextInput
            placeholder="Nhập lí do gia hạn học phí (Bắt buộc)"
            required={true}
            multiline={true}
            numberOfLines={10}
            style={{
              height: 150,
              textAlignVertical: 'top',
              borderTopWidth: 1,
              borderColor: 'rgba(158, 150, 150, .5)',
            }}
          />
        </>
      </View>
      <View style={styles.container}>
        <>
          <Text style={styles.textTitle}>Tệp đính kèm</Text>
        </>
      </View>
      <View style={styles.button}>
        <Button
          title="Gia hạn học phí"
          buttonStyle={{
            borderRadius: 50,
            borderColor: '#f38748',
            padding: 10,
            borderWidth: 2,
          }}
          type="outline"
          titleStyle={{color: '#f38748'}}
          containerStyle={{
            borderRadius: 24,
            borderColor: '#f38748',
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#DDDDDD',
  },
  container: {
    backgroundColor: '#ffffff',
    margin: 10,
    paddingTop: 5,
    paddingLeft: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,
    borderRadius: 8.5,
    elevation: 13,
    flex: 1,
  },
  textTitle: {
    fontWeight: 'bold',
    color: '#000000',

    paddingBottom: 10,
    paddingTop: 10,
  },
  textContent: {
    color: '#000',
    marginTop: 10,
  },
  textBody: {
    borderTopWidth: 1,
    borderColor: 'rgba(158, 150, 150, .5)',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textContent2: {
    color: '#F5B16D',
    fontWeight: 'bold',
  },
  Icon: {
    color: 'red',
  },
  button: {
    margin: 10,
  },
});

FeeScreen.propTypes = {};

export default FeeScreen;
