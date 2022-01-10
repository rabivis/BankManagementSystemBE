

module.exports = (sequelize, DataTypes) => {
    const Countries = sequelize.define(
        'countries',
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            native: {
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
    Countries.associate = function (models) {
        // associations can be defined here
    };
    return Countries;
};
