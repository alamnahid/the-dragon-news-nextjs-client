import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { IconButton, Stack, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from '@mui/material/Button';
import Link from 'next/link';
const Footer = () => {

    const navItems = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/category"
        },
        {
            route: "News",
            pathname: "/news"
        },
        {
            route: "Post    ",
            pathname: "/post"
        },
        {
            route: "Contact",
            pathname: "/contact  "
        }
    
    ];


    return (
        <Box className="bg-black px-2 py-10 mt-10">
            <Container>

                <Box className="w-full text-center" sx={{
                        "& svg": {
                            color: "white",
                        },
                    }}>
                   
                        <IconButton className='space-x-4'>
                            <FacebookIcon />
                            <TwitterIcon />
                            <YouTubeIcon />
                            <LinkedInIcon />
                            <InstagramIcon />
                        </IconButton>
                  

                </Box>
                <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className="text-white">
                                    {item.route}
                                </Button>

                            </Link>
                        ))}
                    </Box>

                    <Typography color="gray" variant='body2' textAlign='center'>
                    @2023 Dragon News. Design by Programming Hero
                    </Typography>

            </Container>

        </Box>
    );
};

export default Footer;