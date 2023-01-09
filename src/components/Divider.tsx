import { Divider, Typography } from '@mui/material'
import React from 'react'

export interface DividerProps {
    title?: string|undefined
}

const DividerComponent = ({ title }: DividerProps) => {
    return (
        <>
            <Typography variant='h5' fontWeight={'bold'} marginLeft={'35px'} marginTop={'30px'}>{title}</Typography>
            <Divider variant='inset' sx={{ width: '90%', backgroundColor: '#b1aeae' }} />
        </>
    )
}

export default DividerComponent