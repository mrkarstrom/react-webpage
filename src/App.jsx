import Card from './Card';
import Button from './Button/Button';
import Button2 from './Button2';
import Student from './Student';
import UserGreeting from './UserGreeting';

function App() {
  return (
    <>
      {/* <Card /> */}
      {/* <Button></Button> */}
      {/* <Button2 /> */}
      {/* <Student name="SpongeBob" age={30} isStudent={true}/> */}
      {/* <Student name="Patrick" age={35} isStudent={false}/> */}
      <div className="centered">
      <Card />
        <UserGreeting isLoggedIn={true} username="Magnus" />
        <UserGreeting isLoggedIn={false} username="Magnus" />
        <UserGreeting isLoggedIn={true} username="John" />
        <UserGreeting isLoggedIn={false} username="John" />
      </div>
    </>
  );
}

export default App;
