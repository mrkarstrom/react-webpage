import PropTypes from 'prop-types';

function List(props) {
  const category = props.category;

  const itemList = props.items;

  // items.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  //   items.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical

  const lowCalFruits = itemList.filter((item) => item.calories < 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name} : &nbsp; <b>{item.calories}</b>
    </li>
  ));
  // const listItems2 = lowCalFruits.map((lowCalFruit) => (
  //   <li key={lowCalFruit.id}>
  //     {lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b>
  //   </li>
  // ));

  return (
    <div className="card list">
      <h3>{category}</h3>
      <ol>{listItems}</ol>
      {/* <ol>{listItems2}</ol> */}
    </div>
  );
}

List.propTypes = {
  itemList: PropTypes.array,
  listItems: PropTypes.string,
  listItems2: PropTypes.string,
};

export default List;
