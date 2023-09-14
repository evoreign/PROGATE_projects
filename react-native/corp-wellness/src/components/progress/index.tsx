import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useModal } from 'react-native-modalfy'
interface CardData {
  title: string;
  description: string;
}

const Progress: React.FC = () => {
  const cardData: CardData[] = [
    { title: 'Working Hours', description: 'Working hours exceeded by 3 hours' },
    { title: 'Your Efficiency', description: 'Excellent result' },
    { title: 'Card 3', description: 'Description 3' },
    { title: 'Card 4', description: 'Description 4' },
  ];

  // Define an array of colors for the cards
  const cardColors = ['#F66C62', '#FFD565', '#FFD565', '#FFD565'];
  const  { openModal } = useModal()
  const SendMessage=()=> openModal('MessageSentModal')
  return (
    <View style={styles.container}>
      <FlatList
        data={cardData}
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Card key={index} style={[styles.card, { backgroundColor: cardColors[index] }]} onPress={SendMessage}>
            <Card.Content>
              <Title style={styles.card_title}>{item.title}</Title>
              <Paragraph style={styles.card_description}>{item.description}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
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
  },
  card_description: {
    paddingTop: 10,
    fontSize: 16,
  },
});

export default Progress;