

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      profilePic: {
        type: DataTypes.STRING,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      verifyToken: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      userName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      address: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      country: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      state: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      contactNo: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      accountType: {
        type: DataTypes.ENUM,
        values: [
          'salary',
          'saving',
      ],
        defaultValue: 'saving',
      },
      branchName: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      initialDepositAmount: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
      identificationProofType: {
        type: DataTypes.STRING,
        defaultValue: null,
      },
      identificationDocumentNo: {
        type: DataTypes.INTEGER,
        defaultValue: null,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ['password', 'verifyToken', 'isAdmin'] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ['password', 'verifyToken', 'isAdmin'] },
        },
      },
    },
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
