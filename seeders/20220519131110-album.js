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
    await queryInterface.bulkInsert("Albums", [
      {
        albumTitle: "PSY9TH",
        coverImage:
          "https://image.bugsm.co.kr/album/images/original/204651/20465114.jpg?version=undefined",
        artist: "PSY",
        albumKinds: "정규",
        genre: "댄스/팝, 랩/힙합, 알앤비/소울",
        style: "댄스 팝, 알앤비, 힙합",
        agency: "P NATION",
        distributor: "Dreamus",
        playtime: "41:15",
      },
      {
        albumTitle: "LILAC",
        coverImage:
          "https://image.bugsm.co.kr/album/images/original/40271/4027185.jpg?version=undefined",
        artist: "아이유(IU)",
        albumKinds: "정규",
        genre: "댄스/팝, 발라드, 알앤비/소울",
        style: "발라드, 댄스 팝, 알앤비",
        agency: "EDAM엔터테인먼트",
        distributor: "카카오엔터테인먼트",
        playtime: "36:27",
      },
      {
        albumTitle: "Seoul",
        coverImage:
          "https://image.bugsm.co.kr/album/images/original/40742/4074262.jpg?version=undefined",
        artist: "볼빤간사춘기",
        albumKinds: "EP(미니)",
        genre: "인디, 포크/어쿠스틱",
        style: "인디 팝, 포크 팝",
        agency: "쇼파르엔터테인먼트",
        distributor: "NHN벅스",
        playtime: "15:47",
      },
    ]);
  },
};
