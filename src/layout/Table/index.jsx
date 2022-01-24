import style from './table.module.css';
import { DataContext } from '../../context/dataContext';
import {useContext} from 'react';

const {general} = style;


function Table() {

  const {data} = useContext(DataContext);


  return (
    <table className={general}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Business name</th>
            <th>Adress</th>
            <th>Email</th>
            <th>Website</th>
            <th>Fone</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each,index)=>{
            return (
              <tr key={index}>
                <th>{each.Address}</th>
                <th>{each.BusinessName}</th>
                <th>{each.Category}</th>
                <th>{each.fone}</th>
                <th>{each.mail}</th>
                <th>{each.website}</th>
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}

export default Table
