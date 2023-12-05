import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import topNews from "@/assets/top-news.png"
import sidenews from "@/assets/side-top-news.png"
import Image from 'next/image';
import { Grid } from "@mui/material";


export default function LatestNews() {
  return (
    <Box className="my-10">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={topNews} alt='topnews' width={800} />
          </CardMedia>
          <CardContent className='space-y-3'>
            <p className='w-[10rem] text-white font-medium h-8 flex justify-center items-center rounded-lg bg-[#F00]'>Technology</p>
            <Typography gutterBottom variant="h5" component="div" className='font-semibold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>


      <Grid className='mt-8' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sidenews} alt='topnews' width={800} />
          </CardMedia>
          <CardContent className='space-y-3'>
            <p className='w-[10rem] text-white font-medium h-8 flex justify-center items-center rounded-lg bg-[#F00]'>Technology</p>
            <Typography gutterBottom variant="h6" component="div" className='font-semibold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

        </Grid>


        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sidenews} alt='topnews' width={800} />
          </CardMedia>
          <CardContent className='space-y-3'>
            <p className='w-[10rem] text-white font-medium h-8 flex justify-center items-center rounded-lg bg-[#F00]'>Technology</p>
            <Typography gutterBottom variant="h6" component="div" className='font-semibold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

        </Grid>



        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sidenews} alt='topnews' width={800} />
          </CardMedia>
          <CardContent className='space-y-3'>
            <p className='w-[10rem] text-white font-medium h-8 flex justify-center items-center rounded-lg bg-[#F00]'>Technology</p>
            <Typography gutterBottom variant="h6" component="div" className='font-semibold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

        </Grid>




        <Grid item xs={6}>
        <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sidenews} alt='topnews' width={800} />
          </CardMedia>
          <CardContent className='space-y-3'>
            <p className='w-[10rem] text-white font-medium h-8 flex justify-center items-center rounded-lg bg-[#F00]'>Technology</p>
            <Typography gutterBottom variant="h6" component="div" className='font-semibold'>
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom>
              By Awlad Hossain - Mar 18 2023
            </Typography>
            <Typography variant="body2" color="text.secondary">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

        </Grid>
        
      </Grid>


    </Box>
  );
}