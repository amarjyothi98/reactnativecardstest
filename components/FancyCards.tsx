import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Bathak</Text>
          <Text style={styles.cardLabel}>Bathak</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
            dolore provident officiis sunt officia alias suscipit autem
            laboriosam magnam dolores!
          </Text>
          <Text style={styles.cardFooter}>23 mins away.</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  cardElevated: {
    backgroundColor: '#000000',
    color: '#000000',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 12,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    color: 'lightgray',
    fontSize: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  cardFooter: {
    color: '#ffffff',
  },
});
