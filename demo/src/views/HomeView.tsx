import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { Card, Chip, Container, Divider, FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack } from '@mui/material';
import {Input, Upload, UploadFile} from 'antd'
import UploadIcon from '@mui/icons-material/Upload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CategorySelect from '../components/CategorySelect';
import TagSelect from '../components/TagSelect';
import VolumeSelect from '../components/VolumeInput';
import VolumeInput from '../components/VolumeInput';
import MapSelect from '../components/MapSelect';
import PricingPlanPanel from '../components/PricingPlanPanel';
import FreshnessSelect from '../components/FreshnessSelect';
const {TextArea} = Input

export default function HomeView() {

  const [des,setDes] = useState(defaultDes)
  const [fileName,setFileName] = useState('sample.xlsx')
  const [file,setFile] = useState<UploadFile>()
  const [datasetCategories,setDatasetCategories] = useState<string[]>([])
  const [datasetTags,setDatasetTags] = useState<string[]>([])
  const [datasetVolume,setDatasetVolume] = useState<string>('0')
  const [datasetCountries,setDataSetCountries] = useState<string[]>([])
  const [datasetFreshness,setDatasetFreshness] = useState<string>('')

  

  const onClickGenerate = () => {
    
  }

  const onClickUpload = () =>{

  }

  const onFreshnessChange = (e:SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = e;
    setDatasetFreshness(value)
  }

  const onCountryChange = (v:string[]) => {
    setDataSetCountries(v)
  }

  const onSelectChange = (from:string) => (e:SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = e;
    let v = typeof value === 'string' ? value.split(',') : value
    if(from === 'category'){
      setDatasetCategories(v)
    }else if(from === 'tag'){
      setDatasetTags(v)
    } 
  }

  return (
    <Box sx={{ flexGrow: 1 }} height={'100vh'} bgcolor={'rgb(248,250,251)'}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            DataPrice
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component={'main'} height={'calc(100% - 64px)'}>   
        <Grid container height={'100%'}>
          <Grid item xs={7} height={'100%'} p={4} >
            <Card sx={{height:'100%',borderRadius:3, overflowY:'auto'}} elevation={4} >
              <Stack p={4} spacing={1} direction='column' alignItems='center' >
                <Typography variant='h4' alignSelf='flex-start'> <strong>Description</strong></Typography>
                <TextArea rows={7} value={des} onChange={(e)=>setDes(e.target.value)} style={{fontSize:20}}></TextArea>
                <Button variant='contained' onClick={onClickGenerate}><strong>Generate</strong></Button>
                <Divider flexItem sx={{borderBottomWidth:'2px',py:1}}></Divider>
                <Typography variant='h4' alignSelf='flex-start'> <strong>Metadata</strong></Typography>
                <Grid container>
                  <Grid item xs={5} pr={2}>
                    <Stack p={2} spacing={2}>
                      <Stack direction={'row'} spacing={2}>
                        <Typography variant='h5'><strong>Data Sample</strong></Typography>
                        <Upload
                          action=''
                          listType='picture'
                          maxCount={1}
                        >
                          <Button  variant='contained' endIcon={<UploadIcon/>}>
                            <strong>Upload</strong>
                          </Button>
                        </Upload>
                      </Stack>
                      <Stack direction={'row'} spacing={2}> 
                        <InsertDriveFileIcon/>
                        <Typography variant='overline'>{fileName}</Typography>
                      </Stack>
                      <Typography variant='h5'><strong>Category</strong></Typography>
                      <CategorySelect propCategories={datasetCategories} onCategoriesChange={onSelectChange('category')}/>
                      <Typography variant='h5'><strong>Tags</strong></Typography>
                      <TagSelect propTags={datasetTags} onTagsChange={onSelectChange('tag')}/>
                      <Typography variant='h5'><strong>Data Volume</strong></Typography>
                      <VolumeInput propVolume={datasetVolume} onVolumeChange={(e)=>setDatasetVolume(e.target.value)}/>
                      <Typography variant='h5'><strong>Freshness</strong></Typography>
                      <FreshnessSelect propFreshness={datasetFreshness} onFreshnessChange={onFreshnessChange}/>
                    </Stack>
                  </Grid>
                  <Grid item xs={7} pl={2}>
                    <Stack p={2} spacing={2}>
                      <MapSelect onCountriesChange={onCountryChange} propCountries={datasetCountries}/>
                    </Stack>
                  </Grid>
                </Grid>
                <Button variant='contained' sx={{justifySelf:'flex-end'}}><strong>Submit</strong></Button>
              </Stack>
            </Card>
          </Grid> 
          <Grid item xs={5} height={'100%'} p={4}>
            <Card sx={{height: '100%', borderRadius:3 ,overflowY:'auto'}} elevation={4}>
              <Stack p={4} spacing={4} direction='column' alignItems='center'>
                <Typography variant='h4' alignSelf='flex-start'> <strong>Pricing Plans</strong></Typography>
                <Stack spacing={4}>
                  {samples.map((info,index)=>(
                    <PricingPlanPanel planId={index+1} planInfo={info}/>
                  ))}
                </Stack>
                
                <Button variant='contained'><strong>Export</strong></Button>
              </Stack>
              
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// const samples = [
//   {
//     name:'Subscription',
//     fee:' $500.00~$1,000.00/month',
//     reason:' Among all data product of Demographic, most of them offer a subscription plan. Depending on the category and volume, most of the datasets priced $500-$1,000.',
//     score: ' 0.64'
//   },
//   {
//     name:'One-off payment',
//     fee:' $450,000~$550,000',
//     reason:' Some of the datasets with a tag of Social media offer one-off payment. Depending on the category, coverage, and volume, most of the datasets priced $450,000~$550,000.',
//     score:' 0.22'
//   },
//   {
//     name:'Usage based',
//     fee:' $0.04~0.06/request',
//     reason:' Only few of datasets offer usage based pricing plan with a category of Demographic. Depending on the tag, coverage, and volume, most of the datasets priced $0.04~0.06/request.',
//     score:' 0.14'
//   }
//   // {
//   //   name:'Mixed',
//   //   fee:'$300.00/month + $0.02/request',
//   //   reason:'Some reasons here…',
//   //   score:'93.78'
//   // }
// ]

const samples = [
  {
        name:'Subscription',
        fee:' $8,000.00~$12,000.00/Year',
        reason:' Among all the datasets of Financial, most of them offer a subscription plan. Since it is a real-time updating financial product, most of such datasets are priced at $8,000.00~$12,000.00.',
        score: ' 0.64'
      },
      {
        name:'One-off payment',
        fee:' $4,000.00~$6,000.00',
        reason:' Some of the datasets with a tag of Market Analysis offer one-off payment. Depending on the category, coverage, and volume, most of the datasets are priced at $4,000.00~$6,000.00.',
        score:' 0.22'
      },
      {
        name:'Volume-based payment', 
        fee:' $0.30~$0.35/request',
        reason:' Only a few datasets offer volume-based payment plans with a category of Financial. Depending on the tag, and coverage, most of the datasets are priced at $0.30~$0.35 per request.',
        score:' 0.14'
      }
      // {
      //   name:'Mixed',
      //   fee:'$300.00/month + $0.02/request',
      //   reason:'Some reasons here…',
      //   score:'93.78'
      // }
]


const defaultDes = `Custommade statistical data within 200+ countries! Perform market research, update your database in real-time or build new apps: put our ever-growing database to work for your business.
Custommade Historical Financial Data For 230M Companies Worldwide:
- Data from 2017, 2018, 2019, 2020, 2021, 2022, 2023 & 2024, updates in realtime.
- Includes turnover, employee size.
- Custommade based on geographical location, turnover range, employee range and industry type
- Standardized database for all countries

Make data work for you. With unbeatable data, skilled data experts and smart technology, we help businesses to unlock the power of international data.`