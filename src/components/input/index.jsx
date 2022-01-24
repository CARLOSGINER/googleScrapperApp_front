import style from './input.module.css';
import {useEffect, useReducer,useContext} from 'react';
import {inputsReducer} from './inputsReducer';

import {InputTextContext} from '../../context/inputTextContext';


const {principal,borderless} = style

function Input({nameID,placeholder,noBorder,fontSize,width,height}) {


    const {setText1,setText2,text1,text2} = useContext(InputTextContext);

    const [stateInputs,dispatch] = useReducer(inputsReducer,{
        input1:{
            text:""
        },
        input2:{
            text:""
        },
        [nameID]:{
            text:""
        }
    })

    const handleChange = (e) =>{
        dispatch({
            type:nameID,
            payload:{
                text:e.target.value
            }
        })
    }

    useEffect(()=>{
        if(nameID==='input1'){
            setText1(stateInputs[nameID].text)
        }
        if(nameID==='input2'){
            setText2(stateInputs[nameID].text)
        }
    },[stateInputs,setText1,setText2,nameID])

    useEffect(()=>{
        if(text1===""){
            dispatch({
                type:"input1",
                payload:{
                    text:""
                }
            })
        }
        if(text2===""){
            dispatch({
                type:"input2",
                payload:{
                    text:""
                }
            })
        }
    },[text1,text2])

    return (
        <>
        <input 
            style={{
                fontSize,
                width,
                height
            }}  
            className={noBorder?borderless:principal} 
            placeholder={placeholder}
            value={stateInputs[nameID].text}
            onChange={handleChange}
        />
        </>
    )
}

export default Input