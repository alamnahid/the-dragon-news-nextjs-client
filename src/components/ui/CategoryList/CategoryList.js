import { getAllCategories } from "@/utlis/getAllCategories";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";


const CategoryList = async () => {
    const {data: allCategories} = await getAllCategories();
    console.log(allCategories);
    return (
        <Box className="mt-16 rounded-xl px-5 py-5 bg-gray-100">
            <Typography variant="h6">Categories</Typography>
            <Divider/>

            <Stack rowGap={1} sx={{mt:2.5}}>
                {
                    allCategories.map(category=><Button className="hover:bg-red-700 hover:text-white" variant="outlined" key={category.id}>
                       <Link href={`/categories/news?category=${category.title}`}>{category?.title}</Link>
                    </Button>)
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;