import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2


const ProductionData = () => {
  return (
    <div style={{position: 'absolute', margin:'auto' , top:'0', left:'0', bottom: '0', right: '0' , backgroundColor:'#fffafa' }}>
        <Grid container spacing={2}>
            <Grid xs={4}>
                <div>7800 BBL/D</div>
                <svg width="30" height="30" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_467_767)">
                <path d="M50.0012 19.9988H60.0024V79.9988H340V19.9988H350.001C355.524 19.9988 360.002 15.5237 360.002 10.0012C360.002 4.47876 355.524 0 350.001 0H50.0012C44.4788 0 40 4.47876 40 10.0012C40 15.5237 44.4788 19.9988 50.0012 19.9988Z" fill="url(#paint0_linear_467_767)"/>
                <path d="M350.001 319.999C355.524 319.999 360.002 315.524 360.002 310.001C360.002 304.479 355.524 300 350.001 300H50.0012C44.4788 300 40 304.479 40 310.001C40 315.524 44.4788 319.999 50.0012 319.999H60.0024V379.999H50.0012C44.4788 379.999 40 384.478 40 390C40 395.522 44.4788 400.001 50.0012 400.001H350.001C355.524 400.001 360.002 395.522 360.002 390C360.002 384.478 355.524 379.999 350.001 379.999H340V319.999H350.001Z" fill="url(#paint1_linear_467_767)"/>
                <path d="M350.001 100H50.0012C44.4788 100 40 104.475 40 109.998C40 115.52 44.4788 119.999 50.0012 119.999H60.0024V280H340V119.999H350.001C355.524 119.999 360.002 115.52 360.002 109.998C360.002 104.475 355.524 100 350.001 100ZM200.001 239.999C177.919 239.973 160.026 222.08 160 199.998C160 182.119 180.918 139.998 200.001 139.998C219.084 139.998 240.002 182.119 240.002 199.998C239.977 222.08 222.084 239.973 200.001 239.999Z" fill="url(#paint2_linear_467_767)"/>
                <path d="M199.999 160.695C193.143 166.104 180 188.714 180 200.001C180 211.049 188.954 220.003 199.999 220.003C211.044 220.003 219.998 211.049 219.998 200.001C219.998 188.714 206.854 166.104 199.999 160.695Z" fill="url(#paint3_linear_467_767)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_467_767" x1="200.001" y1="0" x2="200.001" y2="79.9988" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4D69F8"/>
                <stop offset="1" stop-color="#87BE28"/>
                </linearGradient>
                <linearGradient id="paint1_linear_467_767" x1="200.001" y1="300" x2="200.001" y2="400.001" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4D69F8"/>
                <stop offset="1" stop-color="#87BE28"/>
                </linearGradient>
                <linearGradient id="paint2_linear_467_767" x1="200.001" y1="100" x2="200.001" y2="280" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4D69F8"/>
                <stop offset="1" stop-color="#87BE28"/>
                </linearGradient>
                <linearGradient id="paint3_linear_467_767" x1="199.999" y1="160.695" x2="199.999" y2="220.003" gradientUnits="userSpaceOnUse">
                <stop stop-color="#4D69F8"/>
                <stop offset="1" stop-color="#87BE28"/>
                </linearGradient>
                <clipPath id="clip0_467_767">
                <rect width="400" height="400" fill="white"/>
                </clipPath>
                </defs>
                </svg>
                <div>Crude Production</div>
            </Grid>
            <Grid xs={4}>
                <div>9.4 MMSCFD</div>
                <div>Gas Production</div>
            </Grid>
            <Grid xs={4}>
                <div>130 BBL/D</div>
                <div>Water Production</div>
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductionData