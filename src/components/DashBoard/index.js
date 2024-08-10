import {Component} from 'react'
import './index.css'

let usersInformation = {
    user_firstname: "John",
    user_email: "john@example.com",
    user_phone: "1234567890",
    user_password: "password123",
    user_lastname: "Doe",
    user_city: "Hyderabad",
    user_zipcode: "500072",
}

class DashBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
      }
    
    componentDidMount() {
        setTimeout(() => {
         const userDetails =  JSON.parse(localStorage.getItem("usersInformation"))
            console.log(userDetails)
          this.setState({userDetails: userDetails})
        }, 1000)
      }

    render(){
        return(
           <div className='container'>
             <h1 className='welcome-heading'>WelCome {usersInformation.user_firstname}</h1>
             <div className='container-2'>

        
            <img src='https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1723161600&semt=ais_hybrid' alt='profileImage'/>
            
            <div className='container-3'>
           
            <h2 className='user-data'>My Profile</h2>
            {console.log(this.state)}
            {this.state.userDetails && (<h3>First Name: {this.state.userDetails.user_firstname} {this.state.userDetails.user_lastname}</h3>)}
           {this.state.userDetails && (<h3>Email: {this.state.userDetails.user_email}</h3>)}
           {this.state.userDetails && (<h3>Mobile Number: {this.state.userDetails.user_phone}</h3>)}
           {this.state.userDetails && (<h3>City: {this.state.userDetails.user_city}</h3>)}
           {this.state.userDetails && (<h3>Email: {this.state.userDetails.user_zipcode}</h3>)}
            </div>
            </div>
           </div>
        )
    }
}
export default DashBoard