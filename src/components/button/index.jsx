import style from './button.module.css';
import { getDataPay } from '../../services/googleAPI';
import { DataContext } from '../../context/dataContext';
import {InputTextContext} from '../../context/inputTextContext';
import {useContext} from 'react';

const {button} = style;

function Button({
  name='Button',
  color,width='5em',
  height='2em'
}) {

    const {setData} = useContext(DataContext);
    const {setText1,setText2} = useContext(InputTextContext); 
    // TODO:  Add text1 and tex2 , for pass item to getDataPay() 

    const handleClick = async (e) => {
      e.preventDefault()
      if(name==="start"){
        const updatedData =  await getDataPay()
        setData(updatedData)
      }
      if(name==="Clear"){
        setData([])
        setText1("")
        setText2("")
      }
    }

    return (
        <>
          <button 
            style={{
              backgroundColor:color,
              width,
              height,
            }} 
            className={button}
            onClick={handleClick}
          >
            {name}
          </button>  
        </>
    )
}

export default Button;