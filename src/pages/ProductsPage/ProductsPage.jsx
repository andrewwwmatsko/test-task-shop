import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/operations";

import { selectProducts } from "../../redux/products/selectors";

import ProductList from "../../components/ProductList/ProductList";
import Layout from "../../components/Layout/Layout";
import ModalAddForm from "../../components/ModalAddForm/ModalAddForm";

import css from "./ProductsPage.module.css";
import { Button, useDisclosure } from "@nextui-org/react";
import SelectFilter from "../../components/SelectFilter/SelectFilter";

export default function ProductsPage() {
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <main>
      <section className={css.section}>
        <Layout>
          <div className="flex gap-10 justify-end">
            <Button
              onClick={handleOpen}
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg my-0 mx-auto mb-12 block"
            >
              Add Product
            </Button>
            <SelectFilter />
          </div>

          {products.length > 0 && <ProductList products={products} />}
          <ModalAddForm isOpen={isOpen} onClose={onClose} />
        </Layout>
      </section>
    </main>
  );
}
