import UsersService from "#root/adaptors/UsersService";

const createUserResolver = async (obj, { email, password }) => {
  return await UsersService.createUser({ email, password });
};

export default createUserResolver;
