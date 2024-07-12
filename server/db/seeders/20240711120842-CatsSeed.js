'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Cats', [
      {
        "name": "Мистик Усатик",
        "catClass": "intuition",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/4kogyDO7qPJW",
        "place": "Волшебный лес",
        "price": 1,
        "userId": 1
    },
    {
        "name": "Теневой лапка",
        "catClass": "dark",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/4pom13MKboZL",
        "place": "Мир теней",
        "price": 1,
        "userId": 1
    },
    {
        "name": "Огненный хвост",
        "catClass": "fire",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/WVo1bRvMZN1X",
        "place": "Вулканическая пещера",
        "price": 1,
        "userId": 1
    },
    {
        "name": "Морской Пушистик",
        "catClass": "water",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/B0NyKGMpd8GO",
        "place": "Мистическое озеро",
        "price": 1,
        "userId": 1
    },
    {
        "name": "Звездный взор",
        "catClass": "intuition",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/bONObYQygo6K",
        "place": "Небесная вершина",
        "price": 2,
        "userId": 1
    },
    {
        "name": "Лунный коготь",
        "catClass": "dark",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/B0NyKG90D8GO",
        "place": "Лунная роща",
        "price": 2,
        "userId": 1
    },
    {
        "name": "Острие пламени",
        "catClass": "fire",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/VdNWGJXZxNZb",
        "place": "Долина Заката",
        "price": 2,
        "userId": 1
    },
    {
        "name": "Рябушка",
        "catClass": "water",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/51NLepgQzPkw",
        "place": "Кристальная лагуна",
        "price": 2,
        "userId": 1
    },
    {
        "name": "Жаркий светлячок",
        "catClass": "fire",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/XDPApmbV4Nlw",
        "place": "Дымящиеся пики",
        "price": 3,
        "userId": 1
    },
    {
        "name": "Темный Мур",
        "catClass": "dark",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/Y6PxrYQDgolq",
        "place": "Пещера затмения",
        "price": 3,
        "userId": 1
    },
    {
        "name": "Мерцающий Мяу",
        "catClass": "intuition",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/WVo1bRqkpN1X",
        "place": "Лабиринт сакуры",
        "price": 3,
        "userId": 1
    },
    {
        "name": "Миракл",
        "catClass": "water",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/5DopyM4bvNO3",
        "place": "Малахитовая бухта",
        "price": 3,
        "userId": 1
    }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Cats', null, {});
     
  }
};
