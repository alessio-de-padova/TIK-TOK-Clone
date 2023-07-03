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
                <Typography
                    sx={(theme) => gridTitleStyle(theme)}
                >
                    Popular tags
                </Typography>
            </Grid>
            {topics?.map((item, index) => (
                <Chip
                    key={item.name}
                    avatar={item.icon}
                    label={item.name}
                    variant="outlined"
                />
            ))}
        </Grid>
    );
};

export default Tags;
