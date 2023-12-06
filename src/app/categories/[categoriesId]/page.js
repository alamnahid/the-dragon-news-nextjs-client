import { getCategoryNews } from "@/utlis/getCategoryNews";
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


const DynamicNewsPage = async ({params, searchParams}) => {
    const {data} = await getCategoryNews(searchParams.category)
    return (
        <div className="mt-4">
            <h1 className="text-3xl font-bold">Total {searchParams.category} news: {data.length}</h1>

            <Grid className='mt-8' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {
            data.map(news=><Grid key={news.id} item xs={6}>
                <Link href={`/${news.category}/${news._id}`}>
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
                  <CardContent className='space-y-3'>
                    <p className='w-[10rem] text-white font-medium h-8 flex justify-center items-center rounded-lg bg-[#F00]'>{news?.category}</p>
                    <Typography gutterBottom variant="h6" component="div" className='font-semibold'>
                      {news?.title.length>30 ? news?.title.slice(0, 30)+"..." : news?.title}
                    </Typography>
                    <Typography gutterBottom>
                      {news?.author?.name} - {news?.author?.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {news?.details.length>200 ? news?.details.slice(0, 180)+"..." : news?.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
                </Link>
        
                </Grid>)
        }

        
      </Grid>
            
        </div>
    );
};

export default DynamicNewsPage;