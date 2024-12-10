import Typography from "@mui/material/Typography";
import AppbarButton from "./element/AppbarButton.tsx";
import AppbarIcon from "./element/AppbarIcon.tsx";
import { useState, useEffect } from 'react';




function useTime() {
  
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    
    const id = setInterval(() => { setTime(new Date());  }, 1000);

    return () => clearInterval(id);
  }, []);

  return time;
}




export default function AppbarTray() {
const time = useTime();

    return (
        <>
            <AppbarButton>
                <AppbarIcon/>
            </AppbarButton>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                MyApp
            </Typography>

            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {time.toLocaleString()}
            </Typography>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Home
            </Typography>  <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
        </Typography>  <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Home
        </Typography>  <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            로그인
        </Typography>

        </>

    );
}
