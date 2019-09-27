const dataUpdateQuery = (reqParams, reqBody) => {
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

const getTableFieldList = (tableName) => {
  return `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '${tableName}' ORDER BY ORDINAL_POSITION`
};

const getTableList = () => {
  return `SHOW TABLES;`
};

const getSingleData = (tableName, pk) => {
  return `SELECT * FROM ${tableName} WHERE pk=${pk};`
};

const getTable = (tableName) => {
  return `SELECT * FROM ${tableName};`
};

module.exports = {
  dataUpdateQuery,
  getTableFieldList,
  getTableList,
  getSingleData,
  getTable
};