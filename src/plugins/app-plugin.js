//import PerfectScrollbar from "./assets/js/perfect-scrollbar.jquery.min.js";
import ValidateForm from "./assets/js/jquery.validate.min.js";

export default {
  install(app) {
    app.use(ValidateForm);
  },
};