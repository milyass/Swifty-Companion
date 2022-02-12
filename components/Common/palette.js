import { Appearance } from 'react-native'

const ColorScheme = Appearance.getColorScheme()

const Palettes = {
    'dark': {
        primary: "#0e93b9", 
        faded_primary: '#56369d',
        secondary: '#b80b9c',
        faded_secondary: '#b80b9c',
        background: '#000000',
        light:'#000000',
        dark:'#d0d0d0',
        project_color: {
            "in_progress":'#0f8c8c',
            "finished": "#16bdec",
            "searching_a_group": "#548dd1",
            "creating_group": "#e43c8c"
        },
        achievement_color: {
            "project": "#5a07ce",
            "scolarity": "#b12797",
            "pedagogy": '#0fa3b1',
            "social": "#7f6100"
        },
        input_background: 'rgba(255,255,255, 0.3)'
    },

    'light': {
        primary: "#98E2F7", 
        faded_primary: '#CCBFE9',
        secondary: '#f890e7',
        faded_secondary: '#f1c0e8',
        background: '#ebebeb',
        light: '#d0d0d0',
        dark: '#000000',
        project_color: {
            "in_progress":'#18d8d8',
            "finished": "#98E2F7",
            "searching_a_group": "#D2E1F3",
            "creating_group": "#F7C5DD"
        },
        achievement_color: {
            "project": "#D9D7F1",
            "scolarity": "#f1c0e8",
            "pedagogy": '#8eecf5',
            "social": "#FFC300"
        },
        input_background: 'rgba(0,0,0,0.3)'
    }
}


module.exports = Palettes[ColorScheme]