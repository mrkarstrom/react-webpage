import { useState } from 'react';

function MyComponent() {
  const [name, setName] = useState('Guest');
  const [age, setAge] = useState(99);

  const updateName = () => {
    setName('Spongebob');
  };

  const incAge = () => {
    if (age < 100) {
      setAge(age + 1);
    }
  };
  const decAge = () => {
    if (age > 0) {
      setAge(age - 1);
    }
  };

  return (
    <div className="card">
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incAge}>^</button>
      <button onClick={decAge}>v</button>
    </div>
  );
}

export default MyComponent;
