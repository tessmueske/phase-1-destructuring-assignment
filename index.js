const farmAnimals = 'cow horse sheep pig chicken';

const farmAnimalSounds = {
  moo: 'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'
};

const { moo, neigh, baa, oink, cluck } = farmAnimalSounds;

const farmAnimalNames = {
  bessie: 'cow',
  dolly: 'sheep',
  babe: 'pig',
  little: 'chicken'
};

const { bessie, dolly, babe, little } = farmAnimalNames;

const farmAnimalColors = {
  blackAndWhite: 'cow',
  black: 'sheep',
  pink: 'pig'
};

const { blackAndWhite, black, pink } = farmAnimalColors;

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, indg, v] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { muppetName, color, song, job, partner } = muppet

const { nestedName, nestedColor, album: { theMuppetMovie }, nestedJob, nestedPartner } = nestedMuppet;

const { album: { theMuppetMovie: { song2, song4 } } } = nestedMuppet;

const { job: missPiggyJob, partner: missPiggyPartner } = muppet;