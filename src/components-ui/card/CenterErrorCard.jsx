import { Box, Card, Fade, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../form/CustomButton'

const CenterErrorCard = ({title, subtitle, buttonText, buttonLink}) => {
  return (
    <Card sx={{
        maxWidth: "800px",
        width: "80%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px",
        bgcolor: "#FFF",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        p: 4,
      }}>
        <Box >
          <Fade in>
            <div>
              <Typography variant="h1" sx={{fontWeight: "bold", color: "primary.dark"}}>
                {title}
              </Typography>
              <Typography variant="h3" sx={{fontWeight: "bold", color: "primary.dark", my: 2}}>
                {subtitle}
              </Typography>
            </div>
          </Fade>
        </Box>
        <CustomButton text={buttonText} link={buttonLink}/>
      </Card>
  )
}

export default CenterErrorCard