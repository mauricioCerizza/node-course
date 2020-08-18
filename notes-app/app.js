import chalk from 'chalk'
import notes from './notes.js'
import yargs from 'yargs'

yargs.version('1.1.0')

// Add Command
yargs.command({
    command: 'add',
    describe: 'Agrega una nueva nota.',
    builder: {
        title: {
            describe: 'Título de la nota.',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Contenido de la nota.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Elimina una nota.',
    builder: {
        title: {
            describe: 'Título de la nota a eliminar.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

// Read Command
yargs.command({
    command: 'read',
    describe: 'Lee una nota.',
    builder: {
        title: {
            describe: 'Título de la nota a leer.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNote(argv.title)
    }
})

// List Command
yargs.command({
    command: 'list',
    describe: 'Muestra todas las notas.',
    handler: function() {
        notes.listNotes()
    }
})

yargs.parse()