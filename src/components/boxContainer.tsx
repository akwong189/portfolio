'use client'

import { Box } from "@mui/material";

export default function BoxContainer({children}: {
    children: React.ReactNode
  }){

    return (
        <Box
            position="static"
            sx={{
                mx: 'auto',
                width: 'auto',
                p: 1,
                marginTop: 2,
                marginBottom: 2,
                borderRadius: 5,
                textAlign: 'center',
                backgroundColor: "rgba(255,255,255,0.1)",
                boxShadow: "1px 1px gray"
        }}>
            {children}
        </Box>
    )
}