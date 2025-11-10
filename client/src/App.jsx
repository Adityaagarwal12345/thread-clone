import React from 'react'
import Loading from './components/comman/Loading'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/comman/Header'
import Search from './pages/Protected/Search'
import Home from './pages/Protected/Home'
import Error from './pages/Error/Error'
import Register from './pages/Register'
import ProtectedLayout from './pages/Protected/ProtectedLayout'
import ProfileLayout from './pages/Protected/profile/ProfileLayout'
import Replies from './pages/Protected/profile/Replies'
import Repost from './pages/Protected/profile/Repost'
import SinglePost from './pages/Protected/SinglePost'
import Threads from './pages/Protected/profile/Threads'
import { useSelector } from 'react-redux'
import { Box } from '@mui/system'
import { useMyInfoQuery } from './redux/service'
const App = () => {
  const {darkMode,myInfo} = useSelector(state=>state.service); 
  const {data,isError}=useMyInfoQuery();//conditional rendering for loading component comes from redux

  if(isError){
    myInfo=null;
  }

  if(!data && !isError){
    return (
      <BrowserRouter>
      <Route exact path='/' element={<Register/>}/>
      </BrowserRouter>
    )
  }
  return (
   <>
    <Box minHeight={"100vh"}>
    <BrowserRouter>
      <Header/>
      <Routes>
        {? <Route path='/' element={<ProtectedLayout/>}>
        <Route exact path=""element={<Home/>}/>
        <Route exact path='post/:id' element={<SinglePost/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path ="profile" element={<ProfileLayout/>}>
           <Route exact path="threads/:id" element={<Threads/>}/>
            <Route exact path="replies/:id" element={<Replies/>}/>
             <Route exact path="reposts/:id" element={<Repost/>}/>
             </Route>
             :(
        
        )}
        <Route path='*' element={<Error/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </Box>
   </>
  )
}

export default App
