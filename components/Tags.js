import React from "react";

import {topics} from "../utils/constants";
import {Avatar, Box, Button, Chip, Grid, Typography} from "@mui/material";
import {gridStyle, gridTitleStyle} from "./styles";

const Tags = () => {


    return (
        <Grid
            container
            spacing={1}
            sx={(theme) => gridStyle(theme)}
        >
            <Grid item xs={12}>
                <Typography>
                    Popular tags
                </Typography>
            </Grid>
            <Box mt={2}>
                {topics?.map((item, index) => (
                    <Chip
                        onClick={() => console.log("CLICKED")}
                        key={index}
                        avatar={item.icon}
                        label={item.name}
                        variant="outlined"
                    />
                ))}
            </Box>
        </Grid>
    );
};

export default Tags;
