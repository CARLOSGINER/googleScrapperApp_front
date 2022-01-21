import style from './button.module.css';

const {button} = style;

function Button({
  name='Button',
  color,width='5em',
  height='2em'
}) {
    return (
        <>
          <button 
            style={{
              backgroundColor:color,
              width,
              height,
            }} 
            className={button}
          >
            {name}
          </button>  
        </>
    )
}

export default Button;