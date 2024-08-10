import {Component} from 'react'
// import { Navigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

 

import './index.css'


class SignUp extends Component {
    state = {
        fullName: '',
        emailAddress: '',
        password: '',
        phonenumber: '',
        lastName: '',
        userCity: '',
        userZipcode: '',
    }

    onChangeZipcode = event => {
        this.setState({userZipcode: event.target.value})
    }

    onChangeUserCity = event => {
        this.setState({userCity: event.target.value})
    }

    onChangeLastName = event => {
        this.setState({lastName: event.target.value})
    }

    
    onChangeNumber = event => {
        this.setState({phonenumber: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    onChangeEmailAddress = event => {
        this.setState({emailAddress: event.target.value})
    }

    onChangeFullname = event => {
        this.setState({fullName: event.target.value})
    }

    onSignupSuccess = () => {
        // const {history} = this.props
        // console.log(history)
        // history.push('/login')
        // return <Navigate to="/login" />;
        window.location.href = '/login';
        
    }


    onSubmitForm = async event => {
        event.preventDefault()
        const {fullName, emailAddress, password, phonenumber, lastName, userCity, userZipcode} = this.state
        const userDetails = {user_firstname: fullName, user_email: emailAddress, user_password: password, user_phone: phonenumber,  user_lastname: lastName, user_city: userCity, user_zipcode: userZipcode}

        const url = 'https://syoft.dev/Api/user_registeration/api/user_registeration'
        console.log(userDetails)

        const options = {
            method: "POST",
            body: JSON.stringify(userDetails),
        }
        
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)   

        if (response.ok === true){
            this.onSignupSuccess()
        }else {
            alert(response.msg)
        }
    }


     renderFullnameField = () => {
        const {fullName} = this.state
        return (
          <>
            <label className="input-label" htmlFor="fullname">
              Full name *
            </label> 
            <input
              type="text"
              id="fullname"
              className="input-filed"
              value={fullName}
              onChange={this.onChangeFullname}
            />
          </>
        )
      }

      renderEmailAddressField = () => {
        const {emailAddress} = this.state
        return (
            <>
            <label className='input-label' htmlFor='eamiladdress'>
                Email address *
            </label>
            <input 
            type='email'
            id='eamiladdress'
            className="input-filed"
            value={emailAddress}
            onChange={this.onChangeEmailAddress}
            />
            </>
        )
      }

      renderPasswordField = () => {
        const {password} = this.state
        return (
            <>
            <label className='input-label' htmlFor='password'>
                Password *
            </label>
            <input 
            type='password'
            id='password'
             className="input-filed"
             value={password}
             onChange={this.onChangePassword}
            />
            </>
        )
      }

      renderPhoneNumberField = () => {
        const {phonenumber} = this.state
        return (
            <>
            <label className='input-label' htmlFor='phonenumber'>
                Phone number *
            </label>
            <input 
            type='number'
            id='phonenumber'
            className="input-filed"
            value={phonenumber}
            onChange={this.onChangeNumber}
            />
            </>
        )
      }

      renderLastNameField = () => {
        const {lastName} = this.state
        return(
            <>
            <label className='input-label' htmlFor='lastname'>
                Last name *
            </label>
            <input 
            type='text'
            id='lastname'
            className="input-filed"
            value={lastName}
            onChange={this.onChangeLastName}
            />
            </>
        )
      }

      renderUserCityField = () => {
        const {userCity} = this.state
        return(
            <>
            <label className='input-label' htmlFor='usercity'>
                User city *
            </label>
            <input 
            type='text'
            id='usercity'
            className="input-filed"
            value={userCity}
            onChange={this.onChangeUserCity}
            />
            </>
        )
      }

      renderUserZipcodeField = () => {
        const {userZipcode} = this.setState
        return(
            <>
            <label className='input-label' htmlFor='userzipcode'>
                User zipcode *
            </label>
            <input 
            type='text'
            id='userzipcode'
            className="input-filed"
            value={userZipcode}
            onChange={this.onChangeZipcode}
            />
            </>
        )
      }

    render(){
        return(
           <div className='signup-container'>
            <img src='https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png' alt='logo' className='logo-image'/>
           
           <form className='form-container' onSubmit={this.onSubmitForm}>
           <h1 className='heading'>Sign Up</h1>
           <p className='description'>Already have an account  <span className='spam-element'>sign in</span></p>
          
            <div className='input-container'>{this.renderFullnameField()}</div>
            <div className='input-container'>{this.renderEmailAddressField()}</div>
            <div className='input-container'>{this.renderPasswordField()}</div>
            <div className='input-container'>{this.renderPhoneNumberField()}</div>
            <div className='input-container'>{this.renderLastNameField()}</div>
            <div className='input-container'>{this.renderUserCityField()}</div>
            <div className='input-container'>{this.renderUserZipcodeField()}</div>

            <div className='privacy-policy-container'>
            <input type='checkBox' className='check-box' id='checkbox'/>
            <label htmlFor='checkbox'>I agree to the <span className='spam-element'>Terms of Service</span> and <span className='spam-element'>Privacy Policy</span> </label>
            </div>

            <button type='submit' className='button'>Create your own account</button>
           </form>
           </div>
          
        )
    }
}

export default SignUp