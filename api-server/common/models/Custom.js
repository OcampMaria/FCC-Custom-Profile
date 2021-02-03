'use strict';

module.exports = function(sequelize, DataTypes) {
  const customProfile = sequelize.define('Custom Profile', {
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fonts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  customProfile.associate = function (models) {
    // associations can be defined here
    customProfile.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  return customProfile;
}