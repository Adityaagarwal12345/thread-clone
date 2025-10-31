import ProfileBar from "../../components/search/ProfileBar";
import SearchInput from "../../components/search/Searchinput";

const Search=()  => {
    return (
        <div> 
           <SearchInput/>
           <Stack flexDirection={'column'} gap={1} mb={5} width={'90%'} maxWidth={"750px"} mx={'auto'}
           > <ProfileBar 
           /></Stack>
        </div>
    );
}
export default Search