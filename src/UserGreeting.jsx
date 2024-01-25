import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className="login-prompt">You must log in, {props.username}!</h2>
  );

  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

export default UserGreeting;
