//modules imports
import style from './input.module.css';
import {useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
//utilities imports
import {InputTextContext} from '../../context/inputTextContext';
import {addNewInstance,removeInstance,inputInstances} from '../../utils/instances';

const {principal,borderless} = style


function Input({nameID,placeholder,noBorder,fontSize,width,height}) {

    const {setInputValues,inputValues} = useContext(InputTextContext);

    // to register a new instance of this component created, in the global array variable assigned
    useEffect(()=>{
        addNewInstance(inputInstances,nameID)

        return ()=>{
            removeInstance(inputInstances,nameID)
            setInputValues({})
        }
    },[nameID,setInputValues])
    

    const handleChange = (e) =>{
        setInputValues(prev=>({
            ...prev,
            [nameID]:e.target.value
        })
        )
    }

    return (
        <>
        {console.log(inputValues)}
        <input 
            style={{
                fontSize,
                width,
                height
            }}  
            className={noBorder?borderless:principal} 
            placeholder={placeholder}
            value={inputValues[nameID] || ""}
            onChange={handleChange}
        />
        </>
    )
}

Input.propTypes ={
    nameID: PropTypes.string.isRequired
}

export default Input