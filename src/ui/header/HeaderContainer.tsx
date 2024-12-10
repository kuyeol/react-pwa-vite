import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import AppbarTray from "./AppbarTray.tsx";




export default function HeaderContainer() {

    return (
        <AppBar position="sticky">
            <Toolbar variant="dense" >

                <AppbarTray />

            </Toolbar>
        </AppBar>
    );
}