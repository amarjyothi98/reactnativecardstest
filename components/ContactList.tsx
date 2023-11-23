import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ContactList() {
  const data = [
    {
      uid: 1,
      name: 'John Doe',
      status: 'Active',
      imgUrl:
        'https://imageio.forbes.com/specials-images/imageserve/637c11dad9b00787c3ea598c/Pagani-Automobili-is-launching-its-third-generation-864-hp-supercar--the-Utopia-/960x0.jpg?format=jpg&width=960',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      status: 'Inactive',
      imgUrl:
        'https://cdn.motor1.com/images/mgl/WmAmL/s1/4x3/pagani-zonda-revolucion-getting-road-conversion.webp',
    },
    {
      uid: 3,
      name: 'Bob Johnson',
      status: 'Active',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg',
    },
    {
      uid: 4,
      name: 'Alice Williams',
      status: 'Active',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/Pagani%2C_GIMS_2019%2C_Le_Grand-Saconnex_%28GIMS0023%29.jpg',
    },
    {
      uid: 5,
      name: 'Sam Brown',
      status: 'Inactive',
      imgUrl:
        'https://imageio.forbes.com/specials-images/imageserve/637c11dad9b00787c3ea598c/Pagani-Automobili-is-launching-its-third-generation-864-hp-supercar--the-Utopia-/960x0.jpg?format=jpg&width=960',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {data.map(({uid, name, status, imgUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imgUrl,
              }}
              style={styles.imageArr}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text
                style={
                  status === 'Active' ? styles.userStatus : styles.userStatusRed
                }>
                {status}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginVertical: 20,
  },
  container: {
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 2,

    backgroundColor: '#f3c7be',
    padding: 5,
    borderRadius: 10,
  },
  imageArr: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  userName: {
    // color: 'white',
  },
  userStatus: {
    color: 'green',
  },
  userStatusRed: {
    color: 'red',
  },
});
