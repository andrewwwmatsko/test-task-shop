import Product from "../Product/Product";
import css from "./ProductList.module.css";

export default function ProductList({ products }) {
  return (
    <ul className={css.list}>
      {products.map((product) => {
        return (
          <li key={product.id} className={css.item}>
            <Product product={product} />
          </li>
        );
      })}
    </ul>
  );
}
