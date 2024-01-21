import Card from './Card';
import Button from './Button/Button';
import Button2 from './Button2';
import Student from './Student';

function App() {
  return (
    <>
      <Card />
      <Card />
      <Button></Button>
      <Button2 />
      <Student name="SpongeBob" age={30} isStudent={true}/>
    </>
  );
}

export default App;
