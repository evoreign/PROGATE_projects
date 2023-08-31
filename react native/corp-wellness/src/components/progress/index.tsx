import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface CardData {
	progress: number;
	title: string;
	description: string;
}

const Progress: React.FC = () => {
  const cardData: CardData[] = [
	// how to implement to circular progress bar?!?!
    { progress: 12/20, title: 'Card 1', description: 'Description 1' },
	{ progress: 1/20, title: 'Card 2', description: 'Description 2' },
	{ progress: 15/20, title: 'Card 3', description: 'Description 3' },
	{ progress: 17/20, title: 'Card 4', description: 'Description 4' },	
  ];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={true}
    >
      {cardData.map((card, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
		  	<Title>{card.progress}</Title>
            <Title>{card.title}</Title>
            <Paragraph>{card.description}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    marginHorizontal: 10,
    elevation: 5,
    borderRadius: 10,
  },
  
});

export default Progress;
