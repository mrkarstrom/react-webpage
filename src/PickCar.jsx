import React, { useState } from 'react';

function PickCar() {
  const [car, setCar] = useState({
    year: 2024,
    make: 'Ford',
    model: 'Mustang',
  });

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }

  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }

  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <div className="card">
      <p>
        Your favourit car is: {car.year} {car.make} {car.model}
      </p>
        <p>
          Year:
          <input type="number" value={car.year} onChange={handleYearChange} />
        </p>
        <p>
          Make:
          <input type="text" value={car.make} onChange={handleMakeChange} />
        </p>
        <p>
        Model:
        <input type="text" value={car.model} onChange={handleModelChange} />
        </p>
    </div>
  );
}

export default PickCar;
