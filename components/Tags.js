import React from "react";

import {topics} from "../utils/constants";
import {Avatar, Box, Button, Chip, Grid, Typography} from "@mui/material";
import {gridStyle, gridTitleStyle} from "./styles";

const Tags = () => {

    return (
        <Grid
            container
            spacing={1}
            sx={gridStyle}
        >
            <Grid item xs={12}>
                <Typography
                    sx={(theme) => gridTitleStyle(theme)}
                >
                    Popular tags
                </Typography>
            </Grid>
            {topics?.map((item, index) => (
                <Chip
                    key={item.name}
                    avatar={<Avatar alt="Natacha" src={item.icon}/>}
                    label={item.name}
                    variant="outlined"
                />
            ))}
        </Grid>
    );
};

export default Tags;
