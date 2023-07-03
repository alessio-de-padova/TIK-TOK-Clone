import React, {useState} from "react";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import {signOut} from "firebase/auth";
import {motion} from "framer-motion";
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/SettingsOverscan'
import {auth} from "../firebase/firebase";
import {
    AppBar, Button, Toolbar,
    IconButton, Box, Avatar, Tooltip
} from "@mui/material";
import {Add, Menu} from "@mui/icons-material";

const Header = ({isShow}) => {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const [dropMenu, setDropMenu] = useState(false);

    const logout = async () => {
        await signOut(auth);
    };


    return (
        <AppBar
            sx={{
                // boxShadow: 'unset',
                height: '4rem'
            }}
        >
            <Toolbar>
                <img
                    className="logo"
                    onClick={() => router.push("/")}
                    src="/HolyMary.svg"
                    alt="LePorn"
                />
                <Box
                    ml={2}
                    flexGrow={1}
                />
                <motion.div
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    style={{display: 'flex', justifyContent: 'space-around'}}
                >
                    {isShow && (
                        <>
                            {user && (
                                <Tooltip title={'Upload'}>
                                    <IconButton
                                        sx={{color: 'black'}}
                                        variant='contained'
                                        onClick={() => router.push("/pin/create")}
                                    >
                                        <Add/>
                                    </IconButton>
                                </Tooltip>

                            )}
                        </>
                    )}
                    {user ? (
                        <Tooltip title={user?.displayName}>
                            <Avatar src={user?.photoURL}/>
                        </Tooltip>
                    ) : (
                        <Button
                            onClick={() => router.push("/auth/signin")}
                        >
                            Log in
                        </Button>
                    )}
                        <IconButton
                            onClick={() => setDropMenu(!dropMenu)}
                            sx={{color: 'black'}}
                        >
                            <Menu/>
                        </IconButton>
                        {dropMenu && (

                                <ul>
                                    <li>
                                        {
                                            user ?
                                                <div
                                                    onClick={logout}
                                                >
                                                    Log Out
                                                </div>
                                                :
                                                <div
                                                    onClick={() => router.push("/auth/signin")}
                                                >
                                                    Log in
                                                </div>
                                        }

                                    </li>
                                </ul>
                        )}
                </motion.div>
            </Toolbar>
        </AppBar>
    )
        ;
};

export default Header;
