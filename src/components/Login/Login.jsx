import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {creatorNewField, Elements} from '../common/FormControls/FormControls';
import {required} from '../../utilite/validator';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import classes from './Login.module.css'


export const Input = Elements('input')

const LoginForm =({handleSubmit,error,captcha_url})=>{

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <div>
                {creatorNewField("Email","email",[required],Input,{type:'email'})}
                {creatorNewField("Password","password",[required],Input,{type:'password'})}
                {creatorNewField(null,'rememberMe',null,Input,{type:'checkbox'},'Remember me')}
                <div>
                    <button>Login</button>
                </div>
            </div>
            {captcha_url
            && <div>
                <img src={captcha_url} alt=""/>
                {creatorNewField('','captcha',[],Input)}
            </div>}

            {error && <div className={classes.error}>
                <div>{error}</div>
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props)=>{
    const onSubmit = (formData) => {
        let {email,password,rememberMe,captcha} = formData
        props.login(email,password,rememberMe,captcha)

    }
    if(props.auth){
        return <Redirect to={'/profile'}/>
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm captcha_url={props.captcha_url} onSubmit={onSubmit} />
            {}
        </div>
    )
}
let mapStateToProps =(state)=>{
    return{
        auth:state.auth.isAuth,
        captcha_url:state.auth.captcha_url
    }

}

export default connect(mapStateToProps,{login})(Login)