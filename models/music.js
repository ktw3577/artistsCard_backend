module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define(
    "Music",
    {
      musicTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      musicUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Music;
};
