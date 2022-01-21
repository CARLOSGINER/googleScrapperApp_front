import style from './loginForm.module.css';
import Input from '../../components/input';
import Button from '../../components/button';
import Avatar from '../../components/avatar';

const {form,buttons} = style

export default function LoginForm() {
    return (
        <form className={form}>
            <Avatar/>
            <Input type={'text'} placeholder={'User name'} noBorder={true}/>
            <Input type={'password'} placeholder={'Password'} noBorder={true}/>
            <div className={buttons}>
                <Button  name="Login" color={'yellowgreen'} width={'8em'} height={'2em'}/>
                <Button  name="Sign Up" color={'cadetblue'} width={'8em'} height={'2em'}/>
            </div>
        </form>
    )
}
