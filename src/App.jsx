import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HomePage } from './pages/homePage';
import { AboutPage } from './pages/aboutPage';
import { ContactPage } from './pages/contactPage';
import { MentorChatPage } from './pages/mentorChatPage';
import ErrorPage from './pages/errorPage';
import { HeaderComponent } from './components/headerComponent';
import { FooterComponent } from './components/footerComponent';

function App() {

  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/mentorchat' element={<MentorChatPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}

export default App
