import React from "react";
//import loginStyle from './Login.module.css';
import { Form, Field } from 'react-final-form';
import { render } from 'react-dom';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const LoginForm = (props) => {
  //const { handleSubmit, pristine, form, submitting } = props

  return (
    <Form
    onSubmit={onSubmit}
    initialValues={{ stooge: 'larry', employed: false }}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form  onSubmit={handleSubmit}>
          <div>
            <Field
            placeholder={"Login"}
            name="login"
            component="input"
            />
          </div>
          <div>
            <Field
            placeholder={"Password"}
            name={"password"}
            component={"input"}
            />
          </div>
          <div>
            <Field
            name={"rememberMe"}
            component={"input"}
            type={"checkbox"}
            /> remember me
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      )}
    />
  );
}


function Login(props) {
  const onSubmit = (formData) => {
    console.log(formData);
  }
    return (
      <div>
        <h1>Login</h1>
        <LoginForm/>
      </div>
    );
  }

  export default Login;