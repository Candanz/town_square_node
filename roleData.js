export const ROLES = {
  washerwoman: {
    id: 'washerwoman',
    name: 'Washerwoman',
    type: 'townsfolk',
    description:
      'You start knowing that 1 of 2 players is a particular Townsfolk.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/washerwoman.png',
  },
  librarian: {
    id: 'librarian',
    name: 'Librarian',
    type: 'townsfolk',
    description:
      'You start knowing that 1 of 2 players is a particular Outsider. (Or that zero are in play.)',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/librarian.png',
  },
  investigator: {
    id: 'investigator',
    name: 'Investigator',
    type: 'townsfolk',
    description:
      'You start knowing that 1 of 2 players is a particular Minion.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/investigator.png',
  },
  chef: {
    id: 'chef',
    name: 'Chef',
    type: 'townsfolk',
    description: 'You start knowing how many pairs of evil players there are.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/chef.png',
  },
  empath: {
    id: 'empath',
    name: 'Empath',
    type: 'townsfolk',
    description:
      'Each night, you learn how many of your 2 alive neighbours are evil.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/empath.png',
  },
  fortuneteller: {
    id: 'fortuneteller',
    name: 'Fortune Teller',
    type: 'townsfolk',
    description:
      'Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fortuneteller.png',
  },
  undertaker: {
    id: 'undertaker',
    name: 'Undertaker',
    type: 'townsfolk',
    description:
      'Each night*, you learn which character died by execution today.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/undertaker.png',
  },
  monk: {
    id: 'monk',
    name: 'Monk',
    type: 'townsfolk',
    description:
      'Each night*, choose a player (not yourself): they are safe from the Demon tonight.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/monk.png',
  },
  ravenkeeper: {
    id: 'ravenkeeper',
    name: 'Ravenkeeper',
    type: 'townsfolk',
    description:
      'If you die at night, you are woken to choose a player: you learn their character.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/ravenkeeper.png',
  },
  virgin: {
    id: 'virgin',
    name: 'Virgin',
    type: 'townsfolk',
    description:
      'The 1st time you are nominated, if the nominator is a Townsfolk, they are executed immediately.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/virgin.png',
  },
  slayer: {
    id: 'slayer',
    name: 'Slayer',
    type: 'townsfolk',
    description:
      'Once per game, during the day, publicly choose a player: if they are the Demon, they die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/slayer.png',
  },
  soldier: {
    id: 'soldier',
    name: 'Soldier',
    type: 'townsfolk',
    description: 'You are safe from the Demon.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/soldier.png',
  },
  mayor: {
    id: 'mayor',
    name: 'Mayor',
    type: 'townsfolk',
    description:
      'If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/mayor.png',
  },
  butler: {
    id: 'butler',
    name: 'Butler',
    type: 'outsider',
    description:
      'Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/butler.png',
  },
  drunk: {
    id: 'drunk',
    name: 'Drunk',
    type: 'outsider',
    description:
      'You do not know you are the Drunk. You think you are a Townsfolk character, but you are not.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/drunk.png',
  },
  recluse: {
    id: 'recluse',
    name: 'Recluse',
    type: 'outsider',
    description:
      'You might register as evil & as a Minion or Demon, even if dead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/recluse.png',
  },
  saint: {
    id: 'saint',
    name: 'Saint',
    type: 'outsider',
    description: 'If you die by execution, your team loses.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/saint.png',
  },
  poisoner: {
    id: 'poisoner',
    name: 'Poisoner',
    type: 'minion',
    description:
      'Each night, choose a player: they are poisoned tonight and tomorrow day.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/poisoner.png',
  },
  spy: {
    id: 'spy',
    name: 'Spy',
    type: 'minion',
    description:
      'Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/spy.png',
  },
  scarletwoman: {
    id: 'scarletwoman',
    name: 'Scarlet Woman',
    type: 'minion',
    description:
      'If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don’t count)',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/scarletwoman.png',
  },
  baron: {
    id: 'baron',
    name: 'Baron',
    type: 'minion',
    description: 'There are extra Outsiders in play. [+2 Outsiders]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/baron.png',
  },
  imp: {
    id: 'imp',
    name: 'Imp',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/imp.png',
  },
  bureaucrat: {
    id: 'bureaucrat',
    name: 'Bureaucrat',
    type: 'traveler',
    description:
      'Each night, choose a player (not yourself): their vote counts as 3 votes tomorrow.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/bureaucrat.png',
  },
  thief: {
    id: 'thief',
    name: 'Thief',
    type: 'traveler',
    description:
      'Each night, choose a player (not yourself): their vote counts negatively tomorrow.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/thief.png',
  },
  gunslinger: {
    id: 'gunslinger',
    name: 'Gunslinger',
    type: 'traveler',
    description:
      'Each day, after the 1st vote has been tallied, you may choose a player that voted: they die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/gunslinger.png',
  },
  scapegoat: {
    id: 'scapegoat',
    name: 'Scapegoat',
    type: 'traveler',
    description:
      'If a player of your alignment is executed, you might be executed instead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/scapegoat.png',
  },
  beggar: {
    id: 'beggar',
    name: 'Beggar',
    type: 'traveler',
    description:
      'You must use a vote token to vote. Dead players may choose to give you theirs. If so, you learn their alignment. You are sober & healthy.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/beggar.png',
  },
  grandmother: {
    id: 'grandmother',
    name: 'Grandmother',
    type: 'townsfolk',
    description:
      'You start knowing a good player & their character. If the Demon kills them, you die too.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/grandmother.png',
  },
  steward: {
    id: 'steward',
    name: 'Steward',
    type: 'townsfolk',
    description: 'You start knowing 1 good player.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/steward.png',
  },
  knight: {
    id: 'knight',
    name: 'Knight',
    type: 'townsfolk',
    description: 'You start knowing 2 players that are not the Demon.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/knight.png',
  },
  shugenja: {
    id: 'shugenja',
    name: 'Shugenja',
    type: 'townsfolk',
    description:
      'You start knowing if your closest evil player is clockwise or anti-clockwise. If equidistant, this info is arbitrary.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/shugenja.png',
  },
  sailor: {
    id: 'sailor',
    name: 'Sailor',
    type: 'townsfolk',
    description:
      "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/sailor.png',
  },
  chambermaid: {
    id: 'chambermaid',
    name: 'Chambermaid',
    type: 'townsfolk',
    description:
      'Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/chambermaid.png',
  },
  exorcist: {
    id: 'exorcist',
    name: 'Exorcist',
    type: 'townsfolk',
    description:
      "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/exorcist.png',
  },
  innkeeper: {
    id: 'innkeeper',
    name: 'Innkeeper',
    type: 'townsfolk',
    description:
      "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/innkeeper.png',
  },
  gambler: {
    id: 'gambler',
    name: 'Gambler',
    type: 'townsfolk',
    description:
      'Each night*, choose a player & guess their character: if you guess wrong, you die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/gambler.png',
  },
  gossip: {
    id: 'gossip',
    name: 'Gossip',
    type: 'townsfolk',
    description:
      'Each day, you may make a public statement. Tonight, if it was true, a player dies.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/gossip.png',
  },
  courtier: {
    id: 'courtier',
    name: 'Courtier',
    type: 'townsfolk',
    description:
      'Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/courtier.png',
  },
  professor: {
    id: 'professor',
    name: 'Professor',
    type: 'townsfolk',
    description:
      'Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/professor.png',
  },
  minstrel: {
    id: 'minstrel',
    name: 'Minstrel',
    type: 'townsfolk',
    description:
      'When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/minstrel.png',
  },
  tealady: {
    id: 'tealady',
    name: 'Tea Lady',
    type: 'townsfolk',
    description: "If both your alive neighbours are good, they can't die.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/tealady.png',
  },
  pacifist: {
    id: 'pacifist',
    name: 'Pacifist',
    type: 'townsfolk',
    description: 'Executed good players might not die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/pacifist.png',
  },
  fool: {
    id: 'fool',
    name: 'Fool',
    type: 'townsfolk',
    description: "The first time you die, you don't.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fool.png',
  },
  tinker: {
    id: 'tinker',
    name: 'Tinker',
    type: 'outsider',
    description: 'You might die at any time.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/tinker.png',
  },
  moonchild: {
    id: 'moonchild',
    name: 'Moonchild',
    type: 'outsider',
    description:
      'When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/moonchild.png',
  },
  goon: {
    id: 'goon',
    name: 'Goon',
    type: 'outsider',
    description:
      'Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/goon.png',
  },
  lunatic: {
    id: 'lunatic',
    name: 'Lunatic',
    type: 'outsider',
    description:
      'You think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/lunatic.png',
  },
  godfather: {
    id: 'godfather',
    name: 'Godfather',
    type: 'minion',
    description:
      'You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [−1 or +1 Outsider]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/godfather.png',
  },
  devilsadvocate: {
    id: 'devilsadvocate',
    name: "Devil's Advocate",
    type: 'minion',
    description:
      "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/devilsadvocate.png',
  },
  assassin: {
    id: 'assassin',
    name: 'Assassin',
    type: 'minion',
    description:
      'Once per game, at night*, choose a player: they die, even if for some reason they could not.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/assassin.png',
  },
  mastermind: {
    id: 'mastermind',
    name: 'Mastermind',
    type: 'minion',
    description:
      'If the Demon dies by execution (ending the game), play for 1 more day. If a player is then executed, their team loses.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/mastermind.png',
  },
  zombuul: {
    id: 'zombuul',
    name: 'Zombuul',
    type: 'demon',
    description:
      'Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/zombuul.png',
  },
  pukka: {
    id: 'pukka',
    name: 'Pukka',
    type: 'demon',
    description:
      'Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/pukka.png',
  },
  shabaloth: {
    id: 'shabaloth',
    name: 'Shabaloth',
    type: 'demon',
    description:
      'Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/shabaloth.png',
  },
  po: {
    id: 'po',
    name: 'Po',
    type: 'demon',
    description:
      'Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/po.png',
  },
  apprentice: {
    id: 'apprentice',
    name: 'Apprentice',
    type: 'traveler',
    description:
      'On your 1st night, you gain a Townsfolk ability (if good), or a Minion ability (if evil).',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/apprentice.png',
  },
  matron: {
    id: 'matron',
    name: 'Matron',
    type: 'traveler',
    description:
      'Each day, you may choose up to 3 sets of 2 players to swap seats. Players may not leave their seats to talk in private.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/matron.png',
  },
  judge: {
    id: 'judge',
    name: 'Judge',
    type: 'traveler',
    description:
      'Once per game, if another player nominated, you may choose to force the current execution to pass or fail.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/judge.png',
  },
  bishop: {
    id: 'bishop',
    name: 'Bishop',
    type: 'traveler',
    description:
      'Only the Storyteller can nominate. At least 1 opposite player must be nominated each day.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/bishop.png',
  },
  voudon: {
    id: 'voudon',
    name: 'Voudon',
    type: 'traveler',
    description:
      "Only you and the dead can vote. They don't need a vote token to do so. A 50% majority is not required.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/voudon.png',
  },
  clockmaker: {
    id: 'clockmaker',
    name: 'Clockmaker',
    type: 'townsfolk',
    description:
      'You start knowing how many steps from the Demon to its nearest Minion.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/clockmaker.png',
  },
  dreamer: {
    id: 'dreamer',
    name: 'Dreamer',
    type: 'townsfolk',
    description:
      'Each night, choose a player (not yourself or Travellers): you learn 1 good and 1 evil character, 1 of which is correct.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/dreamer.png',
  },
  snakecharmer: {
    id: 'snakecharmer',
    name: 'Snake Charmer',
    type: 'townsfolk',
    description:
      'Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/snakecharmer.png',
  },
  mathematician: {
    id: 'mathematician',
    name: 'Mathematician',
    type: 'townsfolk',
    description:
      "Each night, you learn how many players’ abilities worked abnormally (since dawn) due to another character's ability.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/mathematician.png',
  },
  flowergirl: {
    id: 'flowergirl',
    name: 'Flowergirl',
    type: 'townsfolk',
    description: 'Each night*, you learn if a Demon voted today.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/flowergirl.png',
  },
  towncrier: {
    id: 'towncrier',
    name: 'Town Crier',
    type: 'townsfolk',
    description: 'Each night*, you learn if a Minion nominated today.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/towncrier.png',
  },
  oracle: {
    id: 'oracle',
    name: 'Oracle',
    type: 'townsfolk',
    description: 'Each night*, you learn how many dead players are evil.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/oracle.png',
  },
  savant: {
    id: 'savant',
    name: 'Savant',
    type: 'townsfolk',
    description:
      'Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/savant.png',
  },
  seamstress: {
    id: 'seamstress',
    name: 'Seamstress',
    type: 'townsfolk',
    description:
      'Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/seamstress.png',
  },
  philosopher: {
    id: 'philosopher',
    name: 'Philosopher',
    type: 'townsfolk',
    description:
      'Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/philosopher.png',
  },
  artist: {
    id: 'artist',
    name: 'Artist',
    type: 'townsfolk',
    description:
      'Once per game, during the day, privately ask the Storyteller any yes/no question.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/artist.png',
  },
  juggler: {
    id: 'juggler',
    name: 'Juggler',
    type: 'townsfolk',
    description:
      "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/juggler.png',
  },
  sage: {
    id: 'sage',
    name: 'Sage',
    type: 'townsfolk',
    description: 'If the Demon kills you, you learn that it is 1 of 2 players.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/sage.png',
  },
  mutant: {
    id: 'mutant',
    name: 'Mutant',
    type: 'outsider',
    description:
      'If you are “mad” about being an Outsider, you might be executed.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/mutant.png',
  },
  sweetheart: {
    id: 'sweetheart',
    name: 'Sweetheart',
    type: 'outsider',
    description: 'When you die, 1 player is drunk from now on.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/sweetheart.png',
  },
  barber: {
    id: 'barber',
    name: 'Barber',
    type: 'outsider',
    description:
      'If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/barber.png',
  },
  klutz: {
    id: 'klutz',
    name: 'Klutz',
    type: 'outsider',
    description:
      'When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/klutz.png',
  },
  eviltwin: {
    id: 'eviltwin',
    name: 'Evil Twin',
    type: 'minion',
    description:
      "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/eviltwin.png',
  },
  witch: {
    id: 'witch',
    name: 'Witch',
    type: 'minion',
    description:
      'Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/witch.png',
  },
  cerenovus: {
    id: 'cerenovus',
    name: 'Cerenovus',
    type: 'minion',
    description:
      'Each night, choose a player & a good character: they are “mad” they are this character tomorrow, or might be executed.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/cerenovus.png',
  },
  pithag: {
    id: 'pithag',
    name: 'Pit-Hag',
    type: 'minion',
    description:
      'Each night*, choose a player & a character they become (if not-in-play). If a Demon is made, deaths tonight are arbitrary.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/pithag.png',
  },
  fanggu: {
    id: 'fanggu',
    name: 'Fang Gu',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fanggu.png',
  },
  vigormortis: {
    id: 'vigormortis',
    name: 'Vigormortis',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbour. [−1 Outsider]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/vigormortis.png',
  },
  ojo: {
    id: 'ojo',
    name: 'Ojo',
    type: 'demon',
    description:
      'Each night*, choose a character: they die. If they are not in play, the Storyteller chooses who dies.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/ojo.png',
  },
  vizier: {
    id: 'vizier',
    name: 'Vizier',
    type: 'minion',
    description:
      'All players know who you are. You can not die during the day. If good voted, you may choose to execute immediately.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/vizier.png',
  },
  nodashii: {
    id: 'nodashii',
    name: 'No Dashii',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. Your 2 Townsfolk neighbours are poisoned.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/nodashii.png',
  },
  vortox: {
    id: 'vortox',
    name: 'Vortox',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/vortox.png',
  },
  barista: {
    id: 'barista',
    name: 'Barista',
    type: 'traveler',
    description:
      'Each night, until dusk, 1) a player becomes sober, healthy and gets true info, or 2) their ability works twice. They learn which.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/barista.png',
  },
  harlot: {
    id: 'harlot',
    name: 'Harlot',
    type: 'traveler',
    description:
      'Each night*, choose a living player: if they agree, you learn their character, but you both might die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/harlot.png',
  },
  butcher: {
    id: 'butcher',
    name: 'Butcher',
    type: 'traveler',
    description: 'Each day, after the 1st execution, you may nominate again.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/butcher.png',
  },
  bonecollector: {
    id: 'bonecollector',
    name: 'Bone Collector',
    type: 'traveler',
    description:
      'Once per game, at night, choose a dead player: they regain their ability until dusk.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/bonecollector.png',
  },
  deviant: {
    id: 'deviant',
    name: 'Deviant',
    type: 'traveler',
    description: 'If you were funny today, you cannot die by exile.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/deviant.png',
  },
  noble: {
    id: 'noble',
    name: 'Noble',
    type: 'townsfolk',
    description: 'You start knowing 3 players, 1 and only 1 of which is evil.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/noble.png',
  },
  bountyhunter: {
    id: 'bountyhunter',
    name: 'Bounty Hunter',
    type: 'townsfolk',
    description:
      'You start knowing 1 evil player. If the player you know dies, you learn another evil player tonight. [1 Townsfolk is evil]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/bountyhunter.png',
  },
  pixie: {
    id: 'pixie',
    name: 'Pixie',
    type: 'townsfolk',
    description:
      'You start knowing 1 in-play Townsfolk. If you were mad that you were this character, you gain their ability when they die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/pixie.png',
  },
  general: {
    id: 'general',
    name: 'General',
    type: 'townsfolk',
    description:
      'Each night, you learn which alignment the Storyteller believes is winning: good, evil, or neither.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/general.png',
  },
  preacher: {
    id: 'preacher',
    name: 'Preacher',
    type: 'townsfolk',
    description:
      'Each night, choose a player: a Minion, if chosen, learns this. All chosen Minions have no ability.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/preacher.png',
  },
  king: {
    id: 'king',
    name: 'King',
    type: 'townsfolk',
    description:
      'Each night, if the dead equal or outnumber the living, you learn 1 alive character. The Demon knows who you are.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/king.png',
  },
  balloonist: {
    id: 'balloonist',
    name: 'Balloonist',
    type: 'townsfolk',
    description:
      'Each night, you learn 1 player of each character type, until there are no more types to learn. [+1 Outsider]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/balloonist.png',
  },
  cultleader: {
    id: 'cultleader',
    name: 'Cult Leader',
    type: 'townsfolk',
    description:
      'Each night, you become the alignment of an alive neighbour. If all good players choose to join your cult, your team wins.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/cultleader.png',
  },
  lycanthrope: {
    id: 'lycanthrope',
    name: 'Lycanthrope',
    type: 'townsfolk',
    description:
      'Each night*, choose a living player: if good, they die, but they are the only player that can die tonight.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/lycanthrope.png',
  },
  amnesiac: {
    id: 'amnesiac',
    name: 'Amnesiac',
    type: 'townsfolk',
    description:
      'You do not know what your ability is. Each day, privately guess what it is: you learn how accurate you are.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/amnesiac.png',
  },
  nightwatchman: {
    id: 'nightwatchman',
    name: 'Nightwatchman',
    type: 'townsfolk',
    description:
      'Once per game, at night, choose a player: they learn who you are.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/nightwatchman.png',
  },
  engineer: {
    id: 'engineer',
    name: 'Engineer',
    type: 'townsfolk',
    description:
      'Once per game, at night, choose which Minions or which Demon is in play.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/engineer.png',
  },
  fisherman: {
    id: 'fisherman',
    name: 'Fisherman',
    type: 'townsfolk',
    description:
      'Once per game, during the day, visit the Storyteller for some advice to help you win.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fisherman.png',
  },
  huntsman: {
    id: 'huntsman',
    name: 'Huntsman',
    type: 'townsfolk',
    description:
      'Once per game, at night, choose a living player: the Damsel, if chosen, becomes a not-in-play Townsfolk. [+the Damsel]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/huntsman.png',
  },
  alchemist: {
    id: 'alchemist',
    name: 'Alchemist',
    type: 'townsfolk',
    description: 'You have a not-in-play Minion ability.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/alchemist.png',
  },
  farmer: {
    id: 'farmer',
    name: 'Farmer',
    type: 'townsfolk',
    description: 'If you die at night, an alive good player becomes a Farmer.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/farmer.png',
  },
  magician: {
    id: 'magician',
    name: 'Magician',
    type: 'townsfolk',
    description:
      'The Demon thinks you are a Minion. Minions think you are a Demon.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/magician.png',
  },
  choirboy: {
    id: 'choirboy',
    name: 'Choirboy',
    type: 'townsfolk',
    description:
      'If the Demon kills the King, you learn which player is the Demon. [+ the King]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/choirboy.png',
  },
  poppygrower: {
    id: 'poppygrower',
    name: 'Poppy Grower',
    type: 'townsfolk',
    description:
      'Minions & Demons do not know each other. If you die, they learn who each other are that night.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/poppygrower.png',
  },
  atheist: {
    id: 'atheist',
    name: 'Atheist',
    type: 'townsfolk',
    description:
      'The Storyteller can break the game rules & if executed, good wins, even if you are dead. [No evil characters]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/atheist.png',
  },
  cannibal: {
    id: 'cannibal',
    name: 'Cannibal',
    type: 'townsfolk',
    description:
      'You have the ability of the recently killed executee. If they are evil, you are poisoned until a good player dies by execution.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/cannibal.png',
  },
  highpriestess: {
    id: 'highpriestess',
    name: 'High Priestess',
    type: 'townsfolk',
    description:
      'Each night, learn which player the Storyteller believes you should talk to most.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/highpriestess.png',
  },
  villageidiot: {
    id: 'villageidiot',
    name: 'Village Idiot',
    type: 'townsfolk',
    description:
      'Each night, choose a player: you learn their alignment. [+0 to +2 Village Idiots. 1 of the extras is drunk]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/villageidiot.png',
  },
  banshee: {
    id: 'banshee',
    name: 'Banshee',
    type: 'townsfolk',
    description:
      'If the Demon kills you, all players learn this. From now on, you may nominate twice per day and vote twice per nomination.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/banshee.png',
  },
  snitch: {
    id: 'snitch',
    name: 'Snitch',
    type: 'outsider',
    description: 'Minions start knowing 3 `not-in-play characters.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/snitch.png',
  },
  acrobat: {
    id: 'acrobat',
    name: 'Acrobat',
    type: 'outsider',
    description:
      'Each night*, if either good living neighbour is drunk or poisoned, you die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/acrobat.png',
  },
  plaguedoctor: {
    id: 'plaguedoctor',
    name: 'Plague Doctor',
    type: 'outsider',
    description:
      'If you die, the Storyteller gains a not-in-play Minion ability.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/plaguedoctor.png',
  },
  ogre: {
    id: 'ogre',
    name: 'Ogre',
    type: 'outsider',
    description:
      "On your 1st night, choose a player (not yourself): you become their alignment (you don't know which) even if drunk or poisoned.",
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/ogre.png',
  },
  puzzlemaster: {
    id: 'puzzlemaster',
    name: 'Puzzlemaster',
    type: 'outsider',
    description:
      '1 player is drunk, even if you die. If you guess (once) who it is, learn the Demon player, but guess wrong & get false info.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/puzzlemaster.png',
  },
  heretic: {
    id: 'heretic',
    name: 'Heretic',
    type: 'outsider',
    description:
      'Whoever wins, loses & whoever loses, wins, even if you are dead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/heretic.png',
  },
  damsel: {
    id: 'damsel',
    name: 'Damsel',
    type: 'outsider',
    description:
      'All Minions know you are in play. If a Minion publicly guesses you (once), your team loses.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/damsel.png',
  },
  golem: {
    id: 'golem',
    name: 'Golem',
    type: 'outsider',
    description:
      'You may only nominate once per game. When you do, if the nominee is not the Demon, they die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/golem.png',
  },
  politician: {
    id: 'politician',
    name: 'Politician',
    type: 'outsider',
    description:
      'If you were the player most responsible for your team losing, you change alignment & win, even if dead.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/politician.png',
  },
  hatter: {
    id: 'hatter',
    name: 'Hatter',
    type: 'outsider',
    description:
      'If you died today or tonight, the Minion & Demon players may choose new Minion & Demon characters to be.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/hatter.png',
  },
  widow: {
    id: 'widow',
    name: 'Widow',
    type: 'minion',
    description:
      'On your 1st night, look at the Grimoire and choose a player: they are poisoned. 1 good player knows a Widow is in play.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/widow.png',
  },
  fearmonger: {
    id: 'fearmonger',
    name: 'Fearmonger',
    type: 'minion',
    description:
      'Each night, choose a player. If you nominate & execute them, their team loses. All players know if you choose a new player.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fearmonger.png',
  },
  psychopath: {
    id: 'psychopath',
    name: 'Psychopath',
    type: 'minion',
    description:
      'Each day, before nominations, you may publicly choose a player: they die. If executed, you only die if you lose roshambo.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/psychopath.png',
  },
  goblin: {
    id: 'goblin',
    name: 'Goblin',
    type: 'minion',
    description:
      'If you publicly claim to be the Goblin when nominated & are executed that day, your team wins.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/goblin.png',
  },
  mephit: {
    id: 'mephit',
    name: 'Mephit',
    type: 'minion',
    description:
      'You start knowing a secret word. The 1st good player to say this word becomes evil that night.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/mephit.png',
  },
  mezepheles: {
    id: 'mezepheles',
    name: 'Mezepheles',
    type: 'minion',
    description:
      'You start knowing a secret word. The 1st good player to say this word becomes evil that night.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/mezepheles.png',
  },
  marionette: {
    id: 'marionette',
    name: 'Marionette',
    type: 'minion',
    description:
      'You think you are a good character but you are not. The Demon knows who you are. [You neighbour the Demon]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/marionette.png',
  },
  boomdandy: {
    id: 'boomdandy',
    name: 'Boomdandy',
    type: 'minion',
    description:
      'If you are executed, all but 3 players die. 1 minute later, the player with the most players pointing at them dies.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/boomdandy.png',
  },
  organgrinder: {
    id: 'organgrinder',
    name: 'Organ Grinder',
    type: 'minion',
    description:
      'All players keep their eyes closed when voting & the vote tally is secret. Votes for you only count if you vote.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/organgrinder.png',
  },
  harpy: {
    id: 'harpy',
    name: 'Harpy',
    type: 'minion',
    description:
      'Each night, choose 2 players: tomorrow, the 1st player is mad that the 2nd is evil, or both might die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/harpy.png',
  },
  summoner: {
    id: 'summoner',
    name: 'Summoner',
    type: 'minion',
    description:
      'You get 3 bluffs. On the 3rd night, choose a player: they become an evil Demon of your choice. [No Demon]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/summoner.png',
  },
  lilmonsta: {
    id: 'lilmonsta',
    name: "Lil' Monsta",
    type: 'demon',
    description:
      'Each night, Minions choose who babysits Lil\' Monsta\'s token & "is the Demon". A player dies each night*. [+1 Minion]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/lilmonsta.png',
  },
  lleech: {
    id: 'lleech',
    name: 'Lleech',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. You start by choosing an alive player: they are poisoned - you die if & only if they die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/lleech.png',
  },
  alhadikhia: {
    id: 'alhadikhia',
    name: 'Al-Hadikhia',
    type: 'demon',
    description:
      'Each night*, choose 3 players (all players learn who): each silently chooses to live or die, but if all live, all die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/alhadikhia.png',
  },
  legion: {
    id: 'legion',
    name: 'Legion',
    type: 'demon',
    description:
      'Each night*, a player might die. Executions fail if only evil voted. You register as a Minion too. [Most players are Legion]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/legion.png',
  },
  leviathan: {
    id: 'leviathan',
    name: 'Leviathan',
    type: 'demon',
    description:
      'If more than 1 good player is executed, you win. All players know you are in play. After day 5, evil wins.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/leviathan.png',
  },
  riot: {
    id: 'riot',
    name: 'Riot',
    type: 'demon',
    description:
      'Nominees die, but may nominate again immediately (on day 3, they must). After day 3, evil wins. [All Minions are Riot]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/riot.png',
  },
  kazali: {
    id: 'kazali',
    name: 'Kazali',
    type: 'demon',
    description:
      'Each night*, choose a player: they die. [You choose which players are Minions. -? to +? Outsiders]',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/kazali.png',
  },
  yaggababble: {
    id: 'yaggababble',
    name: 'Yaggababble',
    type: 'demon',
    description:
      'You start knowing a secret phrase. For each time you said it publicly today, a player might die.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/yaggababble.png',
  },
  gangster: {
    id: 'gangster',
    name: 'Gangster',
    type: 'traveler',
    description:
      'Once per day, you may choose to kill an alive neighbour, if your other alive neighbour agrees.',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/gangster.png',
  },
  doomsayer: {
    name: 'Doomsayer',
    id: 'doomsayer',
    description:
      'If 4 or more players live, each living player may publicly choose (once per game) that a player of their own alignment dies.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/doomsayer.png',
  },
  buddhist: {
    name: 'Buddhist',
    id: 'buddhist',
    description:
      'For the first 2 minutes of each day, veteran players may not talk.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/buddhist.png',
  },
  hellslibrarian: {
    name: "Hell's Librarian",
    id: 'hellslibrarian',
    description:
      'Something bad might happen to whoever talks when the Storyteller has asked for silence.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/hellslibrarian.png',
  },
  revolutionary: {
    name: 'Revolutionary',
    id: 'revolutionary',
    description:
      '2 neighboring players are known to be the same alignment. Once per game, 1 of them registers falsely.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/revolutionary.png',
  },
  fiddler: {
    name: 'Fiddler',
    id: 'fiddler',
    description:
      'Once per game, the Demon secretly chooses an opposing player: all players choose which of these 2 players win.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fiddler.png',
  },
  toymaker: {
    name: 'Toymaker',
    id: 'toymaker',
    description:
      'The Demon may choose not to attack & must do this at least once per game. Evil players get normal starting info.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/toymaker.png',
  },
  fibbin: {
    name: 'Fibbin',
    id: 'fibbin',
    description:
      'Once per game, 1 good player might get incorrect information.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/fibbin.png',
  },
  duchess: {
    name: 'Duchess',
    id: 'duchess',
    description:
      'Each day, 3 players may choose to visit you. At night*, each visitor learns how many visitors are evil, but 1 gets false info.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/duchess.png',
  },
  sentinel: {
    name: 'Sentinel',
    id: 'sentinel',
    description: 'There might be 1 extra or 1 fewer Outsider in play.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/sentinel.png',
  },
  djinn: {
    name: 'Djinn',
    id: 'djinn',
    description: "Use the Djinn's special rule. All players know what it is.",
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/djinn.png',
  },
  spiritofivory: {
    name: 'Spirit of Ivory',
    id: 'spiritofivory',
    description: "There can't be more than 1 extra evil player.",
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/spiritofivory.png',
  },
  bootlegger: {
    name: 'Bootlegger',
    id: 'bootlegger',
    description: 'This script has homebrew characters or rules.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/bootlegger.png',
  },
  ferryman: {
    name: 'Ferryman',
    id: 'ferryman',
    description: 'On the final day, all dead players regain their vote token.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/ferryman.png',
  },
  gardener: {
    name: 'Gardener',
    id: 'gardener',
    description: "The Storyteller assigns 1 or more players' characters.",
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/gardener.png',
  },
  stormcatcher: {
    name: 'Storm Catcher',
    id: 'stormcatcher',
    description:
      'Name a good character. If in play, they can only die by execution, but evil players learn which player it is.',
    type: 'fabled',
    Icon: 'https://raw.githubusercontent.com/nicholas-eden/townsquare/develop/src/assets/icons/stormcatcher.png',
  },
};
