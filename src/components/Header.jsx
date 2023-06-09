

import { Badge, Container, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Avatar from '@mui/material/Avatar'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { useColorScheme } from '@mui/material/styles'
import DarkModeIcon from '@mui/icons-material/DarkMode'
function Header() {
  // const theme = useTheme()
  const { mode, setMode } = useColorScheme();
  const modeToggle = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  }))
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch'
      }
    }
  }))
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <img style={{
              width: 60,
              height: 60,
              objectFit: 'cover',
              mixBlendMode: 'color-burn'
            }} src='https://s.memehay.com/files/posts/20210126/ech-xanh-dua-tay-chong-cam-mieng-chu-o-ngac-nhien.jpg'></img>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="drak mode icon"
                color="inherit"
              >

                <DarkModeIcon onClick={modeToggle} />

              </IconButton>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Avatar alt="Remy Sharp" src="https://keomoi.com/wp-content/uploads/2019/05/anh-gai-xinh-toc-ngan-de-thuong-hinh-3.jpg" />
                <span>Nguyễn Quốc Việt</span>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </Box>


  )
}

export default Header