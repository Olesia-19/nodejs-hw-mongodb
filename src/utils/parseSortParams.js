const parseSortOrder = (value) => {
  if (value !== 'asc' && value !== 'desc') {
    return 'asc';
  }

  return value;
};

const parseSortBy = (value) => {
  const keysOfContacts = [
    '_id',
    'name',
    'phoneNumber',
    'email',
    'isFavourite',
    'contactType',
  ];

  if (!keysOfContacts.includes(value)) {
    return '_id';
  }

  return value;
};

export const parseSortParams = (query) => {
  const { sortOrder, sortBy } = query;

  const parsedSortOrder = parseSortOrder(sortOrder);
  const parsedSortBy = parseSortBy(sortBy);

  return {
    sortOrder: parsedSortOrder,
    sortBy: parsedSortBy,
  };
};
