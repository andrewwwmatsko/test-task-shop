import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import toast, { ToastBar, Toaster } from "react-hot-toast";

const ProductsPage = lazy(() =>
  import("../../pages/ProductsPage/ProductsPage")
);
const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage"));

import Layout from "../Layout/Layout";
import AppBar from "../AppBar/AppBar";

import { IoCloseCircleSharp } from "react-icons/io5";

export default function App() {
  return (
    <Layout>
      <AppBar />

      <Suspense fallback={<p>Loading, please wait</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Toaster>
        {(t) => (
          <ToastBar toast={t}>
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button onClick={() => toast.dismiss(t.id)}>
                    <IoCloseCircleSharp />
                  </button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </Layout>
  );
}
