import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../routes/home';
import Login from '../routes/login';
import './app.module.css';

export default function App() {
    return (
        <>
        <BrowserRouter basename="/googleScrapperApp_front">
            <Routes>
                <Route exact path='/' element={<Home/>}></Route>
                <Route exact path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
