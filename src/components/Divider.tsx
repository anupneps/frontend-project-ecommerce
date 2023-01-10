import { Divider, Typography } from '@mui/material'
import React from 'react'

export interface DividerProps {
    title?: string|undefined
}

const DividerComponent = ({ title }: DividerProps) => {
    return (
        <>
            <Typography variant='h5' fontWeight={'bold'} marginLeft={'45px'} marginTop={'30px'}>{title}</Typography>
           
        </>
    )
}

export default DividerComponent