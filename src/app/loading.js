import { LinearProgress, Stack } from "@mui/material";

const LoadingPage = () => {
    return (
        <div className="flex justify-center items-center h-[30vh]">
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </div>
    );
};

export default LoadingPage;