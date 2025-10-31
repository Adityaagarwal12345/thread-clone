
import {  Stack } from '@mui/material';
import Input from '../../components/comman/home/input'; 
import Post from '../../components/comman/home/Post';
const Home =()  => {
    return (
        <div>
           
            <p><Input/></p>
            <Stack flexDirection={'column'} gap={2} mb={10}>
            <Post/>
            </Stack>
        </div>
    );
}        
export default Home;   