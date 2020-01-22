import ListingsService from "#root/adaptors/ListingsService";

const createListingResolver = async (obj, { description, title }, context) => {
  if (!context.res.locals.userSession) throw new Error("Not logged in!");
  return ListingsService.createListing({ description, title });
};

export default createListingResolver;
