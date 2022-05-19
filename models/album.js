module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      albumTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coverImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      albumKinds: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      style: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      agency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      distributor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      playtime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Album;
};
