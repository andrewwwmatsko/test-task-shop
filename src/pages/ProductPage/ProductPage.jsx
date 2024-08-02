import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCurrentProduct } from "../../redux/products/selectors";
import { fetchProductById } from "../../redux/products/operations";

import { Button } from "@mui/material";

import css from "./ProductPage.module.css";

export default function ProductPage() {
  const product = useSelector(selectCurrentProduct);
  const { imageUrl, name, count, size, weight, comments, id } = product;

  const { productId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  return (
    <main>
      <section className="py-16 flex gap-8 font-semibold">
        <div className={css.container}>
          <img src={imageUrl} alt={name} className={css.image} width={700} />
          <div className="flex flex-col items-start justify-between">
            <div>
              <h2 className="text-2xl mb-8">{name}</h2>

              <p className="text-md font-normal mb-1">Count: {count}</p>

              <p className="text-md font-normal mb-1">
                Size:{" "}
                <span>
                  width - {size.width}, heigth - {size.height}
                </span>
              </p>

              <p className="text-md font-normal mb-1">Weight: {weight}g</p>
            </div>

            <Button
              color="secondary"
              sx={{
                marginBottom: 2,
              }}
            >
              Show comments
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
