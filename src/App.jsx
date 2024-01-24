import Card from './Card';
import Button from './Button/Button';
import Button2 from './Button2';
import Student from './Student';
import UserGreeting from './UserGreeting';

function App() {
  return (
    <>
      <Card />
      {/* <Card /> */}
      {/* <Button></Button> */}
      {/* <Button2 /> */}
      {/* <Student name="SpongeBob" age={30} isStudent={true}/> */}
      {/* <Student name="Patrick" age={35} isStudent={false}/> */}
      <UserGreeting isLoggedIn={true} username="Magnus" />
      <UserGreeting isLoggedIn={false} username="John" />
    </>
  );
}

export default App;
