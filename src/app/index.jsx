import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../routes/home';
import Login from '../routes/login';
import './app.module.css';

export default function App() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home/>}></Route>
                <Route  path='/login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}
