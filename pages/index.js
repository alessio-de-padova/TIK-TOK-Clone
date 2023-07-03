import Header from "../components/Header";
import LeftHandSide from "../components/LeftHandSide";
import RightHandSide from "../components/RightHandSide";
import {Grid, Paper} from "@mui/material";

export default function Home() {
    return (
        <div>
            <Header isShow={true}/>
            <Paper>
            <Grid
                container
                sx={(theme) => ({ backgroundColor: theme.palette.background.paper, marginTop: '3rem'})}
            >
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        height: '95vh',
                        overflowY: 'hidden',
                        overflowX: 'hidden'
                    }}
                >
                    <LeftHandSide/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        height: '90vh',
                        overflowY: 'scroll'
                    }}
                >
                    <RightHandSide/>
                </Grid>
            </Grid>
            </Paper>
        </div>
    )
}
