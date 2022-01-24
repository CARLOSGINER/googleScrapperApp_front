import { DataContextProvider } from '../../context/dataContext';
import SearchForm from '../../layout/SearchForm';
import Table from '../../layout/Table';
import style from './home.module.css';
import { InputTextContextProvider } from '../../context/inputTextContext';

const {general} = style;

export default function Home() {
    return (
        <div className={general}>
            <DataContextProvider>
                <InputTextContextProvider>
                    <SearchForm/>
                    <Table/>  
                </InputTextContextProvider>
            </DataContextProvider>
        </div>
    )
}
