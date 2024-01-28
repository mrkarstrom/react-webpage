import PropTypes from 'prop-types';

function List() {
  const fruits = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical

  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ));
  const listItems2 = lowCalFruits.map((lowCalFruit) => (
    <li key={lowCalFruit.id}>
      {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
    </li>
  ));

  return (
    <>
      <ol>{listItems}</ol>
      <ol>{listItems2}</ol>
    </>
  );
}

List.propTypes = {
  fruits: PropTypes.array,
  listItems: PropTypes.string,
  listItems2: PropTypes.string,
};

export default List;
