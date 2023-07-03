import React, {useState, useEffect} from "react";
import {faker} from "@faker-js/faker";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";

import {auth} from "../firebase/firebase";
import {Avatar, Box, Button, Grid, Typography} from "@mui/material";
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
                sx={gridStyle}
            >
                {
                    sections.map((section) =>
                        <Grid key={section.name} item xs={12}>
                            <Button
                                fullWidth
                                variant={'secondary'}
                                sx={{
                                    justifyContent: "flex-start",
                                    textTransform: 'none'
                                }}
                                startIcon={section.icon}>
                                {section.name}
                            </Button>
                        </Grid>
                    )
                }

            </Grid>

            {!user && (
                <div className="login">
                    <p>Log in to follow creators, like videos, and view comments</p>
                    <button onClick={() => router.push("/auth/signin")}>Log in</button>
                </div>
            )}


            <Grid
                container
                spacing={1}
                sx={gridStyle}
            >
                <Grid item xs={12}>
                    <Typography
                        sx={(theme) => gridTitleStyle(theme)}
                    >
                        Suggested accounts
                    </Typography>
                </Grid>
                <Box mt={2}/>
                {suggestions.map((data, index) => (
                    <Grid item xs={12} key={index}>
                        <Button
                            fullWidth
                            sx={{
                                justifyContent: "flex-start",
                                textTransform: 'none'
                            }}
                            variant={'secondary'}
                            startIcon={ <Avatar src={data.avatar} alt="avatar" />}
                            display={'flex'}
                        >
                            {data.username}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Btns;
