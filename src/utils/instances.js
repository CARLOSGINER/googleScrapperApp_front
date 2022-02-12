//ESTO ES UTIL PARA LLEVAR CUENTA GLOBAL DE LAS INSTANCIAS DE CADA COMPONENTE.
//UNA DE LAS UTILIDADES ES EVITAR COLISIONES DE NOMBRE, QUE OCASIONARIAN DUPLICADOS
//Y POR LO TANTO QUEDARÍAN UNIDOS LOS DOS COMPONENTES. EJEMPLO: INPUTS QUE SE ACTUALIZAN AL UNISONO.

//PUT THE NEXT USEEFFECT INSIDE COMPONENT , REMEMBER CHANGE THE COMPONENT NAME

    //to register a new instance of this component created, in the global variable
    // useEffect(()=>{
    //     addNewInstance(<"component"Instances>,nameID)

    //     return ()=>{
    //         removeInstance(<"component"Instances>,nameID)
    //         <setComponentContextStructureHere>({})
    //     }
    // },[nameID,setInputValues])
    


//Here create many arrays as reusables components, to keep track of each instances
export let inputInstances = [];


// Comparator for eliminate duplicates on re renders
export function addNewInstance(instanceArray,newInstanceID) {
    
    if (!instanceArray.includes(newInstanceID)){
        instanceArray.push(newInstanceID)
        return
    }else{
        throw new Error (`⚠ Repeated nameID : ${newInstanceID}, not allowed, please check not to repeat the nameID of the 
        components`)
    }
}

export function removeInstance(instanceArray,newInstanceID) {
        instanceArray.filter(e=>e!==newInstanceID)
}