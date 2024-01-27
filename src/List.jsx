import PropTypes from 'prop-types';

function List() {
  const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple'];

  const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  return <ul>{listItems}</ul>;
}

List.propTypes = {
  fruits: PropTypes.array,
  listItems: PropTypes.string,
};

export default List;
