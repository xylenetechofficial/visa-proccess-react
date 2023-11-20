import swal from "sweetalert";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


export const showMessage = (message?: any, timer?: number, status?: number) => {
  if (!timer) {
    timer = 3000;
  }

  if (!message) {
    console.log(status)
    toast.error(message, { theme: "colored" })

    // swal({
    //   title: "",
    //   text: "Internal Server Error!",
    //   timer: timer,
    // });
    return;
  }
  toast.success(message, { theme: "colored" })
  // swal({
  //   title: "",
  //   text: `${message}`,
  //   timer: timer,
  // });

  return;
};
export const showMessage_v2 = (props: { message?: any, timer?: number, status?: number }) => {
  if (!props.timer) {
    props.timer = 3000;
  }

  if (!props.message) {
    toast.error(props.message, { theme: "colored" })
    return;
  }
  console.log(props.message);   // Only Dev
  props.status = props.status ?? 0
  if ((props.status > 199) && (props.status < 300)) {
    // okay
    toast.success(props.message, { theme: "colored" })

    return;
  } else if ((props.status > 399) && (props.status < 500)) {
    // warnning
    toast.warning(props.message, { theme: "colored" })
    return;

  } else if ((props.status > 499) && (props.status < 600)) {
    // error
    toast.error(props.message + " Error", { theme: "colored" })
    return;
  }

  return;
};

export const confirmationMessage = (message: any) => {
  return swal({
    text: `${message}`,
    icon: "warning",
    // buttons: true,
    dangerMode: true,
  });
};
export const confirmationMessagealert = (message: any) => {
  return swal({
    title: "Are you sure?",
    text: "You will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: [
      'No, cancel it!',
      'Yes, I am sure!'
    ],
    dangerMode: true,
  }).then(function(isConfirm) {
    if (isConfirm) {
      swal({
        title: 'Shortlisted!',
        text: 'Candidates are successfully shortlisted!',
        icon: 'success'
      }).then(function() {
        console.log('hi')
      });
    } else {
      swal("Cancelled", "Your imaginary file is safe :)", "error");
    }
  });
};