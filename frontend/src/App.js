
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNotes from './components/MyNotes/MyNotes';

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/MyNotes' element={<MyNotes />} />
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
