import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import googleIcon from '../../assets/google-plus.png';
import auth from '@react-native-firebase/auth';
import {Pagination} from 'react-native-snap-carousel';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/auth/authSlide';
GoogleSignin.configure({
  webClientId : '947392457157-jv1ha5epai42q0p2gp51c310gan6ms0f.apps.googleusercontent.com'
});
const WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = WIDTH * 0.88;

const carouselItems = [
  {
    imgUrl:
      'https://reviewedu.net/wp-content/uploads/2021/09/Cao-dang-fpt.jpeg',
  },
  {
    imgUrl:
      'https://vtv1.mediacdn.vn/thumb_w/650/2020/8/20/photo1534139475155-15341394751561891087312-1597925109215457201345.jpg',
  },
  {
    imgUrl:
      'http://icdn.dantri.com.vn/zoom/1200_630/2020/08/28/tin-nhap-hoc-docx-1598604173087.png',
  },
];

const FirstLoginScreen = ({navigation}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const dispatch =  useDispatch();

  const {users} = useSelector((state) => state.auths);

  if(users.name){
    navigation.navigate("Home")
  }

  const carouselCardItem = ({item, index}) => {
    return (
      <View style={styles.cardCarousel} key={index}>
        <Image style={styles.Image} source={{uri: item.imgUrl}} />
      </View>
    );
  };

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    console.log('token', idToken);
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    const user_login = auth().signInWithCredential(googleCredential);
    user_login.then((user) => {
      if(user){
        // console.log(user.additionalUserInfo.profile);
        dispatch(login(user.additionalUserInfo.profile))
        navigation.navigate("Home")
      }
    }).catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
      <View style={styles.slider_container}>
        <Carousel
          data={carouselItems}
          renderItem={carouselCardItem}
          sliderWidth={ITEM_WIDTH}
          itemWidth={ITEM_WIDTH}
          useScrollView={true}
          onSnapToItem={index => setActiveSlide(index)}
        />
      </View>
      </SafeAreaView>
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 20,
          height: 20,
          borderRadius: 50,
          marginHorizontal: 8,
          backgroundColor: '#000',
          borderColor: 'red',
          borderWidth: 1,
        }}
        inactiveDotColor="red"
        dotColor="red"
        animatedDuration={100}
        inactiveDotScale={1}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button_first}>
          <Text style={styles.buttonText}>Chọn cơ sở đào tạo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button_second}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }>
          <Image style={styles.googleIcon} source={googleIcon} />
          <Text style={styles.buttonText}>Đăng nhập bằng tài khoản google</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 35,
          width: '80%',
        }}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View>
          <Text
            style={{
              width: 50,
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '500',
            }}>
            Hoặc
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button_bottom}>
          <Text style={styles.buttonText}>
            Đăng nhập bằng tài khoản phụ huynh
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.left_bottom}>
          <Text style={styles.version}>Phiên bản 1.0</Text>
          <Text style={styles.version}>Bản quyền FPT</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.right_bottom}>
            <Text style={{color: 'rgb(64, 169, 255)'}}>Giúp đỡ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  slider_container: {
    height: 200,
    width: ITEM_WIDTH,
    marginBottom: 30,
    overflow: 'hidden',
  },
  cardCarousel: {
    width: ITEM_WIDTH,
  },
  Image: {
    height: 200,
    borderRadius: 8,
  },
  googleIcon: {
    marginRight: 10,
  },
  buttonContainer: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button_second: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(249, 92, 4)',
    borderWidth: 2,
  },
  button_first: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#333',
    borderWidth: 2,
  },
  button_bottom: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    borderRadius: 40,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#333',
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '300',
    color: '#333',
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 130,
  },
  right_bottom: {
    marginLeft: WIDTH / 2,
  },
});

export default FirstLoginScreen;
