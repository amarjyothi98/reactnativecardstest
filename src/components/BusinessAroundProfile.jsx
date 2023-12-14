import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

export default function BusinessAroundProfile() {
  const url =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  const businessImages = [
    'https://cdn.dribbble.com/users/627451/screenshots/16183895/34_small_business_1_4x.png',
    'https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702425600&semt=ais',
    'data:image/jpeg;base64,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',
    'data:image/png;base64,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',
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
      <View style={styles.imageCountContainer}>
        <Image
          style={styles.imageCountContainerImage}
          source={{uri: businessImages[currentIndex]}}
        />
      </View>
      <View style={styles.ownerInfoContainer}>
        <Image
          source={{
            uri: url,
          }}
          style={styles.ownerImage}
        />
        <Text style={{fontWeight: '600', fontSize: 16}}>
          Shubham Chaturvedi
        </Text>
      </View>
      <View style={styles.topCategoryContainer}>
        <View style={styles.cateogoryMainContainer}>
          <View style={[styles.categoryContainer, styles.color1]}>
            {/* <FontAwesome name="group" size={24} color="black" /> */}
            {/* <Text>Medium</Text> */}
            <Entypo
              name="email"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 40}}
            />
          </View>
          <View style={[styles.categoryContainer, styles.color2]}>
            {/* <Text>Everyone</Text> */}
            <Entypo
              name="email"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 40}}
            />
          </View>
          <View style={[styles.categoryContainer, styles.color3]}>
            {/* <Text>Everyone</Text> */}
            <Entypo
              name="email"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 40}}
            />
          </View>
          <View style={[styles.categoryContainer, styles.color4]}>
            {/* <Text>Everyone</Text> */}
            <Entypo
              name="email"
              style={{color: 'hsl(352,100%,11.8%)', fontSize: 40}}
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
    justifyContent: 'center',
  },
  imageCountContainerImage: {
    height: 50,
    width: 40,
    borderRadius: 10,
  },
});
