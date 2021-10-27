import "./styles.css";

function FruitList({ fruits }) {
  const mapFruits = fruits.map(function (fruit) {
    return <li>{fruit.name}</li>;
  });

  const totalPrice = fruits.reduce((acc, fruit) => acc + fruit.price, 0);

  return (
    <div className="tableFruits">
      <h1>Preço Total = {totalPrice}</h1>
      <ul>{mapFruits}</ul>
    </div>
  );
}

export default FruitList;
