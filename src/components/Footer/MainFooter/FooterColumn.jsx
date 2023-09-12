import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function FooterColumn({input}) {
  return (
    <Box>
        <Typography
        variant="h5"
        sx={{
            pb: 2,
            px: 2,
            display: "flex",
            justifyContent: { xs: "center", lg: "flex-start" },
            fontWeight: "Bold",
        }}
        >
        {input.label}
        </Typography>

        {input.childLinks.map((link, index) => (
        <div key={index}>
          <Link href={link.href} passHref style={{ textDecoration: "none", color: "white" }}>
            <Typography
              variant="body1"
              sx={{
                px: 2,
                pb: 2,
                display: "flex",
                justifyContent: { xs: "center", lg: "flex-start" },
              }}
            >
              {link.label}
            </Typography>
          </Link>
        </div>
      ))}
    </Box>
  )
}
