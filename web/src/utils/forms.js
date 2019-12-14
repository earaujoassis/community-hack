const extractDataForm = (form, attributes) => {
  const data = {};
  for (let attr of attributes) {
    data[attr] = form.querySelectorAll(`[name='${attr}']`)[0].value;
  }

  return data;
};

export { extractDataForm };
