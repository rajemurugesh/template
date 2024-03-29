import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(createTheme({
    spacing: 4,
    typography: {
        fontFamily: [
            'Roboto',
            'Raleway',
            'Open Sans',
        ].join(','),
        h1: {
            fontSize: '5rem',
            fontFamily: 'Raleway',
        },
        h2: {
            fontSize: '3.5rem',
            fontFamily: 'Open Sans',
            fontStyle: 'bold',
        },
        h3: {
            fontSize: '2.5rem',
            fontFamily: 'Roboto',
        },
    },
    palette: {
        background: {
            default: '#3A82D2',
        },
        primary: {
            main: '#2B37D4',
        },
        secondary: {
            main: '#E769A6',
        },
        error: {
            main: '#D72A2A',
        },
        warning: {
            main: '#FC7B09',
        },
        info: {
            main: '#6B7D6A',
        },
        success: {
            main: '#09FE00',
        },
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
        },
    },
}));

export default theme;