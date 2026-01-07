import { Box, LinearProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Preloader({ done }) {

    const [hide , setHide ] = useState(false);

    useEffect(() => {
        if( done ) {
            setHide(true);
        }
    },[done]);
    return (
        <Box 
        sx = {{
            inset : 0,
            position : "fixed",
            zIndex : 99999,
            background : 'linear-gradient(to bottom,#26143F 0%,#000000 65%)',

            transform : hide ? "translateY(-100%)" : "translateY(0)",
            transition : "transform 0.8s ease-in",

            display : "flex",
            alignItems :"center",
            justifyContent : "center",
            flexDirection :"column",
        }}
        >
            <Typography
            className="text-purple-800 py-6">
                Something Here
            </Typography>
            <Box sx ={{ width : 300}}>
                <LinearProgress color="secondary" />
            </Box>
        </Box>
    );
}

export default Preloader;