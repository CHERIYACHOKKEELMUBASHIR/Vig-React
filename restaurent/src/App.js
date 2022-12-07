import './App.css';
import Home from './Home';
import Footer from './Footer';
import Dashboard from './Dashboard';
import RestaurentDetails from './RestaurentDetails';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Router>

<Home/>
<Routes>
<Route path='/' element={<Dashboard/>}></Route>
<Route path='/details/:id' element={<RestaurentDetails/>}></Route>

</Routes>

<Footer/>



    </Router>
  )
}

export default App
