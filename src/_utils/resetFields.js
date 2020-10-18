export default (field, resetFields, reset, getValues) => (name) => {
  if (name === field) {
    reset({ ...getValues(), ...resetFields });
  }
};
