 
 
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom'
import Sign from './component/Sign'
import Login from './component/Login'
import Home from './component/Home'

function App() {
  
   const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navigate to="/login"></Navigate></>,
    },
    {
      path:"/signup",
      element:<><Sign></Sign> </>
    },
     {
      path:"/login",
      element:<><Login></Login> </>
    },
    {
      path:"/home",
      element:<> <Home></Home> </>
    } 

  ])
  

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
