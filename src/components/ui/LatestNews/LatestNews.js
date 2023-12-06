import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import topNews from "@/assets/top-news.png"

import side1 from "@/assets/side1.png"
import side2 from "@/assets/side2.png"
import side3 from "@/assets/side3.png"
import side4 from "@/assets/side4.png"

import Image from 'next/image';
import { Grid } from "@mui/material";
import { getAllNews } from '@/utlis/getAllNews';


const LatestNews = async () => {
  const { data } = await getAllNews();
  console.log(data[0]);
  return (
    <Box className="my-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image
              src={data[0].thumbnail_url}
              width={800}
              height={500}
              alt="top news"
            />
          </CardMedia>
          <CardContent>
            <p
              className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
            >
              {data[0].category}
            </p>
            <Typography gutterBottom variant="h5" component="div">
              {data[0].title}
            </Typography>
            <Typography gutterBottom className="my-3">
              By {data[0].author.name} - {data[0].author.published_date}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {data[0].details.length > 200
                ? data[0].details.slice(0, 200) + "..."
                : data[0].details}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Grid
        className="mt-5"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {data.slice(0, 4).map((news) => (
          <Grid key={news.id} item xs={6}>
            <Card>
              <CardActionArea>
              <CardMedia sx={{
                    "& img": {
                        width: "100%",
                        height: "250px"
                    }
                  }}>
                    <Image src={news?.thumbnail_url} alt='topnews' width={800} height={300}/>
                  </CardMedia>
                <CardContent>
                  <p
                    className="
                      w-[100px]
                      bg-red-500
                      px-2
                      text-white
                      my-5
                      rounded
                      "
                  >
                    {news.category}
                  </p>
                  <Typography gutterBottom>
                  {news?.title.length>30 ? news?.title.slice(0, 30)+"..." : news?.title}
                  </Typography>
                  <Typography gutterBottom className="my-3">
                    By Tanmoy Parvez - Mar 18 2023
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout........
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LatestNews;