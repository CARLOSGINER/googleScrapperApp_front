import style from './searchForm.module.css';
import Input from '../../components/input';
import Button from '../../components/button';

const {general} = style;

function SearchForm() {
  return (
    <div className={general}>
      <Input
        placeholder={'Ex. Restaurant, hotel, hospital'}
        fontSize={'0.8rem'}
        width={'281px'}
        height={'33px'}
      />
      <Input
        placeholder={'Ex. Brooklin, Nueva York'}
        fontSize={'0.8rem'}
        width={'281px'}
        height={'33px'}
      />
      <Button
        color={'hsl(216,100%,44%)'}
        width={"113px"}
        heigh={"42px"}
        name={"start"}
      />
      <Button
        color={'hsl(10,87%,58%)'}
        width={"113px"}
        heigh={"42px"}
        name={"Clear"}
      />
      <Button
        color={'hsl(216,100%,29%)'}
        width={"127px"}
        heigh={"42px"}
        name={"Export Excel"}
      />
    </div>
  )
}

export default SearchForm
