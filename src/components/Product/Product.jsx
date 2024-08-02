import { Link } from "react-router-dom";

import { Card, CardBody, CardHeader, useDisclosure } from "@nextui-org/react";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/products/operations";

import ModalComponent from "../ModalComponent/ModalComponent";

export default function Product({ product: { imageUrl, name, id, count } }) {
  const dispatch = useDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDelete = () => {
    onOpen();
  };

  const onDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex items-center justify-between">
        <Link to={`/products/${id}`}>
          <p className="text-md font-semibold">{name}</p>
          <p className="text-md font-semibold">{count}</p>
        </Link>

        <IconButton
          aria-label="delete"
          className="shrink-0"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </CardHeader>
      <Link to={`/products/${id}`}>
        <CardBody>
          <img
            src={imageUrl}
            alt={name}
            width={276}
            height={207}
            className="text-2xl"
          />
        </CardBody>
      </Link>
      <ModalComponent isOpen={isOpen} onClose={onClose} onDelete={onDelete} />
    </Card>
  );
}
