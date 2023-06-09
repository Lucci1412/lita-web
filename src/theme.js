import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, lightBlue, orange } from '@mui/material/colors'
import { grey } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: lightBlue[800]
        },
        secondary: {
          main: lightBlue[50]
        },
        text: {
          primary: grey[900],
          secondary: grey[50]
        }
      }

    }
  },
  dark: {
    palette: {
      primary: cyan,
      secondary: orange

    }
  }
})
export default theme