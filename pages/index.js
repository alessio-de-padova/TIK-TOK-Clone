import Header from "../components/Header";
import LeftHandSide from "../components/LeftHandSide";
import RightHandSide from "../components/RightHandSide";
import {Grid} from "@mui/material";

export default function Home() {
    return (
        <div>
            <Header isShow={true}/>
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        height: '90vh',
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
        </div>
    )
}
