import React, { useState } from 'react'
import Home from './src/screens/home'
import AddNote from './src/screens/addNote'
import EditNote from './src/screens/editNote'
import { SafeAreaView, StatusBar } from 'react-native'

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,

}) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} />
    case 'add':
    case 'edit':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />
      return <EditNote />
    case 'delete':
      return <DeleteNote />
    default:
      return <Home />
  }
}


const App = () => {

  const [currentPage, setCurrentPage] = useState('home')

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ])
  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };
  const editNote = (id, title, desc) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          id,
          title,
          desc,
        };
      }
      return note;
    });
    setNoteList(newNoteList);
  };
  const deleteNote = (id) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(newNoteList);
  };

  return (
    <SafeAreaView style={{flex:1, marginTop: StatusBar.currentHeight}}>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </SafeAreaView>
  )
}

export default App