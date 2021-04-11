import { createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

function MyTheme(t)
{
    let theme = createMuiTheme({

        palette: {
            type: t == 0 ? 'light' : 'dark',
            background: { default: t == 0 ? "#F4F7FC" : "#303030" },
            primary: { main: '#f6567e', contrastText: '#fff' }, // Primary color
            secondary: { main: '#f8a774', }, // secondary color
        },
        typography: {
            useNextVariants: true,
            fontFamily: 'lato'

        },
    });

    return theme;
}

export { MyTheme };
