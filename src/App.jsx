import {Home} from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error'
import { Blogs } from './pages/Blogs'
import {Admin} from './pages/Admin'
function App() {

  return (
    <div>
       <BrowserRouter>
           <Routes>
            <Route index path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs' element={<Blogs/>}/>
            <Route path="*" element={<Error/>}/>
            <Route path="/admin" element={<Admin/>}/>
            </Routes>
       </BrowserRouter>
  </div>
  )
}

export default App
