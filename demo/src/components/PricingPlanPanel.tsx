import { Button, Divider, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {
    planId:number,
    planInfo:any
}

export default function PricingPlanPanel({planId,planInfo}: Props) {
  return (
    <Paper elevation={4} sx={{width:'100%',backgroundColor:'rgb(218,227,243)'}} >
        <Stack p={2} spacing={2}>
            <Typography variant='h6' px={2} alignSelf='flex-start' color={'rgb(25,118,210)'} > <strong>{planId}.{planInfo.name}</strong></Typography>
            <Divider flexItem sx={{borderBottomWidth:'2px'}}/>
            <Stack px={4} maxWidth='100%'>
                <Typography variant='h6'  alignSelf='flex-start'><strong>Fee:</strong>{planInfo.fee}</Typography>
                <Typography variant='h6'  alignSelf='flex-start'><strong>Reason:</strong>{planInfo.reason}</Typography>
                <Typography variant='h6'  alignSelf='flex-start'><strong>Score:</strong>{planInfo.score}</Typography>
            </Stack>
            
        </Stack>
    </Paper>
  )
}