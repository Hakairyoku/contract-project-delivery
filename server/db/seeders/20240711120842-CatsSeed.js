'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Cat', [
      {
        "name": "Мистик Усатик",
        "class": "intuition",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/4kogyDO7qPJW",
        "place": "Волшебный лес",
        "price": 1
    },
    {
        "name": "Теневой лапка",
        "class": "dark",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/4pom13MKboZL",
        "place": "Мир теней",
        "price": 1
    },
    {
        "name": "Огненный хвост",
        "class": "fire",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/WVo1bRvMZN1X",
        "place": "Вылканическая пещера",
        "price": 1
    },
    {
        "name": "Морской Пушистик",
        "class": "water",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/B0NyKGMpd8GO",
        "place": "Мистическое озеро",
        "price": 1
    },
    {
        "name": "Звездный взор",
        "class": "intuition",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/bONObYQygo6K",
        "place": "Небесная вершина",
        "price": 2
    },
    {
        "name": "Лунный коготь",
        "class": "dark",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/B0NyKG90D8GO",
        "place": "Лунная роща",
        "price": 2
    },
    {
        "name": "Острие пламени",
        "class": "fire",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/VdNWGJXZxNZb",
        "place": "Долина Заката",
        "price": 2
    },
    {
        "name": "Рябушка",
        "class": "water",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/51NLepgQzPkw",
        "place": "Кристальная лагуна",
        "price": 2
    },
    {
        "name": "Жаркий светлячок",
        "class": "fire",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/XDPApmbV4Nlw",
        "place": "Дымящиеся пики",
        "price": 3
    },
    {
        "name": "Темный Мур",
        "class": "dark",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/Y6PxrYQDgolq",
        "place": "Пещера затмения",
        "price": 3
    },
    {
        "name": "Мерцающий Мяу",
        "class": "intuition",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/WVo1bRqkpN1X",
        "place": "Лабиринт сакуры",
        "price": 3
    },
    {
        "name": "Миракл",
        "class": "water",
        "img": "https://api.neuro-holst.ru/api/v1/image/share/render/5DopyM4bvNO3",
        "place": "Малахитовая бухта",
        "price": 3
    }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('Cat', null, {});
     
  }
};
