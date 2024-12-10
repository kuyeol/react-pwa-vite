import Typography from "@mui/material/Typography";
import AppbarButton from "./element/AppbarButton.tsx";
import AppbarIcon from "./element/AppbarIcon.tsx";
import { useState, useEffect } from 'react';




function useTime() {
  // 1. Keep track of the current date's state. `useState` receives an initializer function as its
  //    initial state. It only runs once when the hook is called, so only the current date at the
  //    time the hook is called is set first.
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    // 2. Update the current date every second using `setInterval`.
    const id = setInterval(() => {
      setTime(new Date());
        // ✅ Good: non-idempotent code no longer runs in render
    }, 1000);
    // 3. Return a cleanup function so we don't leak the `setInterval` timer.
    return () => clearInterval(id);
  }, []);

  return time;
}

const time = useTime();


export default function AppbarTray() {


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
