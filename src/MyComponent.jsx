import { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(99);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName('Spongebob');
  };

  const incAge = () => {
    if (age < 97) {
      setAge(age + 3);
    }
  };
  const decAge = () => {
    if (age > 0) {
      setAge(age - 3);
    }
  };

  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div className="card">
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incAge}>^</button>
      <button onClick={decAge}>v</button>
      <p>Is Employed: {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={toggleIsEmployed}>Toggle Employed</button>
    </div>
  );
}

export default MyComponent;
