import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CONTACT_US_FIELDS, type ContactUsValues } from "./types";
import { ContactFormContainer, InputsContainer, Title } from "./styles";

const schema = Yup.object({
  [CONTACT_US_FIELDS.FULL_NAME]: Yup.string()
    .required("Full name is required")
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters"),
  [CONTACT_US_FIELDS.PHONE]: Yup.string()
    .required("Phone is required")
    .min(4, "Minimum 4 characters")
    .max(20, "Maximum 20 characters"),

  [CONTACT_US_FIELDS.EMAIL]: Yup.string()
    .trim()
    .email("Invalid email format")
    .min(6, "Minimum 6 characters")
    .max(60, "Maximum 60 characters")
    .notRequired(),
});

function ContactUs() {
  const formik = useFormik<ContactUsValues>({
    initialValues: {
      [CONTACT_US_FIELDS.FULL_NAME]: "",
      [CONTACT_US_FIELDS.PHONE]: "",
      [CONTACT_US_FIELDS.EMAIL]: "",
    },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        console.log("CONTACT_US_SUBMIT:", values);
        resetForm();
      } finally {
        setSubmitting(false);
      }
    },
  });

  const fullNameError =
    formik.touched[CONTACT_US_FIELDS.FULL_NAME] &&
    formik.errors[CONTACT_US_FIELDS.FULL_NAME]
      ? formik.errors[CONTACT_US_FIELDS.FULL_NAME]
      : undefined;

  const phoneError =
    formik.touched[CONTACT_US_FIELDS.PHONE] &&
    formik.errors[CONTACT_US_FIELDS.PHONE]
      ? formik.errors[CONTACT_US_FIELDS.PHONE]
      : undefined;

  const emailError =
    formik.touched[CONTACT_US_FIELDS.EMAIL] &&
    formik.errors[CONTACT_US_FIELDS.EMAIL]
      ? formik.errors[CONTACT_US_FIELDS.EMAIL]
      : undefined;

  return (
    <ContactFormContainer onSubmit={formik.handleSubmit} noValidate>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="fullName-id"
          name={CONTACT_US_FIELDS.FULL_NAME}
          placeholder="Your full name"
          label="Full name*"
          value={formik.values[CONTACT_US_FIELDS.FULL_NAME]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={fullNameError}
        />
        <Input
          id="phone-id"
          name={CONTACT_US_FIELDS.PHONE}
          placeholder="Your phone number"
          label="Phone*"
          value={formik.values[CONTACT_US_FIELDS.PHONE]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={phoneError}
        />
        <Input
          id="email-id"
          name={CONTACT_US_FIELDS.EMAIL}
          type="email"
          placeholder="Your email"
          label="Email"
          value={formik.values[CONTACT_US_FIELDS.EMAIL]}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={emailError}
        />
      </InputsContainer>
      <Button
        name={formik.isSubmitting ? "SENDING..." : "SEND REQUEST"}
        type="submit"
        disabled={formik.isSubmitting || !formik.isValid}
      />
    </ContactFormContainer>
  );
}

export default ContactUs;
