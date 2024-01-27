import Card from './Card';
import Button from './Button/Button';
import Button2 from './Button2';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';
function App() {
  return (
    <>

      {/* <Card /> */}
      {/* <Button></Button> */}
      {/* <Button2 /> */}
      {/* <Student name="SpongeBob" age={30} isStudent={true}/> */}
      {/* <Student name="Patrick" age={35} isStudent={false}/> */}
      <div className="centered">
        <List/>
      <Card />
        <UserGreeting isLoggedIn={true} />
        <UserGreeting isLoggedIn={false} username="Magnus" />
        <UserGreeting isLoggedIn={true} username="John" />
        <UserGreeting isLoggedIn={false} username="John" />
      </div>
    </>
  );
}

export default App;
