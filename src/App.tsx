import './App.css'
import { Header } from "./layout/header/Header";
import { Main } from './../src/layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Specialty } from './layout/sections/specialty/Specialty';
import { Feedback } from './layout/sections/feedback/Feedback';
import { Footer } from './layout/footer/Footer';
import { Particle } from './components/particle/Particle';
import { GoTopBtn } from './components/goTopBtn/goTopBtn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Важно оставить здесь!
import { Technologies } from './layout/sections/technologies/Technologies';
import { Experience } from './layout/sections/experience/Experience';


function App() {
    return (
        <div className="App">
            <Particle />
            <Header />
            <Main />
            <Skills />
            <Specialty />
            <Feedback />
            <Technologies />
            <Experience />
            <Footer />
            <GoTopBtn />
            {/* Контейнер будет "слушать" вызовы со всего приложения */}
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                theme="dark"
            />
        </div>
    )
}

export default App
