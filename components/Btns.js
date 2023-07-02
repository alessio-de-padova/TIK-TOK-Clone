import React, {useState, useEffect} from "react";
import {faker} from "@faker-js/faker";
import {useAuthState} from "react-firebase-hooks/auth";
import {useRouter} from "next/router";

import {auth} from "../firebase/firebase";
import {Box, Button, Grid, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import VideocamIcon from '@mui/icons-material/Videocam';

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
                sx={{
                    borderBottom: '1px solid rgb(200, 200, 200)',
                    paddingBottom: '1rem',
                    margin: '1rem 1rem 0 8rem',
                    width: '90%'
                }}>
                {
                    sections.map((section) =>
                        <Grid key={section.name} item xs={12}>
                            <Button
                                sx={{
                                    textTransform: 'none',
                                    color: 'black'
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

            <div className="accounts">
                <p>Suggested accounts</p>
                {suggestions.map((data, index) => (
                    <div className="user" key={index}>
                        <img src={data.avatar} alt="avatar"/>
                        <h6 className="username">{data.username}</h6>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Btns;
