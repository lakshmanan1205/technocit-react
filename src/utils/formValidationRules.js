export const RULE_NAME = {
  required: "Name is required",
};

export const RULE_EMAIL = {
  required: "Email is required",
  pattern: {
    value: /\S+@\S+\.\S+/,
    message: "Enter valid email address",
  },
};

export const RULE_PASSWORD = {
  required: "Password is required",
  minLength: { value: 6, message: "Minimum 6 charactors required" },
  maxLength: { value: 16, message: "Maximum 16 charactors only" },
};

export const RULE_CONFIRM_PASSWORD = {
  required: "Confirm your Password",
  //   validate: (value) => value === password || "Passwords do not match",
};

export const RULE_ROLE = {
  required: "Role is required",
  minLength: { value: 5, message: "Minimum 5 charactors required" },
  maxLength: { value: 16, message: "Maximum 16 charactors only" },
};

export const RULE_MOBILE = {
  required: "Mobile Number is required",
  minLength: { value: 10, message: "Minimum 10 charactors required" },
};

export const RULE_DOB = {
  required: "Date of birth is required",
};

export const RULE_SPORT_ID = {
  required: "Sport ID is required",
  maxLength: { value: 6, message: "Maximum 6 charactors only" },
};

export const RULE_MACHINE_ID = {
  required: "Machine ID is required",
  minLength: { value: 4, message: "Minimum 4 charactors required" },
  maxLength: { value: 8, message: "Maximum 8 charactors only" },
};
export const RULE_EXPERIENCE = {
  required: "Experience is required",
};
