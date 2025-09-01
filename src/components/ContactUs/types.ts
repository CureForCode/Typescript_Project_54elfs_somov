export enum CONTACT_US_FIELDS {
  FULL_NAME = "fullName",
  PHONE = "phone",
  EMAIL = "email",
}

export type ContactUsValues = {
  [CONTACT_US_FIELDS.FULL_NAME]: string;
  [CONTACT_US_FIELDS.PHONE]: string;
  [CONTACT_US_FIELDS.EMAIL]: string;
};
