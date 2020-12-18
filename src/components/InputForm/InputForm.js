import React from "react";
import { Field, reduxForm } from "redux-form";

const InputForm = (props) => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="name" name="name" component="input" type="text" />
      </div>
      <div>
        <Field
          placeholder="description"
          name="description"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field
          placeholder="quantity"
          name="quantity"
          component="input"
          type="text"
        />
      </div>
      <div>
        <Field placeholder="image" name="img" component="input" type="text" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

const ReduxInputFrom = reduxForm({ form: "productDescription" })(InputForm);

export default ReduxInputFrom;
