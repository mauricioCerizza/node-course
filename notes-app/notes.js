import fs from 'fs'
import chalk from 'chalk'

const listNotes = () => {
    console.log(chalk.bold('Your notes: ' ))
    loadNotes().forEach(note => console.log(note.title));
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicatedNote = notes.find(note => note.title === title)

    if (!duplicatedNote) {
        notes.push({
            title: title, 
            body: body
        })
    
        saveNotes(notes)
        console.log('New note added!')
    }
    else {
        console.log('Note title duplicated.')
    }    
}

const removeNote = title => {
    const notes = loadNotes()
    
    const notesToKeep = notes.filter(note => note.title !== title)
    
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note deleted!'))
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }   
}

const readNote = title => {
    const notes = loadNotes()
    
    const noteReaded = notes.find(note => note.title === title)
    
    if (noteReaded) {
        console.log(chalk.inverse(noteReaded.title))
        console.log(noteReaded.body)
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }   
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)        
    } catch (error) {
        return []
    }
}

const saveNotes = notes => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

export default { addNotes, listNotes, removeNote, readNote }