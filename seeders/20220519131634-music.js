"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Music", [
      {
        AlbumId: 1,
        musicTitle: "Fade-NCS Release",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
      },
      {
        AlbumId: 1,
        musicTitle: "On & On (feat. Daniel Levi) [NCS Release]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3",
      },
      {
        AlbumId: 1,
        musicTitle: "Blank [NCS Release]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741669588205598/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3",
      },
      {
        AlbumId: 2,
        musicTitle: "Nekozilla [NCS Release]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
      },
      {
        AlbumId: 2,
        musicTitle: "Landscape (Vlog No Copyright Music)",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741839517024256/Jarico_-_Landscape_NCS_BEST_OFMP3_160K.mp3",
      },
      {
        AlbumId: 2,
        musicTitle: "Link [NCS Release]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741840224813096/Jim_Yosef_-_Link_NCS_ReleaseMP3_160K.mp3",
      },
      {
        AlbumId: 3,
        musicTitle: "Sky High [NCS Release]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3",
      },
      {
        AlbumId: 3,
        musicTitle: "Where'd You Go (feat. Luna Lark) [NCS Release]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3",
      },
      {
        AlbumId: 3,
        musicTitle: "Island [NCS BEST OF]",
        musicUrl:
          "https://cdn.discordapp.com/attachments/775740994595323954/775741836840665158/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
