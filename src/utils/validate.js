
const validationRules = {
  username: /^(?!_)(?!.*__)[a-zA-Z0-9_]{3,20}(?<!_)$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

// method
//inValidate("username",john_doe )
export const inValidate = (name, value) => {
  const regex = validationRules[name];
//   const regex = validationRules[username];
// const regex = /^(?!_)(?!.*__)[a-zA-Z0-9_]{3,20}(?<!_)$/
  if (!regex) return true; // if no rule, treat as valid

  return regex.test(value);
  // return /^(?!_)(?!.*__)[a-zA-Z0-9_]{3,20}(?<!_)$/.test(john_doe);
};