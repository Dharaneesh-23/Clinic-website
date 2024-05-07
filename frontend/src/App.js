import './App.css';
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
  } from "react-router-dom";
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ServicesPage from './Components/ServicesPage';
import Packagepage from './Components/Packagepage';
import ContactPage from './Components/ContactPage';
import BookingPage from './Components/BookingPage';
import TopScrollButton from './Components/TopScrollButton';
import './Components/assets/style.css';
import Administration from './Components/Administration';

function App() {
    return (
        <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/services' element={<ServicesPage/>}/>
            <Route path='/packages' element={<Packagepage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/appointment' element={<BookingPage />}/>
            <Route path='/administration' element={<Administration />}/>
        </Routes>
        </BrowserRouter>
        <TopScrollButton />
        </div>
  );
}

export default App;