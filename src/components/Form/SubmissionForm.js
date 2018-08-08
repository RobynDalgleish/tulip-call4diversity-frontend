import React from "react";
import { Field, reduxForm } from "redux-form";
import { StyledTextField } from "./TextInput";
<<<<<<< HEAD
=======
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
>>>>>>> 32569958537720aa9437efc419489d8fd6eb533e
import Button from "@material-ui/core/Button";
import "react-widgets/dist/css/react-widgets.css";
import Moment from "moment";
import momentLocalizer from "react-widgets-moment";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

Moment.locale("en");
momentLocalizer();

export const SubmissionForm = props => (
  <form action="">
    <Field
      name="name"
      component={StyledTextField}
      type="text"
      label="Event Name"
    />
    <Field
      name="website"
      component={StyledTextField}
      type="text"
      label="Event Website"
    />
    {/* Date Picker */}
<<<<<<< HEAD
=======
    {/* testing */}
>>>>>>> 32569958537720aa9437efc419489d8fd6eb533e
    <DateTimePicker />
    <Field
      name="location"
      component={StyledTextField}
      type="text"
      label="Event Location"
    />
    <Button
      type="submit"
      disabled={props.pristine || props.submitting}
      variant="contained"
      color="primary"
    >
      Submit Event
    </Button>
    <Button
      type="button"
      disabled={props.pristine || props.submitting}
      onClick={props.reset}
      variant="contained"
      color="grey"
    >
      Clear Values
    </Button>
  </form>
);

export const ReduxFormMaker = ({ name, formComponent, ...restProps }) => {
  const MyForm = reduxForm({ form: name })(formComponent);
  return <MyForm {...restProps} />;
};
