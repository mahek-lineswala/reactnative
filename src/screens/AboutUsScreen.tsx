import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

function AboutUsScreen() {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>About us</Text>
      <Text style={styles.body}>
        BookStoreApp is a small demo bookstore experience built with React Native
        and React Navigation. We care about clear navigation, readable screens, and
        a layout that works on different phone sizes.
      </Text>
      <Text style={styles.subheading}>What we do</Text>
      <Text style={styles.body}>
        Browse titles, discover reading lists, and learn how stack navigation moves
        you between pages with a history you can go back through.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 24,
    paddingBottom: 40,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111111',
    marginBottom: 16,
  },
  subheading: {
    fontSize: 18, 
    fontWeight: '600',
    color: '#111111',
    marginTop: 20,
    marginBottom: 8,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
});

export default AboutUsScreen;
