import { Avatar, Typography } from "@mui/material";
import {IoIoMore} from'react-icons/io'
const Comments=()=>{
    return (<div>
        <Stack flexDirection={"column"}
        gap={2}
        
        justifyContent={"space-between"}
        px={2}
        pb={4}
        borderBottom={"1px solid gray"}
        mx={"auto"}
        width={'90%'}
        >
            <Stack flexDirection={"row"}
        alignItems={"center"}
        
        gap={2}>
            <Avatar/>
            <Stack flexDirection={'column'}>
                <Typography variant="h6" fontWeight={"bold"}
                fontsize={"0.9rem"}>aditya agd</Typography>
                 <Typography variant="subtitle2" 
                fontsize={"0.9rem"}>aditya agd</Typography>
            </Stack>
            </Stack>
            <Stack flexDirection={'row'} gap={1}
            alignItems={'center'}
            color={"GrayText"}
            fontSize={"0.8rem"}>
                <p>24min</p>
                <IoIoMore size={15}/>
            </Stack>
        

        </Stack>
        Comments
        </div> );
};
export default Comments;