import IconButton from "@mui/material/IconButton";


export default function AppbarButton({children}: { children: React.ReactNode }) {

    return (
        <>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{mr: 0}}
            >
                {children}

            </IconButton>

        </>
    );
};
