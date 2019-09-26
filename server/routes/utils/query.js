const makeDataUpdateQuery = (reqParams, reqBody) => {
  const { pk, tableName } = reqParams;
  const dataToUpdate = reqBody;
  let subQuery = '';
  const subQueryDummyLength = 2;

  for (let field of Object.keys(dataToUpdate)) {
    if (field === 'is_superuser') {
      subQuery += `${field} = ${!!(dataToUpdate[field])}, `
    } else {
      subQuery += `${field} = '${dataToUpdate[field]}', `;
    }
  }
  if (!Object.keys(dataToUpdate).includes('is_superuser')) {
    subQuery += 'is_superuser = false, '
  }
  subQuery = subQuery.substring(0, subQuery.length - subQueryDummyLength);
  return `UPDATE ${tableName} SET ${subQuery} WHERE pk=${pk};`
};

module.exports = {
  makeDataUpdateQuery,
};