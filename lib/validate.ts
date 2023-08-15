export const validate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  zipcode,
  city,
  message,
}: {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  email: string;
  city: string;
  message: string;
}) => {
  const errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    zipcode?: string;
    city?: string;
    message?: string;
  } = {};

  if (!firstName || firstName.trim() === "") {
    errors.firstName = "Du måste fylla i detta fält.";
  }
  if (!lastName || lastName.trim() === "") {
    errors.lastName = "Du måste fylla i detta fält.";
  }
  if (!email || email.trim() === "") {
    errors.email = "Du måste fylla i detta fält.";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    errors.email = "Invalid email address";
  }
  if (!phoneNumber || phoneNumber.trim() === "") {
    errors.phoneNumber = "Du måste fylla i detta fält.";
  }
  if (!address || address.trim() === "") {
    errors.address = "Address is required";
  }
  if (!zipcode || zipcode.trim() === "") {
    errors.zipcode = "Zip Code is required";
  } else if (!/^\d{5}$/.test(zipcode)) {
    errors.zipcode = "Invalid Zip Code";
  }
  if (!city || city.trim() === "") {
    errors.city = "Du måste fylla i detta fält.";
  }
  if (!message || message.trim() === "") {
    errors.message = "Du måste fylla i detta fält.";
  }

  return errors;
};
