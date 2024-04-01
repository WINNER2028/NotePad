import React, { useEffect, useState } from 'react'
import "./App.css";

import noteImage from './assets/note 2.png';
import deleteImage from "./assets/delete.png"

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    updateStorage();
  }, [notes]);

  const updateStorage = () => {
    localStorage.setItem('notes', JSON.stringify(notes));
  };

  const handleCreateNote = () => {
    setNotes([...notes, '']);
  };

  const handleNoteChange = (index, content) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = content;
    setNotes(updatedNotes);
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    console.log('Updated Notes:', updatedNotes);
  };

  return (
    <>
    <div className="w-full min-h-screen bg-gradient-to-br from-[#000906] to-[#0f0f01] text-white pt-4 pl-10">
      <h1 className='flex items-center justify-center text-5xl font-semibold'>
        <img src={noteImage} alt="note-icon" />
       My NotePad
      </h1>
      <button className="flex items-center bg-gradient-to-br from-[#f2eb64] to-[#c52289] text-black font-bold text-2xl outline-none border-none rounded-full py-4 px-6 my-8 mx-5 cursor-pointer" onClick={handleCreateNote}>
        Enter Notes
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-0">
        {notes.map((note, index) => (
          <div key={index} className="note">
            <textarea
              value={note}
              onChange={(e) => handleNoteChange(index, e.target.value)}
              className="w-2/3 max-w-md min-h-48 bg-gradient-to-br from-[#f4f3f3] to-[#97cde8] text-black text-xl p-5 m-5 outline-none rounded-md"
            />
            <img
              src={deleteImage}
              alt='delete-icon'
              onClick={() => handleDeleteNote(index)}
              className='cursor-pointer text-white w-9 h-9'
            />
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default App