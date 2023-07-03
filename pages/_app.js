import '../styles/globals.css'
import {ThemeProvider} from "@mui/material";
import {createMuiTheme} from "../theme";

function MyApp({Component, pageProps}) {

    const theme = createMuiTheme({theme: 'muiTheme'});

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
