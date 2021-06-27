import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const meals = [
    { title: 'Turte', description: 'Turte de casa', price: 6, id: 1 },
    {
      title: 'Clatite',
      description: 'Clatite cu faina de cocos si sirop the artar',
      price: 15,
      id: 2,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {meals.map((meal) => {
          return <ProductItem meal={meal} key={meal.id} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
