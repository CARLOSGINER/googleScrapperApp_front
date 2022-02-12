//#STUDY USECASE

//modules imports
import style from './input.module.css';
import {useEffect,useContext} from 'react';
import PropTypes from 'prop-types';
//utilities imports
import {InputTextContext} from '../../context/inputTextContext';
import {addNewInstance,removeInstance,inputInstances} from '../../utils/instances';

const {principal,borderless} = style

//Este es un componente totalmente reutilizable y configurable. Recibe como props estilos. Tambien tiene un rastreador de instancias 
function Input({nameID,placeholder,noBorder,fontSize,width,height}) {

    //Los inputs comparten un solo contexto. Donde se van guardando sus valores en un solo objeto estado. y que se crea en el setInputValues de mas abajo. 
    const {setInputValues,inputValues} = useContext(InputTextContext);

    // INSTANCES TRACKER FEATURE: para registrar que un nuevo input ha sido renderizado, se llama la funcion addNewInstance que tambien compara internamente si el nameID ya fue
    // usado, es decir si está repetido, y si es así lanza un error por consola. Notese que  en la "clean up function" que es el return, se llama al removeInstance 
    // y se borran todo el estado. Esto es de suma importancia, puesto que al cambiar de pagina y se desmonten los input en este caso, permite que se puedan usar 
    // nameID iguales para otros inputs siempre y cuando no esten en el mismo renderizado (pagina).  
    useEffect(()=>{
        addNewInstance(inputInstances,nameID)

        return ()=>{
            removeInstance(inputInstances,nameID)
            setInputValues({})
        }
    },[nameID,setInputValues])
    
    //La clave está en la forma como se setean los nuevos valores. Con el operador spread (...) persistimos cualquier valor anterior. Y al indicar el key como una variable,
    //usando los [],hay dos posibilidades. Si ya existe el valor, se muta el valor del input correspondiente, pero si no existe aun, es decir es primera vez que llega ese nameID,
    //entonces se agrega y el objeto crece. Y asi sucesivamente. Por esto es importante que los nameID sean unicos, de lo contrario se sobreescribirían dos input con mismo nameID, 
    //ya esto fue resuelto dentro de la utility INSTANCE TRACKER
    const handleChange = (e) =>{
        setInputValues(prev=>({
            ...prev,
            [nameID]:e.target.value
        })
        )
    }

    return (
        <>
        {/* descomentar para visualizar en consola, como se va construyendo el estado (objeto) en tiempo real  */}
        {/* {console.log(inputValues)} */}
        <input 
            style={{
                fontSize,
                width,
                height
            }}  
            className={noBorder?borderless:principal} 
            placeholder={placeholder}
            //notese que para acceder al valor individual de cada instancia, se accede mediante una key como variable, es importante hacer el || "OR" puesto que en el primer
            // renderizado va a ser undefined. 
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