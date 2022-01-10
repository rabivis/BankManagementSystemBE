

module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('Users', 'userName', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'address', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'country', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'state', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'contactNo', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'dateOfBirth', {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    }),
    queryInterface.addColumn('Users', 'accountType', {
      type: Sequelize.ENUM,
      values: [
          'salary',
          'saving',
      ],
      defaultValue: 'saving',
    }),
    queryInterface.addColumn('Users', 'branchName', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'initialDepositAmount', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    }),
    queryInterface.addColumn('Users', 'identificationProofType', {
      type: Sequelize.STRING,
      defaultValue: null,
    }),
    queryInterface.addColumn('Users', 'identificationDocumentNo', {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn('Users', 'userName'),
    queryInterface.removeColumn('Users', 'address'),
    queryInterface.removeColumn('Users', 'country'),
    queryInterface.removeColumn('Users', 'state'),
    queryInterface.removeColumn('Users', 'contactNo'),
    queryInterface.removeColumn('Users', 'dateOfBirth'),
    queryInterface.removeColumn('Users', 'accountType'),
    queryInterface.removeColumn('Users', 'branchName'),
    queryInterface.removeColumn('Users', 'initialDepositAmount'),
    queryInterface.removeColumn('Users', 'identificationProofType'),
    queryInterface.removeColumn('Users', 'identificationDocumentNo'),
  ]),
};
