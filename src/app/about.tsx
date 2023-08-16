import BoxContainer from "@/components/boxContainer";
import { Avatar, Grid, Stack, SxProps, Theme, Typography } from "@mui/material";


var msg_sx: SxProps<Theme> | undefined = {
    fontSize: {xs: 16, sm: 28},
    display: 'flex',
    fontFamily: 'monospace',
    fontWeight: 300,
    letterSpacing: '.025rem',
    color: 'inherit',
    textDecoration: 'none',
}

var header_sx: SxProps<Theme> | undefined = {
    fontSize: {xs: 24, sm: 64},
    display: 'flex',
    fontFamily: 'monospace',
    fontWeight: 500,
    letterSpacing: '.01rem',
    color: 'inherit',
    textDecoration: 'none',
}

function WelcomeMessage() {
    return (
        <Stack direction="row" justifyContent="flexStart" sx={{m: 2}}>
            <Typography
                variant="h2"
                sx={header_sx}
            >
                Welcome to my page!
            </Typography>
        </Stack>
    )
}

function AboutMessage() {
    return (
        <Typography
            variant="h4"
            sx={msg_sx}
            align="left"
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet in purus a tristique. Vestibulum varius vel eros eget maximus. Morbi nisl urna, venenatis ut urna vel, elementum blandit erat. Nulla dictum ullamcorper lectus ut luctus. Aliquam erat volutpat. Quisque in neque dignissim, finibus augue nec, vehicula neque. Sed nec ipsum ac quam euismod varius a ac ligula. Integer consectetur quam eu diam bibendum ornare. Integer sodales aliquet lacus nec ultrices.          
        </Typography>
    )
}

function UserImage() {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Avatar 
                alt="Adley Wong" 
                src="/static/profile.jpg" 
                sx={{ 
                    width: {xs: 212, sm: 364}, 
                    height: {xs: 212, sm: 364},
                    // boxShadow: "2px 2px black" 
                }} />
        </Stack>
    )
}

function AboutContainer() {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item md={12} lg={4}>
                <UserImage />
            </Grid>
            <Grid item md={12} lg={8}>
                <AboutMessage />
            </Grid>
        </Grid>
    )
}

export default function AboutPage() {
    return (
        <div id="about">
            <BoxContainer >
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <WelcomeMessage />
                    </Grid>
                    <Grid item xs={12}>
                        <AboutContainer />
                    </Grid>
                </Grid>
            </BoxContainer>
        </div>
    )
}