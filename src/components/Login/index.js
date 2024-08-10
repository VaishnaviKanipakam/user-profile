import {Component} from 'react'
import './index.css'

class Login extends Component {
    state = {
        userEamil: '',
        userPassword: '',
    }

    onLoginSuccess = () => {


        window.location.href = '/dashboard';
        //  const {history} = this.props
        // console.log(history)
        // history.push('/dashboard')
    }

    // onLoginFailure = () => {

    // }

    onChangeUserPassword = event => {
        this.setState({userPassword: event.target.value})
    }

    onChangeUserEmail = event => {
        this.setState({userEamil: event.target.value})
    }

    onSubmitForm = async event => {
        event.preventDefault()
        const {userEamil, userPassword} = this.state 
        const userDetails = {user_email: userEamil, user_password: userPassword}

        const url = 'https://syoft.dev/Api/userlogin/api/userlogin'

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
        }

        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)

        if (response.ok === true){
            
            localStorage.setItem('usersInformation', JSON.stringify(data.user_data[0]))
            this.onLoginSuccess()
        }
        else {
               alert(response.msg)
        }
    }

    renderUserEmalField = () => {
        const {userEamil} = this.state
        return (
            <>
            <label className='input-label' htmlFor='useremail'>
                User email *
            </label>
            <input 
            type='email'
            id='useremail'
            className="input-filed"
            value={userEamil}
            onChange={this.onChangeUserEmail}
            />
            </>
        )
    }

    renderUserPasswordField = () => {
        const {userPassword} = this.state

        return (
            <>
            <label className='input-label' htmlFor='userpassword'>
                User password *
            </label>
            <input 
            type='password'
            id='userpassword'
            className="input-filed"
            value={userPassword}
            onChange={this.onChangeUserPassword}
            />
            </>
        )
    }

    render(){
        return(
            <div className='app-container'>
            <form className='form-container' onSubmit={this.onSubmitForm}>
                <h1>Login</h1>
                <div className='input-container'>{this.renderUserEmalField()}</div>
                <div className='input-container'>{this.renderUserPasswordField()}</div>
              <div className='button-contianer'>
              <button type='submit' className='button'>Login</button>
              </div>

            </form>
            </div>
        )
    }
}

export default Login