
const validationRules = {
  username: /^(?!_)(?!.*__)[a-zA-Z0-9_]{3,20}(?<!_)$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export const inValidate = (name, value) => {
  const regex = validationRules[name];

  if (!regex) return true;

  return regex.test(value);

};