import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface CardData {
  progress: number;
  title: string;
  description: string;
}

const Progress: React.FC = () => {
  const cardData: CardData[] = [
    { progress: 1/20, title: 'Working Hours', description: 'Working hours exceeded by 3 hours' },
    { progress: 1/20, title: 'Your Efficiency', description: 'Excellent result' },
    { progress: 1/20, title: 'Card 3', description: 'Description 3' },
    { progress: 1/20, title: 'Card 4', description: 'Description 4' },
  ];

  // Define an array of colors for the cards
  const cardColors = ['#F66C62', '#FFD565', '#FFD565', '#FFD565'];

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {cardData.map((card, index) => (
          <Card key={index} style={[styles.card, { backgroundColor: cardColors[index] }]}>
            <Card.Content>
              <Title style={styles.card_title}>{card.progress}</Title>
              <Title style={styles.card_title}>{card.title}</Title>
              <Paragraph style={styles.card_description}>{card.description}</Paragraph>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    justifyContent: 'flex-start',
  },
  card: {
    width: 150,
    height: 220,
    marginHorizontal: 10,
    elevation: 5,
    borderRadius: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E7E6F0'
  },
  card_description: {
    paddingTop: 10,
    fontSize: 16,
    color: '#E7E6F0'
  },
});

export default Progress;