export const validateForm = (formData) => {
    let errors = {};

    // Name
    if (!formData.name.trim()) {
        errors.name = "Name is required";
    } else if (formData.name.length < 3) {
        errors.name = "Name must be at least 3 characters";
    }

    // Email
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = "Enter a valid email";
    }

    // Password
    if (!formData.password) {
        errors.password = "Password is required";
    } else if (formData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

   // Phone Number
   if (!formData.phone_number.trim()) {
    errors.phone_number = "phone number number is required";
   } else if (!/^[6-9][0-9]{9}$/.test(formData.phone_number)) {
    errors.phone_number = "phone number number must be 10 digits and start with 6-9";
   }
    return errors;
};