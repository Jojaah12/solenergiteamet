export const validate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  zip,
  city,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  zip: string;
  city: string;
  message: string;
}) => {
  const errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
    zip?: string;
    city?: string;
    message?: string;
  } = {};

  // Validate firstName field
  if (!firstName?.trim()) {
    errors.firstName = "First Name is required";
  }

  // Validate lastName field
  if (!lastName?.trim()) {
    errors.lastName = "Last Name is required";
  }

  // Validate email field
  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
  ) {
    errors.email = "Invalid email address";
  }

  // Validate phoneNumber field
  if (!phoneNumber?.trim()) {
    errors.phoneNumber = "Phone Number is required";
  } else if (!/^\d{10}$/i.test(phoneNumber)) {
    errors.phoneNumber = "Invalid phone number";
  }

  // Validate address field
  if (!address?.trim()) {
    errors.address = "Address is required";
  }

  // Validate zip field
  if (!zip?.trim()) {
    errors.zip = "ZIP Code is required";
  } else if (!/^\d{5}$/.test(zip)) {
    errors.zip = "ZIP Code must be exactly 5 digits";
  }

  // Validate city field
  if (!city?.trim()) {
    errors.city = "City is required";
  }

  // Validate message field
  if (!message?.trim()) {
    errors.message = "Message is required";
  }

  return errors;
};
