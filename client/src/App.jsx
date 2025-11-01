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
const App = () => {
  const data=true;//conditional rendering for loading component comes from redux
  return (
   <>
    <Box minHeight={"100vh"}>
    <BrowserRouter>
      <Header/>
      <Routes>
        {
          data? <Route path='/' element={<ProtectedLayout/>}>
        <Route exact path=""element={<Home/>}/>
        <Route exact path='post/:id' element={<SinglePost/>}/>
        <Route exact path='/search' element={<Search/>}/>
        <Route exact path ="profile" element={<ProfileLayout/>}>
           <Route exact path="threads/:id" element={<Threads/>}/>
            <Route exact path="replies/:id" element={<Replies/>}/>
             <Route exact path="reposts/:id" element={<Repost/>}/>
             </Route>
             ):(
             <Route path='/register' element={<Register/>}/>
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
