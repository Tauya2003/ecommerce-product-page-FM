import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { IconButton, Typography } from '@mui/material';
import menuIcn from "../images/icon-menu.svg";
import closeIcn from '../images/icon-close.svg'


type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function MenuDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <IconButton
                sx={{ height: "1.8rem", m: 2 }}
            >
                <img
                    src={closeIcn}
                    alt="close"
                    style={{ height: "100%", width: "100%" }}
                />
            </IconButton>

            <List>
                {['Collections', 'Men', 'Women', 'About', 'Contact'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <Typography sx={{ fontWeight: 600, color: 'hsl(220, 13%, 13%)', pl: 1 }}>{text}</Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>

            <React.Fragment >
                <IconButton
                    onClick={toggleDrawer('left', true)}
                    sx={{ height: "1.8rem", display: { xs: "flex", md: "none" } }}
                >
                    <img
                        src={menuIcn}
                        alt="menu"
                        style={{ height: "100%", width: "100%" }}
                    />
                </IconButton>
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}