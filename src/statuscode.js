import { useSnackbar } from "notistack";

const useStatusResponse = (status, props) => {
  const {
    // message,
    errorMessage,
    // warningMessage,
    infoMessage
    // successMessage
  } = props;
  const { enqueueSnackbar } = useSnackbar();
  switch (status) {
    case 200:
      break;
    case 204:
      enqueueSnackbar(errorMessage ? errorMessage : "No Data Available!", {
        variant: "warning",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
          TransitionsModal: "up",
          TransitionComponent: "slide"
        }
      });
      break;
    case 401:
      if (infoMessage) {
        enqueueSnackbar(infoMessage, {
          variant: "info",
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
            TransitionsModal: "up",
            TransitionComponent: "slide"
          }
        });
      }
      enqueueSnackbar(errorMessage ? errorMessage : "Not Authorized!", {
        variant: "error",
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
          TransitionsModal: "up",
          TransitionComponent: "slide"
        }
      });
      break;
    default:
      break;
  }
};

export default useStatusResponse;
