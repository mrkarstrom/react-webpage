import PropTypes from 'prop-types'

function UserGreeting(props) {
  if(props.isLoggedIn){
      return <h2>Welcome {props.username}</h2>
  }
  else{
    return <h2>You must log in!</h2>
  }
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

export default UserGreeting