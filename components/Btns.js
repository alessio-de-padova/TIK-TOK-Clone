import React, {useState, useEffect} from "react";
import {faker} from "@faker-js/faker";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";

import {auth} from "../firebase/firebase";
import {Avatar, Box, Button, Chip, Grid, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import VideocamIcon from '@mui/icons-material/Videocam';
import {gridStyle, gridTitleStyle} from "./styles";

const Btns = () => {
    const [user] = useAuthState(auth);
    const router = useRouter();
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(5)].map((_, i) => ({
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
            id: i,
        }));
        setSuggestions(suggestions);
    }, []);


    const sections = [
        {
            name: 'For you',
            icon: <HomeIcon/>
        },
        {
            name: 'Following',
            icon: <GroupIcon/>
        },
        {
            name: 'Live',
            icon: <VideocamIcon/>
        }
    ]

    return (
        <>
            <Grid
                container
                spacing={2}
                sx={(theme) => gridStyle(theme)}
            >
                {
                    sections.map((section) =>
                        <Grid key={section.name} item xs={12}>
                            <Button
                                fullWidth
                                sx={{
                                    color: (theme) => theme.palette.text.primary,
                                    padding: '10px 8px',
                                    justifyContent: 'flex-start',
                                    textTransform: 'none',
                                    letterSpacing: 0,
                                    width: '100%'
                                }}
                                color={'secondary'}
                                startIcon={section.icon}>
                                {section.name}
                            </Button>
                        </Grid>
                    )
                }

            </Grid>

            {!user && (
                <Grid
                    container
                    sx={(theme) => gridStyle(theme)}
                >
                    <p>Log in to follow creators, like videos, and view comments</p>
                    <button onClick={() => router.push("/auth/signin")}>Log in</button>
                </Grid>

            )}

            <Grid
                container
                spacing={1}
                sx={(theme) => gridStyle(theme)}
            >
                <Grid item xs={12}>
                    <Typography >
                        Suggested accounts
                    </Typography>
                </Grid>
                <Box mt={2}/>
                {suggestions.map((data, index) => (
                    <Grid item xs={12} key={index}>
                        <Chip
                            onClick={() => console.log("CLICKED")}
                            avatar={<Avatar src={data.avatar} alt="avatar"/>}
                            label={data.username}
                            variant="outlined"
                        />

                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Btns;
