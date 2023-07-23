import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  iconColor: "white",
  background: "#008f39",
  color: "white",
  customClass: {
    popup: "colored-toast swal2-icon-success",
  },
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const ConfirmPopup = (title) =>
  Swal.mixin({
    title: "Are you sure?",
    text: `You are going to eliminate ${title}`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

export const handleError = (err) =>
  Swal.mixin({
    icon: "error",
    title: "Oops...",
    text: `${err.message} (all fields must be completed)`,
  });
export const handleErrorCategory = (err) =>
  Swal.mixin({
    icon: "error",
    title: "Oops...",
    text: `${err.message} category can't be blank`,
  });

export const handleErrorFetch = (err) =>
  Swal.mixin({
    icon: "error",
    title: "Oops...",
    text: `${err.message}`,
  });
