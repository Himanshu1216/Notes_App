
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div>
            <Header/>
            <main>
                <LandingPage/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;
