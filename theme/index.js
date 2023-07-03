import _ from 'lodash';
import {createTheme} from '@mui/material/styles';
import {softShadows, strongShadows} from './shadows';
import {blueGrey, common} from '@mui/material/colors'

export const darkTheme =
    {
        palette: {
            mode: 'dark',
            text: {
                primary: 'rgba(255, 255, 255, 0.87)',
                secondary: 'rgba(255, 255, 255, 0.6)',
                disabled: 'rgba(255, 255, 255, 0.38)',
            }

        },
        shadows: strongShadows,
    }

export const muiTheme =
    {
        palette: {
            mode: 'light',
            text: {
                primary: 'rgba(0, 0, 0, 0.87)',
                secondary: 'rgba(0, 0, 0, 0.6)',
                disabled: 'rgba(0, 0, 0, 0.38)'
            }
        },
        shadows: softShadows
    };


const themes = {
    'darkTheme': darkTheme,
    'muiTheme': muiTheme
}


export const createMuiTheme = ({theme = 'muiTheme', direction}) => {
    return createTheme(
        _.merge(themes[theme], {direction})
    );

};
