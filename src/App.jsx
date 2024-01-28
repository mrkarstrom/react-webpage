import Card from './Card';
import Button from './Button/Button';
import Button2 from './Button2';
import Student from './Student';
import UserGreeting from './UserGreeting';
import List from './List';
function App() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];
  const vegetables = [
    { id: 6, name: 'carrot', calories: 41 },
    { id: 7, name: 'broccoli', calories: 55 },
    { id: 8, name: 'spinach', calories: 23 },
    { id: 9, name: 'cucumber', calories: 16 },
    { id: 10, name: 'zucchini', calories: 20 },
  ];

  return (
    <>
      {/* <Card /> */}
      {/* <Button></Button> */}
      {/* <Button2 /> */}
      {/* <Student name="SpongeBob" age={30} isStudent={true}/> */}
      {/* <Student name="Patrick" age={35} isStudent={false}/> */}
      <div className="centered">
        <List items={fruits} category="Fruits" />
        <List items={vegetables} category="Vegetables" />
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
