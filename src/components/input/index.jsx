import style from './input.module.css';

const {principal,borderless} = style

export default function Input({placeholder,type,noBorder,fontSize,width,height}) {
    return (
        <div>
          <input
            style={{
                fontSize,
                width,
                height
            }}  
            className={noBorder?borderless:principal} 
            type={type} 
            placeholder={placeholder}/>  
        </div>
    )
}
