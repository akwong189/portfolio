'use client'

import { Stack, Typography } from '@mui/material';
import BoxContainer from './boxContainer';

let pages = ["About", "Projects", "Contact"]

export default function NavBar() {
    let typo_sx = {
        fontSize: {xs: 18, sm: 32},
        mr: 2,
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: {xs: '.1rem', md: '.3rem'},
        color: 'inherit',
        textDecoration: 'none',
        ":hover": {textDecoration: 'underline'}
    }

    return (
        <BoxContainer>
            <Stack 
                direction="row" 
                spacing={{xs: 2, md: 4}}
                justifyContent="flex-end"
                sx={{
                    marginLeft: 2,
                    marginRight: 2
                }}
            >
                {pages.map((val) => {
                    return (
                        <Typography 
                            variant="h6"
                            noWrap
                            component="a"
                            href={`#${val.toLowerCase()}`}
                            sx = {typo_sx}
                        >
                            {val}
                        </Typography>
                    )
                })}
            </Stack>
        </BoxContainer>
    )
}