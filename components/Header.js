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
                                        {user ? (
                                            <li>
                                                <div
                                                    onClick={logout}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                                                        />
                                                    </svg>
                                                    Log Out
                                                </div>
                                            </li>
                                        ) : (
                                            <li>
                                                <div
                                                    className="flex items-center px-3 gap-4"
                                                    onClick={() => router.push("/auth/signin")}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-6 h-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                                        />
                                                    </svg>
                                                    Log In
                                                </div>
                                            </li>
                                        )}
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
