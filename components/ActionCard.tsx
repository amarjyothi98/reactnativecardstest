import React, {useState} from 'react';
import {
  Text,
  View,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

export default function ActionCard() {
  const blogCardImg =
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg';

  function OpenWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  const [loading, setLoading] = useState(true);
  const Refresh = () => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      {loading ? (
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What's new in js es 6</Text>
          </View>
          {blogCardImg ? (
            <Image
              source={{
                uri: blogCardImg,
              }}
              style={styles.cardImage}
            />
          ) : (
            <View style={styles.cardImgLoader}>
              <ActivityIndicator />
            </View>
          )}
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic est,
              reprehenderit possimus odit quaerat harum animi nobis reiciendis
              aperiam, soluta ipsum architecto, eum cumque atque.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.socialLinks}
              onPress={() => OpenWebsite('https://google.com')}>
              <Text>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialLinks}
              onPress={() => OpenWebsite('https://github.com/amarjyothi98')}>
              <Text>Follow Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      <TouchableOpacity onPress={Refresh} style={styles.refershButton}>
        <Text>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 14,
  },
  card: {
    width: 350,
    height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#F7D8BA',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  cardImgLoader: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 10,
    flexDirection: 'row',
    // gap: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  socialLinks: {
    fontSize: 14,
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  refershButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7D8BA',
    width: 100,
    alignSelf: 'center',
    padding: 8,
    borderRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  loaderContainer: {
    width: 350,
    height: 340,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
