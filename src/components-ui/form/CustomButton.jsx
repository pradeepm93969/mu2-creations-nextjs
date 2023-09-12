import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function CustomButton({text, link, size}) {
  return (
    <Link href={link} style={{ textDecoration: 'none', color: 'white' }} passHref>
      <Button
        size={size}
        variant="contained"
        sx={{
          fontWeight: 'bold',
          my: 2,
          backgroundImage: 'linear-gradient(45deg, #8450A3, #4766B2, #F8B733)',
          backgroundSize: '200% auto',
          color: 'white',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Add shadow here
          transition: '0.3s',
          textTransform: 'none',
          '&:hover': {
            backgroundPosition: 'right center',
          },
        }}
      >
        {text}
      </Button>
    </Link>
  )
}
