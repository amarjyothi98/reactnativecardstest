import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function BusinessAroundProfile() {
  const url =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  const businessImages = [
    'https://cdn.dribbble.com/users/627451/screenshots/16183895/34_small_business_1_4x.png',
    'https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=ais',
    'https://cdn.dribbble.com/users/110372/screenshots/9173500/business_illustration_set_animation.png',
    'https://img.freepik.com/free-vector/hand-drawn-business-people-illustration_52683-66661.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? businessImages.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === businessImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToIndex = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: businessImages[currentIndex]}}
        style={styles.image}
      />
      <View style={styles.navigationArrors}>
        <TouchableOpacity onPress={goToPrevious}>
          <Entypo
            name="chevron-with-circle-left"
            style={{color: 'hsl(352,100%,11.8%)', fontSize: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNext}>
          <Entypo
            name="chevron-with-circle-right"
            style={{color: 'hsl(352,100%,11.8%)', fontSize: 30}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imageCountContainer}>
        {businessImages.map((data, slideIndex) => (
          <TouchableOpacity onPress={() => goToIndex(slideIndex)}>
            <Image
              key={slideIndex}
              style={[
                styles.imageCountContainerImage,
                slideIndex === currentIndex &&
                  styles.imageCountContainerHighlight,
              ]}
              source={{uri: data}}
            />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.line} />
      <View style={styles.ownerInfoContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: url,
            }}
            style={styles.ownerImage}
          />
          <View style={styles.ownerNameContainer}>
            <Text style={{fontWeight: '600', fontSize: 16}}>
              Shubham Chaturvedi
            </Text>
            <Text style={{fontWeight: '400', fontSize: 12, color: '#282C35'}}>
              Posted 4 days ago
            </Text>
          </View>
        </View>
        <View>
          <AntDesign
            name="checkcircleo"
            style={styles.verifiedIcon}
          />
        </View>
      </View>
      <View style={styles.topCategoryContainer}>
        <View style={styles.cateogoryMainContainer}>
          <View style={[styles.categoryContainer, styles.color1]}>
            {/* <FontAwesome name="group" size={24} color="black" /> */}
            {/* <Text>Medium</Text> */}
            <Entypo
              name="location"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 30}}
            />
          </View>
          <View style={[styles.categoryContainer, styles.color2]}>
            {/* <Text>Everyone</Text> */}
            <Entypo
              name="mail"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 30}}
            />
          </View>
          <View style={[styles.categoryContainer, styles.color3]}>
            {/* <Text>Everyone</Text> */}
            <Entypo
              name="phone"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 30}}
            />
          </View>
          <View style={[styles.categoryContainer, styles.color4]}>
            {/* <Text>Everyone</Text> */}
            <Entypo
              name="message"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 30}}
            />
          </View>
        </View>
        {/* <View style={styles.cateogoryMainContainer}>
          <View style={styles.categoryContainer}>
            <Text>Location</Text>
          </View>
          <View style={styles.categoryContainer}>
            <Text>Mobile</Text>
          </View>
        </View> */}
      </View>
      <Text style={styles.detailHeading}>Business Details</Text>
      <View style={styles.detailContainer}>
        <View style={styles.perDetail}>
          <Text style={{fontWeight: '600'}}>Business Name</Text>
          <Text>Lorem ipsum dolor sit, amet consectetur adipisicing </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.perDetail}>
          <Text style={{fontWeight: '600'}}>Brand Name</Text>
          <Text>Shadow Solutions</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.perDetail}>
          <Text style={{fontWeight: '600'}}>Description</Text>
          <Text>
            Innovative software solutions driving digital transformation and
            enhancing business efficiency.
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.perDetail}>
          <Text style={{fontWeight: '600'}}>Business Address</Text>
          <Text>
            35A, Devika Tower, Chander Nagar, Ghaziabad, Uttar Pradesh
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.perDetail}>
          <Text style={{fontWeight: '600'}}>More Detail</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ea!
          </Text>
          <View style={styles.line} />
        </View>
        <View style={styles.perDetail}>
          <Text style={{fontWeight: '600'}}>More Details</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, ea!
          </Text>
          <View style={styles.line} />
        </View>
      </View>
    </View>
  );
}

const heightFull = Dimensions.get('window').height;
const widthFull = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    height: heightFull,
    // marginHorizontal: 20,
    marginVertical: 10,
  },
  image: {
    height: 250,
    width: 'auto',
    marginHorizontal: 8,
    borderRadius: 10,
  },
  ownerInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginHorizontal: 10,
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  ownerImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  topCategoryContainer: {
    // backgroundColor: 'red',
    height: 90,
    // flex: 1,
    paddingVertical: 10,
  },
  cateogoryMainContainer: {
    flex: 1,
    flexDirection: 'row',
    // paddingVertical: 10,
    marginHorizontal: 8,
    gap: 8,
  },
  color1: {
    backgroundColor: '#caf1de',
  },
  color2: {
    backgroundColor: '#ffe7c7',
  },
  color3: {
    backgroundColor: '#fef8dd',
  },
  color4: {
    backgroundColor: '#e1f8dc',
  },
  categoryContainer: {
    backgroundColor: '#000',
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 10,
    height: 65,
    elevation: 2,
    shadowOffset: 10,
    shadowOpacity: 0.1,
  },
  detailContainer: {
    backgroundColor: '#FAF9F6',
    height: 400,
    marginHorizontal: 8,
    borderRadius: 10,
    padding: 10,
  },
  detailHeading: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  perDetail: {
    // flexDirection: 'row',
    // gap: 10,
    paddingTop: 5,
  },
  line: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.5,
    paddingVertical: 5,
  },
  imageCountContainer: {
    // backgroundColor: 'red',
    marginVertical: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  imageCountContainerHighlight: {
    borderWidth: 2,
    borderColor: 'hsl(352,100%,11.8%)',
  },
  navigationArrors: {
    flexDirection: 'row',
    gap: 290,
    position: 'absolute',
    transform: [{translateX: 20}, {translateY: 110}],
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  imageCountContainerImage: {
    height: 50,
    width: 40,
    borderRadius: 10,
  },
  ownerNameContainer: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  verifiedIcon: {
    color: 'green',
    fontSize: 30,
    paddingRight: 5,
  },
});
