import style from './searchForm.module.css';
import Input from '../../components/input';
import Button from '../../components/button';

const {general,buttons,inputs} = style;

function SearchForm() {


  return (
    <form className={general}>
      <div className={inputs}>
        <Input
          nameID={"input1"}
          placeholder={'Ex. Restaurant, hotel, hospital'}
          fontSize={'0.8rem'}
          width={'281px'}
          height={'33px'}
        />
        <Input
          nameID={"input2"}
          placeholder={'Ex. Brooklin, Nueva York'}
          fontSize={'0.8rem'}
          width={'281px'}
          height={'33px'}
        />
      </div>
      <div className={buttons}>
        <Button
          color={'hsl(216,100%,44%)'}
          width={"113px"}
          height={"39px"}
          name={"start"}
        />
        <Button
          color={'hsl(10,87%,58%)'}
          width={"113px"}
          height={"39px"}
          name={"Clear"}
        />
        <Button
          color={'hsl(216,100%,29%)'}
          width={"127px"}
          height={"39px"}
          name={"Export Excel"}
        />
      </div>
    </form>
  )
}

export default SearchForm
