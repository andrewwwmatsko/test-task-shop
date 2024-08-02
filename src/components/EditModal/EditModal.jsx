import { useFormik } from "formik";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { TextField } from "@mui/material";

import * as Yup from "yup";

import LoadingButton from "@mui/lab/LoadingButton";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCurrentProduct,
  selectLoading,
} from "../../redux/products/selectors";

import { addProduct } from "../../redux/products/operations";

import css from "./EditModal.module.css";

export default function EditModal({ isOpen, onClose }) {
  const loading = useSelector(selectLoading);
  const { name } = useSelector(selectCurrentProduct);

  const dispatch = useDispatch();

  const ValidationSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
      imageUrl: Yup.string().required("Required"),
      count: Yup.number().required("Required"),
      width: Yup.number().required("Required"),
      height: Yup.number().required("Required"),
      weight: Yup.number().required("Required"),
    },
    { strict: true }
  );

  const formik = useFormik({
    initialValues: {
      name: { name },
      imageUrl: "",
      count: 0,
      width: 0,
      height: 0,
      weight: 0,
    },

    validationSchema: ValidationSchema,
    onSubmit: (values, action) => {
      dispatch(
        addProduct({
          ...values,
          size: {
            width: values.weight,
            height: values.height,
          },
        })
      );
      action.resetForm();
      onClose();
    },
  });

  return (
    <Modal
      backdrop={"blur"}
      placement="center"
      isOpen={isOpen}
      onClose={onClose}
      className={css.container}
      classNames={{
        footer: "mt-4",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody>
              <form onSubmit={formik.handleSubmit} className={css.form}>
                <ModalHeader className="">
                  <h2 className="font-mono mb-4 text-2xl">Add product</h2>
                </ModalHeader>
                <div>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />

                  <TextField
                    fullWidth
                    id="imageUrl"
                    name="imageUrl"
                    label="Image"
                    value={formik.values.imageUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.imageUrl && Boolean(formik.errors.imageUrl)
                    }
                    helperText={
                      formik.touched.imageUrl && formik.errors.imageUrl
                    }
                  />

                  <TextField
                    fullWidth
                    id="count"
                    name="count"
                    label="Count"
                    type="number"
                    value={formik.values.count}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.count && Boolean(formik.errors.count)}
                    helperText={formik.touched.count && formik.errors.count}
                  />

                  <TextField
                    fullWidth
                    id="width"
                    name="width"
                    label="Width"
                    type="number"
                    value={formik.values.width}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.width && Boolean(formik.errors.width)}
                    helperText={formik.touched.width && formik.errors.width}
                  />

                  <TextField
                    fullWidth
                    id="height"
                    name="height"
                    label="Height"
                    type="number"
                    value={formik.values.height}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.height && Boolean(formik.errors.height)
                    }
                    helperText={formik.touched.height && formik.errors.height}
                  />

                  <TextField
                    fullWidth
                    id="weight"
                    name="weight"
                    label="Weight"
                    type="number"
                    value={formik.values.weight}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.weight && Boolean(formik.errors.weight)
                    }
                    helperText={formik.touched.weight && formik.errors.weight}
                  />
                </div>
                <ModalFooter>
                  <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button>

                  <LoadingButton
                    type="submit"
                    size="small"
                    loading={loading}
                    loadingIndicator="Loading…"
                    variant="contained"
                    color="success"
                    className={css.button}
                    sx={{
                      fontSize: 16,
                    }}
                  >
                    <span>Add </span>
                  </LoadingButton>
                </ModalFooter>
              </form>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
