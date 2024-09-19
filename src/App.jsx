import {Home} from './pages/Home'
import {Navbar} from './components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Error } from './pages/Error'

function App() {

  return (
    <div>
       <BrowserRouter>
           <Routes>
            <Route index path='' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path="*" element={<Error/>}/>
            </Routes>
       </BrowserRouter>
       {/* <Home/>
       <Navbar/>
       <Home/>
       <Projects/>
       <Contact/> */}
  </div>
  )
}

export default App
