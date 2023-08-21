import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import CustomButton from '../components/customButton';

const EditNote = ({ note, editNote, setCurrentPage }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedDesc, setEditedDesc] = useState(note.desc);

  const saveChanges = () => {
    editNote(note.id, editedTitle, editedDesc);
    setCurrentPage('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Edit Note</Text>
      <TextInput
        value={editedTitle}
        onChangeText={setEditedTitle}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        value={editedDesc}
        onChangeText={setEditedDesc}
        placeholder="Description"
        multiline
        style={[styles.input, styles.multilineInput]}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="#fff"
          text="Save Changes"
          width="100%"
          onPress={saveChanges}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {   
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 20,
    },
});

export default EditNote;