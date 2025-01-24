import {useState} from 'react'
import {Button} from "@mui/material";
import ReloadPrompt from './ReloadPrompt'
import PWABadge from "./PWABadge.tsx";
import Box from '@mui/material/Box';
import HeaderContainer from "./ui/header/HeaderContainer.tsx";
import MainContainer from "./ui/body/MainContainer.tsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>

            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
                <title>타이틀</title>
            </head>

            <header>
                 
            </header>

            <body>
                <h4>헤더컨테이너시작</h4>
            <HeaderContainer/>
            <h5>컨테이너 끝</h5>
            <main>



                <Box>
                     <MainContainer contents="컨텐츠 "/>
                </Box>
                <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Hello World</Button>
                <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Hello World</Button>
                <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Hello World</Button>
                <Button variant="contained" onClick={() => setCount((count) => count + 1)}>Hello World</Button>
                <Box justifyContent="stretch">
                    <h1 >
                        {count}
                    </h1>

                </Box>

            </main>


            <div style={{
                height: "100vh",
            }}/>

            </body>

            <footer>
                <ReloadPrompt/>
                <Box>
                    <PWABadge/>
                </Box>
            </footer>

        </>
    )
}

export default App
