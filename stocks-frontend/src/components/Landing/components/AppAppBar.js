// src/components/AppAppBar.js
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Divider from '@mui/material/Divider';
import ColorModeIconDropdown from './ColorModeIconDropdown';
import Sitemark from './SitemarkIcon';
import { AuthContext } from '../AuthContext';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  const toggleDrawer = (newOpen) => () => setOpen(newOpen);

  return (
    <AppBar position="fixed" enableColorOnDark sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 'calc(var(--template-frame-height, 0px) + 28px)' }}>
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Sitemark />
          </Box>

          {/* Desktop buttons */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            {isAuthenticated ? (
              <>
                <Button color="primary" variant="text" onClick={() => window.location.href = "/profile"}>
                  Profile
                </Button>
                <Button color="primary" variant="outlined" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="primary" variant="text" onClick={() => window.location.href = "/login"}>
                  Sign in
                </Button>
                <Button color="primary" variant="contained" onClick={() => window.location.href = "/signup"}>
                  Sign up
                </Button>
              </>
            )}
            <ColorModeIconDropdown />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{ sx: { top: 'var(--template-frame-height, 0px)' } }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                {isAuthenticated ? (
                  <>
                    <MenuItem>
                      <Button color="primary" fullWidth onClick={() => window.location.href = "/profile"}>
                        Profile
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button color="primary" variant="outlined" fullWidth onClick={logout}>
                        Logout
                      </Button>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <Button color="primary" variant="text" fullWidth onClick={() => window.location.href = "/login"}>
                        Sign in
                      </Button>
                    </MenuItem>
                    <MenuItem>
                      <Button color="primary" variant="contained" fullWidth onClick={() => window.location.href = "/signup"}>
                        Sign up
                      </Button>
                    </MenuItem>
                  </>
                )}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
