import _ from 'lodash';
import {createTheme} from '@mui/material/styles';
import {softShadows, strongShadows} from './shadows';
import { blueGrey, common} from '@mui/material/colors'

export const darkTheme =
        {
            palette: {
                type: 'dark',
                action: {
                    active: 'rgba(255, 255, 255, 0.54)',
                    hover: 'rgba(255, 255, 255, 0.04)',
                    selected: 'rgba(255, 255, 255, 0.08)',
                    disabled: 'rgba(255, 255, 255, 0.26)',
                    disabledBackground: 'rgba(255, 255, 255, 0.12)',
                    focus: 'rgba(255, 255, 255, 0.12)'
                },
                background: {
                    default: '#282C34',
                    dark: '#282C34',
                    paper: '#282C34'
                },
                primary: {
                    main: "#c00dd3"
                },
                secondary: {
                    main: '#282C34',
                },
                text: {
                    primary: '#e6e5e8',
                    secondary: '#adb0bb'
                }
            },
            shadows: strongShadows,
            boxShadow: '#242424'
        }

export const muiTheme =
    {
        palette: {
            type: 'light',
            action: {
                active: blueGrey['600'],
                selected: '#eaeaea',
                hover: '#eaeaea'
            },
            background: {
                default: common.white,
                dark: '#eaeaea',
                paper: common.white
            },
            primary: {
                main: "#25A9E0"
            },
            secondary: {
                main: '#FFFAFA',
            },
            text: {
                primary: blueGrey['900'],
                secondary: blueGrey['600']
            }
        },
        boxShadow: '#c6c6c6',
        shadows: softShadows
    };

export const defaultTheme = {
    repertoryColor: "#E94FB2",
    materiaMedicaColor: "#4E74EA",
    patientColor: '#58CDEA',
    searchColor: "#25A9E0",
    mapColor: "#606060",
    storeColor: "#606060",
    clipboardColor: "#dcd109",
    consultationColor: "#18c954",
    remedyColor: "#34e371",
    translationColor: "#606060",
    direction: 'ltr',
    components: {
        MuiInputBase: {
            input: {
                '&::placeholder': {
                    opacity: 1,
                    color: blueGrey['600']
                }
            }
        },
        MuiBadge: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold'
                },
                colorPrimary: {
                    color: 'white',
                    fontWeight: 'bold'
                },
                colorSecondary: {
                    color: '#25A9E0',
                    fontWeight: 'bold',
                    border: '1px solid #25A9E0'
                },
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 'bold'
                },
                containedPrimary: {
                    color: 'white',
                    fontWeight: 'bold'
                },
                containedSecondary: {
                    color: '#25A9E0',
                    fontWeight: 'bold',
                    border: '1px solid #25A9E0'
                },
            }
        }
    },
}

const themes = {
    'darkTheme': darkTheme,
    'muiTheme': muiTheme
}


export const createMuiTheme = ( {theme = 'muiTheme', direction }) => {
    return createTheme(
        _.merge(defaultTheme, themes[theme], {direction})
    );

};
