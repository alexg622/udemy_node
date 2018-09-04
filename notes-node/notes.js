

const fs = require('fs')

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString)
  } catch (e) {
    return []
  }
}

const saveNotes = notes => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

let addNote = (title, body) => {
  let notes = fetchNotes()
  let note = {
    title,
    body
  }
  var duplicateNotes = notes.filter(note => note.title === titles)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

let getAll = () => {
  return fetchNotes()
}

let getNote = title => {
  let notes = fetchNotes()
  let filteredNotes = notes.filter(note => note.title === title)
  return filteredNotes[0]
}

let removeNote = title => {
  let notes = fetchNotes()
  let filteredNotes = notes.filter(note => note.title !== title)
  saveNotes(filteredNotes)

  return notes.length = filteredNotes.length
}

let logNote = note => {
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Title: ${note.body}`);
}


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}