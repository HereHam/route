import Home from './Home';
import About from './About';
import Contact from './Contact';
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom';
export default function Firstpage(){
     return (<>
        <BrowserRouter>
         <div>    
        <ul>
        <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/Contact">Contact</Link></li>
         <li><Link to="/post/">All posts</Link></li>
         <li><Link to="/post1/">item1</Link></li>
         <li><Link to="/post2/">item2</Link></li>
         <li><Link to="/posts?name=yossapat&surname=rachana/">item2</Link></li>
        </ul>
        
       </div>
       <Routes>

 <Route path="/" element={<Home/>}/>

<Route path="/about" element={<About/>}/>

 <Route path="/Contact" element={<Contact/>}/>    

</Routes>

 </BrowserRouter>

 </>);

}