export const games = [
  {
    id: 'mega-sena',
    name: 'Mega Sena',
    url: '/mega-sena',
  },
  {
    id: 'quina',
    name: 'Quina',
    url: '/quina',
  },
  {
    id: 'lotofacil',
    name: 'Lotofácil',
    url: '/lotofacil',
  },
  {
    id: 'dupla-sena',
    name: 'Dupla Sena',
    url: '/dupla-sena',
  },
  {
    id: 'lotomania',
    name: 'LotoMania',
    url: '/lotomania',
  },
];

export const gamesRules = {
  megaSena: {
    gameMinValue: 1,
    gameMaxValue: 60,
    gameMinNumbers: 6,
    gameMaxNumbers: 15,
  }
}
