import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#042B5A',
    },
    secondary: {
      main: '#C40A40',
    },
    background: {
      default: '#fff',
    },
  },
  typography:{
    button:{
      textTransform:'none',
      fontWeight:'200'
    },
    fontFamily: ["Jost", "sans-serif"].join(","),
  },
});

export default theme;