import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectCurrentProduct } from "../../redux/products/selectors";
import { fetchProductById } from "../../redux/products/operations";

import { Button, IconButton } from "@mui/material";
import { MdEdit } from "react-icons/md";

import css from "./ProductPage.module.css";
import EditModal from "../../components/EditModal/EditModal";
import { useDisclosure } from "@nextui-org/react";

export default function ProductPage() {
  const product = useSelector(selectCurrentProduct);

  const { productId } = useParams();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    onOpen();
  };

  useEffect(() => {
    dispatch(fetchProductById(productId));
  }, [dispatch, productId]);

  return (
    <main>
      {product && (
        <section className="py-16 flex gap-8 font-semibold">
          <div className={css.container}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={css.image}
              width={700}
            />
            <div className="flex flex-col items-start justify-between ">
              <div>
                <div className="mb-8 flex justify-between items-center">
                  <h2 className="text-2xl ">{product.name}</h2>
                  <IconButton aria-label="edit" onClick={handleOpenModal}>
                    <MdEdit aria-label="delete" />
                  </IconButton>
                </div>

                <p className="text-md font-normal mb-1">
                  Count: {product.count}
                </p>

                <p className="text-md font-normal mb-1">
                  Size:{" "}
                  <span>
                    width - {product.size.width}, heigth - {product.size.height}
                  </span>
                </p>

                <p className="text-md font-normal mb-1">
                  Weight: {product.weight}g
                </p>
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
      )}
      {/* <EditModal isOpen={isOpen} onClose={onClose} /> */}
    </main>
  );
}
