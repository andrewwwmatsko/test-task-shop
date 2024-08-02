import toast from "react-hot-toast";

export const notifyOnProductRemove = () =>
  toast.success("Contact removed", {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "red",
    },
    iconTheme: {
      primary: "red",
      secondary: "#fff",
    },
  });

export const notifyOnProductAdd = () => toast.success("Contact created!");

export const notifyOnError = (message) =>
  toast.error(`${message}. Please try again.`, {
    duration: 8000,
  });
