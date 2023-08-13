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
    errors.firstName = "First Name is required";
  }
  if (!lastName || lastName.trim() === "") {
    errors.lastName = "Last Name is required";
  }
  if (!email || email.trim() === "") {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    errors.email = "Invalid email address";
  }
  if (!phoneNumber || phoneNumber.trim() === "") {
    errors.phoneNumber = "Phone Number is required";
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
    errors.city = "City is required";
  }
  if (!message || message.trim() === "") {
    errors.message = "Message is required";
  }

  return errors;
};
