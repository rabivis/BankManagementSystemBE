

module.exports = (sequelize, DataTypes) => {
    const States = sequelize.define(
        'states',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            country_code: {
                type: DataTypes.STRING,
            },
            iso2: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamps: false
        }
    );
    States.associate = function (models) {
        // associations can be defined here
    };
    return States;
};
