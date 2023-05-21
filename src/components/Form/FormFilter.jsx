import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";

import { SubmitBtn } from "./FormFilter.styled";

const FormFilter = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ cardsfilter: "all" }} onSubmit={onSubmit}>
      <Form>
        <Field as="select" name="cardsfilter">
          <option value="all">All</option>
          <option value="follow">Follow</option>
          <option value="following">Following</option>
        </Field>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </Form>
    </Formik>
  );
};

export default FormFilter;

FormFilter.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
