import Typography from "@mui/material/Typography";
import AppbarButton from "./element/AppbarButton.tsx";
import AppbarIcon from "./element/AppbarIcon.tsx";








export default function AppbarTray() {


    return (
        <>
            <AppbarButton>
                <AppbarIcon/>
            </AppbarButton>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Home
            </Typography>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Home
            </Typography>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Home
            </Typography>  <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
        </Typography>  <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
        </Typography>  <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
        </Typography>

        </>

    );
}
