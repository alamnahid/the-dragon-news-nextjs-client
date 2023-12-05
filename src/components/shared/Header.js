import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import headinglogo from "@/assets/The Dragon News.png"
import Image from 'next/image';
import { Typography } from '@mui/material';
import { getCurrentDate } from '@/utlis/getCurrentDate';
const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full mx-auto ">
            <Container className="space-y-3 mt-4 mb-4">
                <Image className="mx-auto" src={headinglogo} alt='the dragon news' width={500} height={500} />
                <Typography color="gray" variant='body2' textAlign='center'>
                    Journalism Without Fear or Favour
                </Typography>
                <Typography textAlign='center'>
                   {currentDate}
                </Typography>
            </Container>

        </Box>
    );
};

export default Header;