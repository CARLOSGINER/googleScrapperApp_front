import SearchForm from '../../layout/SearchForm';
import Table from '../../layout/Table';
import style from './home.module.css';

const {general} = style;

export default function Home() {
    return (
        <div className={general}>
            <SearchForm/>
            <Table/>  
        </div>
    )
}