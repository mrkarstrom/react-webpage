import PropTypes from 'prop-types'

function UserGreeting(props) {
  return props.isLoggedIn ? (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  ) : (
    <h2 className="login-prompt">You must log in, {props.username}!</h2>
  );
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

export default UserGreeting