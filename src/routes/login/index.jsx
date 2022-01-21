import style from './login.module.css';
import LoginForm from '../../layout/LoginForm';

const {container} = style

export default function Login() {
    return (
        <main className={container}>
            <LoginForm/>
        </main>
    )
}
