import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import {
  form,
  inputWrapper,
  input,
  errorMessage,
} from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};
const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    addContact(prevContacts => [...prevContacts, { ...values, id: nanoid() }]);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={form}>
        <div className={inputWrapper}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={input} />
          <ErrorMessage name="name" component="div" className={errorMessage} />
        </div>
        <div className={inputWrapper}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberFieldId}
            className={input}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={errorMessage}
          />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
