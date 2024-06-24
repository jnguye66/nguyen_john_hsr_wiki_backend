// Require connection file to connect
const mongoose = require('./db-connection.js');

// Require Models for delete and create operations
// Character Model
const Char = require('../models/Char.js');
// Enemy Model
const Enemy = require('../models/Enemy.js');
// Aeon Model
const Aeon = require('../models/Aeon.js');

const chars = [
    {
        name: "Trailblazer",
        path: "Harmony",
        element: "Imaginary",
        faction: "Astral Express",
        intro: "A boy/girl decides to travel with the Astral Express to eliminate the threat of the Stellaron",
        story: {
            stories: {
                details: 'A boy/girl decides to travel with the Astral Express to eliminate the threat of the Stellaron',

                story_1: "You don't remember much.\nYou're not from around here, nor did you come from elsewhere. You're not really going anywhere-\nJust then, the indistinct voice whispers into your ear. That sorrowful and tender persuasion, that deceptive goading...\nThe seeds take root. You open your eyes, and the speaker is no longer there.\n\nBut there are more and more voices, and they are getting clearer and clearer.\nSome give easygoing care, some calmly provide advice, some speak firm support, and some gift gentle direction...\nYou see the silken thread being woven to form tomorrow.\n\nA huge beast descends from infinity,\ngolden pupils stare down from the darkness, and you are no longer abandoned by the past.\nYou will also set upon a long journey, and the thorns you have stepped on have become your path.\n\nThe train whistles, wishing you a successful journey to the coming future...\nBy your own will.",

                story_2: "You have arrived at the 'City of Preservation.'\nBehind the snow curtain, the wind lashes like steel blades, but the kindling burns on.\nDistant lands won't hear them, and the earth trembles in kind, with only the wailing crowds braving the wind.\n\n After facing foreign enemies, the Eternal Freeze, and reality's fissures, a rot beings to fester within the fort.\nYou try lending a helping hand, but are forsaken.\nSome once looked down on you and misunderstood you, but still you stood by their side and helped them find t heir way. More care about you and worry about you. They face their suffering, and find the cure for the distressed.\nEventually, they come to your side.\n\nIn the ice and snow, you are like a fire, protecting the soul of this world...\nEven though you must scorch yourself day and night.",

                story_3: "The harmonious music guides you to stumble into the sweet dream, as syrup and soda fill your throat.\nThe festival is grand, the crowd boisterous, and strangers cast on disguises to meet up in the dream.\nYou view to your hearts' desires the wondrous and otherworldly views, and part ways when dewdrops shimmer with the break of dawn -\nWhen the pitch-black midnight has just begun.\n\nThe clock hands go tick-tock, and death follows closely like a shadow.\nYou are placed onto the table as a bargaining chip, but manage to win for yourself the right to uncover the secret.\nYou bring with you the dreams of the dead and continue on the road that they did not walk, facing the enemies they could not defeat-\n\nThe false god rises in the conglomeration of the multitude's wishes, and the unanimous song of the gazillions drowns out your existence.\nThose walking on different raods take up each other's hands, your melodies interweave with each other, faint but imperishable like the lights in a long night.\nOne after one, people startle awake from their dream. That tiny song finally merges into a deafening roar in the end, tearing free of the dream's curtains.\n\n The eternal sweet dream scatters in a fleeting instant, and you finally understand why people slumber-\nThey do so towards a dawn freed from dreams.",

                story_4: '',
            }
        },
        traces: {
            skills: [
                {
                    title: "Basic Attack",
                    name: "Swing Dance Etiquette",
                    targetting: "Single Target",
                    desc: "Deals Imaginary DMG equal to 100% of the Trailblazer's ATK to a single target enemy.",
                    toughness: 10
                },
                {
                    title: "Talent",
                    name: "Full-on Aerial Dance",
                    targetting: "Support",
                    desc: "The Trailblazer immediately regenerates 10.0 Energy when an enemy target's Weakness is Broken",
                    toughness: 0
                },
                {
                    title: "Skill",
                    name: "Halftime to Make It Rain",
                    targetting: "Bounce",
                    desc: "Deals Imaginary DMG equal to 50% of the Trailblazer's ATK to a single target enemy and additionally deals DMG for 4 times, with each time dealing Imaginary DMG equal to 50% of the Trailblazer's ATK to a random enemy.",
                    toughness: 10
                },
                {
                    title: "Ultimate",
                    name: "All-Out Footlight Parade",
                    targetting: "Support",
                    desc: "Grants all allies the Backup Dancer effect, lasting for 3 turn(s). This duration reduces by 1 at the start of Trailblazer's every turn. Allies that have the Backup Dancer effect have their Break Effect increased by 30%. And when they attack enemy targets that are in the Weakness Broken state, the Toughness Reduction of this attack will be converted into 1 instance of Super Break DMG.",
                    toughness: 0
                },
                {
                    title: "Technique",
                    name: "Now! I'm the Band!",
                    targetting: "Support",
                    desc: "After the Technique is used, at the start of the next battle, all allies' Break Effect increases by 30%, lasting for 2 turn(s).",
                    toughness: 0
                },
            ],
            awakenings: [
                {
                    stage: 2,
                    name: "Dance With the One",
                    desc: "When the number of enemy targets on the field is 5 or more/4/3/2/1, the Super Break DMG triggered by the Backup Dancer effect increases by 20%/30%/40%/50%/60%.",
                },
                {
                    stage: 4,
                    name: "Shuffle Along",
                    desc: "When using Skill, additionally increases the Toughness Reduction of the first instance of DMG by 100%.",
                },
                {
                    stage: 6,
                    name: "Hat of the Theater",
                    desc: "Additionally delays the enemy target's action by 30% when allies Break enemy Weaknesses.",
                },
            ],
            stats: [
                {
                    stat: "Break Effect",
                    amt: 37.3,
                },
                {
                    stat: "Imaginary DMG",
                    amt: 14.4,
                },
                {
                    stat: "Effect Resistance",
                    amt: 10,
                },
            ]
        }
    },
    
    {
        name: "March 7th",
        path: "Preservation",
        element: "Ice",
        faction: "Astral Express",
        intro: "A girl who once slumbered in eternal ice and knows nothing about her past.\nTo find out the truth about her origins, she decided to travel with the Astral Express.\nAs of right now, she has prepared about 67 different versions of her life story for herself.",
        story: {
            stories: {
                details: "A sprited and quirky young girl who is into all the things girls her age are interested in, such as taking photos.\nShe was awakened from a piece of drifting eternal ice, only to find that she knows nothing about herself or her past. Though initially feeling dejected, she decided to name herself after the date of her rebirth.\nAnd thus, on that day, March 7th was born.",

                story_1: "Why does March 7th take photos?\n'First of all, girls like me should like this kind of pastime.'\n'Besides, I won't forget anything that I keep a photo of.\n\nWhat has March 7th come to learn about photography?\n'Number one, when taking pictures of terrible cuisines, all the details must be clearly visible on the pictures because taking pictures of food is equal to eating them. Every detail matters.'\n'Number two, as long as you take a picture with your eyes closed, you will be able to capture an expression of your subject with their eyes closed.\n\nWhy is March 7th always wearing her camera?\n'Because if anyone ever seals me away in ice again, at least I'll have my camera with me!'\n\nSo why doesn't March 7th just use the camera on her phone?\n'Oh yeah, why not - hang on, it's because of that sense of formality!'",

                story_2: "March 7th's ability is 'Six-Phased Ice,' but she always insisted that it is not ice but some kind of condensed crystal.\n'Come in, ice can't be this beautiful.'\n\nThe bows and arrows that March 7th uses in battle are also made of the Six-Phased Ice, but she is not satisfied with the fact that her weapon is a bow.\n'Great warriors never use bows!'\n'Besides, if I use my ice arrow to attack my ice shield, nothing will happen at all!'\n\nMarch 7th has also worked hard to practice a unique skill called 'Star Crazing: Glass Greatsword,' but she never succeeded.\n'March, juding by the name, it should be a greatsword, right?'\n'Well, but it doesn't feel as good as an ice sculpture... smash.'",

                story_3: "Compared to Pom-Pom the conductor, Himeko the Navigator, Dan Heng the Guard, and Welt the Jack-of-all-Trades, even March 7th has ahard time explaining her role aboard the Express despite calling herself a 'Warrior.'\nBut March 7th's every move affects the crew's course of action all the time.\n\n'Passenger March 7th slipped and fell...'\n'March, have you taken pictures of the sights over there?'\n'I believe March. If she said it's not delicious, then it's truly not delectable.'\n\nRather than calling March 7th someone who constantly wories people, it would be better to say that she works her way into people's hearts. March 7th, of course, is oblivious to this, and is struggling to think up the right role for The Trailblazer.",

                story_4: "For March 7th, who has been drifting in space, the situation in which she awoke isn't too bad.\nShe woke up on a passing train, and the people on the train looked friendly.\nThe only problem is that even though she has a reasonable understanding of what's going on around her, she still doesn't know anything about herself.\n\n'Who am I? Where do I come from...'\n\nMarch 7th looks at herself in the mirror, imagining dozens of potential past lives for herself as she tries on the various outfits that Hiemko had assembled for her.\nBut she can't be sure what her past was like, and what kind of past a girl like her should have...\nThe only thing March 7th can choose to be is her current self, and the only thing she can look forward to is the future. She is both fightened and glad.",
            }
        },
        traces: {
            skills: [
                {
                    title: "Basic Attack",
                    name: "Frigid Cold Arrow",
                    targetting: "Single Target",
                    desc: "Deals Ice DMG equal to 100% of March 7th's ATK to a single enemy.",
                    toughness: 10
                },
                {
                    title: "Talent",
                    name: "Girl Power",
                    targetting: "Single Target",
                    desc: "After a Shielded ally is attacked by an enemy, March 7th immediately Counters, dealing Ice DMG equal to 100% of her ATK. This effect can be triggered 2 time(s) each turn.",
                    toughness: 10
                },
                {
                    title: "Skill",
                    name: "The Power of Cuteness",
                    targetting: "Defense",
                    desc: "Provides a single ally with a Shield that can absorb DMG equal to 57% of March 7th's DEF plus 760 for 3 turn(s). If the ally's current HP percentage is 30% or higher, greatly increases the chance of enemies attacking that ally.",
                    toughness: 10
                },
                {
                    title: "Ultimate",
                    name: "Glacier Cascade",
                    targetting: "AoE",
                    desc: "Deals Ice DMG equal to 150% of March 7th's ATK to all enemies. Hit enemies have a 50% base chance to be Frozen for 1 turn(s). While Frozen, enemies cannot take action and will receive Additional Ice DMG equal to 60% of March 7th's ATK at the beginning of each turn.",
                    toughness: 20
                },
                {
                    title: "Technique",
                    name: "Freezing Beauty",
                    targetting: "Attack",
                    desc: "Immediately attacks the enemy. After entering battle, there is a 100% base chance to Freeze a random enemy for 1 turn(s). While Frozen, the enemy cannot take action and will take Additional Ice DMG equal to 50% of March 7th's ATK at the beginning of each turn.",
                    toughness: 0
                },
            ],
            awakenings: [
                {
                    stage: 2,
                    name: "Purity",
                    desc: "Skill removes 1 debuff from an ally.",
                },
                {
                    stage: 4,
                    name: "Ice Spell",
                    desc: "The duration of the Shield generated from her Skill is extended for 1 turn(s).",
                },
                {
                    stage: 6,
                    name: "Hat of the Theater",
                    desc: "Increases Ultimate's base chance to Freeze enemies by 15%.",
                },
            ],
            stats: [
                {
                    stat: "Ice DMG",
                    amt: 22.4,
                },
                {
                    stat: "Defense",
                    amt: 22.5,
                },
                {
                    stat: "Effect Resistance",
                    amt: 10,
                },
            ]
        }
    },

    {
        name: "Dan Heng",
        path: "Hunt",
        element: "Wind",
        faction: "Astral Express",
        intro: "A cold and reserved young man who is reticent about his past. To avoid his kin, he decided to travel with the Astral Express.",
        story: {
            stories: {
                details: "A cold and reserved young man who wields a spear known as Cloud-Piercer. He acts as the Express' guard on its long trailblazing expedition.\nDan Heng never talks much about his past. In fact, he joined the Express Crew to escape from a past of his own making.\nBut can the Express really help him outrun his past?",

                story_1: "A new dawn begins\n\nIt's just another extremely average day aboard this giant ship. The markets have just opened and the morning dew is still fresh, but the youngman crossing the street has never seen such a sight. B efore he manages to notice all the differences between the actual city and its descriptions in books, he is immersed in savoring the warmth of the sun on the back of his neck.\n\nIt is his first time seeing his own body clearly. This body belongs to him. It belongs to this current name.\n\nWhen he arrives at the port, the escorting soldier removes the last of his shackles. He wealks forward without looking back. He can feel, ever so faintly, several pairs of eyes gazing at him from within the city. Eyes filled with hatred.\n\nIt isn't until the spaceship takes off that he turns his head and takes one final look at this place. It really is magnificent and grand spaceship - just like the books say.\n\nHe only glances at it once, then turns his head away to where the stars shimmer dimly and an uncertain future lies\n\nHe looks out in silence.",

                story_2: "A new dawn begins.\n\nHe steps off one IPC spaceship then boards another. He'd never even heard of the ship's destination, but that doesn't matter. There is nowhere he particularly wanted to go. His only goal is to get as far away as possible from his past, from his 'home.'\n\nOn these spaceships, people come and go all the time. None of the IPC crews care who he is, so long as he can work.\n\nHe has changed his appearance and might no longer be recognized, but he knows that same power still lurks within him, unable to be shaken off no matter where he goes. This power drags him down, slows him, tries to overwhelm him, and makes him unable to escape his past. He has to be careful.\n\nBut he still can't shake off the man with the beastly eyes.\n\nIf others in his homeworld felt hatred toward him, then that man only has a killing intent toward him - even the spaceships he had traveled on were all annihilated. That man had died before him, but would reappear soon after.\n\nOutside his homeworld, there's a larger world where anything is possible.",

                story_3: "A new dawn begins.\n\nHe boards another spaceship, and the passengers are all wearing different masks. He nearly has his memory stolen, and is forced to listen to a lecture that sounded like mad ramblings.\n\nHe knows that huge monsters prowl upon this route, but he could only find a way toward survival by traveling along the most dangerous of roads.\n\nHe defeats the huge monsters and disembarks at the next port. He thinks he could remain undetected among the countless ships, but he is stopped by a redhead woman. She salutes him in thanks, saying she is with one of the ships he had rescued.\n\nHe is about to turn and leave when he sees a parked train besides the redhead woman.\n\n'Where's your next stop?'\n'...Haven't decided yet.'\n'Then would you like to board our Express?'\n'...'\n'We're retracing our previous journey. There's so much to see all over again. We need a guard... And an archiver.'\n'...'\n'You can get off any time once you made up your mind on where to go.'\n'Alright.'",

                story_4: "A new dawn begins.\nHe rubs his eyes, realizing it had been too long since he had such a good night's sleep. He considers himself as only staying temporarily and refused the room specially prepared for him, making a simple bed on the floor of the Archives. However, he stayed up all night reading the data bank. At some point, he'd drifted off to sleep.\n\nHe opened the door to find the conductor standing there, reprimanding him for staying up late — Otherwise he'd miss out on a piping hot breakfast and would've wasted the care put into it. He nods and the conductor quietens down in satisfaction, wobbling as they lead him into the passenger car.\n\nThe redhead woman — who he now knows is named Himeko — flashes him a smile. The brunet man to the other side — Mr. Yang — remains silent despite appearing to have many questions on his mind.\n\nBefore he knew it, he'd spent many a morning just like this.\n\nThe process of re-visiting the route is not easy, mostly due to the numerous roadblocks caused by Stellaron. Sometimes, they would encounter the huge monsters he'd defeated before. They even found an enormous chunk of floating ice — encased in which was a living girl.\n\nThat's why he wasn't very surprised when he detected that the (boy/girl) named Trailblazer has an actual Stellaron sealed inside his/her body.\n\nThe Express's journey will continue on. Is there anything beyond the realm of possibility?",
            }
        },
        traces: {
            skills: [
                {
                    title: "Basic Attack",
                    name: "Cloudlancer Art: North Wind",
                    targetting: "Single Target",
                    desc: "Deals Wind DMG equal to 100% of Dan Heng's ATK to a single enemy.",
                    toughness: 10
                },
                {
                    title: "Talent",
                    name: "Superiority of Reach",
                    targetting: "Enhance",
                    desc: "When Dan Heng is the target of an ally's Ability, his next attack's Wind RES PEN increases by 36%. This effect can be triggered again after 2 turn(s).",
                    toughness: 0
                },
                {
                    title: "Skill",
                    name: "Cloudlancer Art: Torrent",
                    targetting: "Single Target",
                    desc: "Deals Wind DMG equal to 260% of Dan Heng's ATK to a single enemy. On a CRIT Hit, there is a 100% base chance to reduce the target's SPD by 12% for 2 turn(s).",
                    toughness: 20
                },
                {
                    title: "Ultimate",
                    name: "Ethereal Dream",
                    targetting: "Single Target",
                    desc: "Deals Wind DMG equal to 400% of Dan Heng's ATK to a single enemy. If the enemy is Slowed, the Ultimate's DMG multiplier increases by 120%.",
                    toughness: 20
                },
                {
                    title: "Technique",
                    name: "Splitting Spearhead",
                    targetting: "Enhance",
                    desc: "After Dan Heng uses his Technique, his ATK increases by 40% at the start of the next battle for 3 turn(s).",
                    toughness: 0
                },
            ],
            awakenings: [
                {
                    stage: 2,
                    name: "Hidden Dragon",
                    desc: "When current HP percentage is 50% or lower, reduces the chance of being attacked by enemies.",
                },
                {
                    stage: 4,
                    name: "Faster Than Light",
                    desc: "After launching an attack, there is a 50% fixed chance to increase own SPD by 20% for 2 turn(s).",
                },
                {
                    stage: 6,
                    name: "High Gale",
                    desc: "Basic ATK deals 40% more damage to Slowed enemies.",
                },
            ],
            stats: [
                {
                    stat: "Wind DMG",
                    amt: 22.4,
                },
                {
                    stat: "Attack",
                    amt: 18,
                },
                {
                    stat: "Defense",
                    amt: 12.5,
                },
            ]
        }
    },

    {
        name: "Himeko",
        path: "Erudition",
        element: "Fire",
        faction: "Astral Express",
        intro: "The one who repaired the Astral Express.\nTo witness the vast starry sky, she decided to travel within the Astral Express.\nHer hobby is brewing hand-made coffee.",
        story: {
            stories: {
                details: "An adventurous scientist encountered the Astral Express as a young woman when it got stranded in her homeworld.\nYears later, when Himeko finally repaired the Express and began her journey into the stars, she realized that this is only the beginning. On her journey to trailblaze new worlds, she would need many more companions...\nAnd while they may have different destinations, they all gaze at the same starry sky.",

                story_1: "The girl is lost.\n\nShe can't remember when she became lost. She just walked and walked, on and on into the dark night, chasing the sun and the moon, over and over again - until she falls.\n\nShe remembers what she looked like as a college freshman, remembers her chosen major - intersterllar travel dynamics - and now she's lying face down in the mud.\n\nShe looks up to the stars, and just then sees meteors streaming down: One, two, three... And then more, smaller ones, flickering and flashing ever so finely before the magnificent blaze tore open the night.\n\nHer limbs drag her forward, leading her on to where the land meets the ocean. At the shoreline, the waters jostle against her like how the tide treats that stranded Express, alone and lost.\n\nShe walks in and see the scenery outside beginning to change. The Express shows her a myriad of magnificent worlds. They are faraway, beyond her homeworld, yet also close enough to be a simple train ride.\n\nShe tries to repair the Express. It starts up only briefly, but it is enough to skid across the sky of her home. She immediately sees the path home. From that altitude, the journey is so short, and even the ocean of her homeworld appears so insignificant.\n\nIt asked her whether she'd like to travel together. She wonders what kind of journey that would be.\n\n'A journey to the beginning.'\n'Lets go then.' Without hesitation, the girl replied, 'Just as you brought me home, so would I take you home, too.'",

                story_2: "Himeko has a suitcase.\n\nThis suitcase is her treasure trove. Previously, she'd filled it with all kinds of train repair tools to fix up the Express. But now, it's packed with a molecular saw, an escaped satellite, and countless other contraptions - the embodiment of her whims and the proof of her resolute will.\n\nNo travel companion is more faithful to her than this suitcase. Passengers come and go on the Express, and perhaps not even 'the conductor' would be able to accompany her and the Express from start to finish.\n\nBut she doesn't care. She didn't care when that pretentious blond man left without saying goodbye, just like how she didn't care about her distant homeworld and old fiends.\n\nShe knows that this journey is lonely. Even if she could get to know like-minded travel companions, even if they showed her generous grace, even if she could witness the end of a complete journey with those companions - that's all just a momentary fluke.\n\nShe knows that this journey is lonely. NObody can follow in the exact same footsteps as anyone else. Nobody can experience for someone else everything that happens along a journey. All she can rely on are her own two eyes and feet.",

                story_3: "Himeko's memory is very good.\n\nThe longer the journey gets, the more travel companions she accrues. She can still remember many of them.\n\nShe remembers her awkward chit-chats with Pom-Pom, and how the first two passengers aboard the Express were Welt and his Blond friend. She remembers how the taciturn Dan Heng defeated the monsters that can swallow stars with just one strike of his lance. She remembers how March 7th had awoken from her icy sulmber, all the outfits she'd designed for March, and what March loves the most. She rememberes how the Crew arrived at Herta Space Station, how she met Trailblazer, and how they'd embarked on a new journey once more.\n\nShe remembers the specifications for every single component of the Express and how they're assembled. She remembers when to oil the Express' bearings and when each plant on the Express needs watering. She remembers Pom-Pom's non-negotiable bottom line, and that Welt has rather juvenile hobbies. She remembers that Dan Heng is always pulling all nighters to organize the data bank, and how March 7th loves to sleep in. She remembers the personality, habits, hobbies, birthdays, and other anniversary days of everyone aboard the Express. And she remembers much, much more.\n\nThe greatest pleasure for Himeko is that everyone can safely reach their destination on the Express.\n\n'Traveling always has an endpoint. When it happens, I'll smile and say goddbye to everyone.'\n\nIt's memory that has formed the road she came from, and memory that will eventually return her to the seas on whence she came.",

                story_4: "'What a long journey.' She says.\n\n'I've been waiting for so, so long. |REDACTED| looks at her: 'It wasn't bad luck that has led you down this path, but wanderlust and curiosity'\n\n'Of course,' she smiles, 'But I've experienced far less than what you've been through.'\n\n'No, I've never experienced the things you have.' |REDACTED| shakes their head:'There are as many routes as there are pairs of feet.'\n\n'Right now, we may be standing in the same place, but we harbor different thoughts and views.'\n\nTogether, they look up to the stars in silence, and just then saw meteors streaming down: One, two, three... And then more, smaller ones, flickering and flashing ever so finely before a magnificent blaze tore open the night.\n\nA quiet voice disturbs the still air once more:'What do you see?'\n\n'The stars have finished their journey.' She says.\n\n|REDACTED| laughs: 'I, instead, see that their journey is only just beginning.'\n\nThey do not speak again.\n\n'Lets go back. they're waiting for me.'",
            }
        },
        traces: {
            skills: [
                {
                    title: "Basic Attack",
                    name: "Sawblade Tuning",
                    targetting: "Single Target",
                    desc: "Deals Fire DMG equal to 100% of Himeko's ATK to a single enemy.",
                    toughness: 10
                },
                {
                    title: "Talent",
                    name: "Victory Rush",
                    targetting: "AoE",
                    desc: "When an enemy is inflicted with Weakness Break, Himeko gains 1 point of Charge (max 3 points). If Himeko is fully Charged when an ally performs an attack, Himeko immediately performs 1 follow-up attack and deals Fire DMG equal to 140% of her ATK to all enemies, consuming all Charge points. At the start of the battle, Himeko gains 1 point of Charge.",
                    toughness: 10
                },
                {
                    title: "Skill",
                    name: "Molten Detonation",
                    targetting: "Blast",
                    desc: "Deals Fire DMG equal to 200% of Himeko's ATK to a single enemy and Fire DMG equal to 80% of Himeko's ATK to enemies adjacent to it.",
                    toughness: 20
                },
                {
                    title: "Ultimate",
                    name: "Heavenly Flare",
                    targetting: "AoE",
                    desc: "Deals Fire DMG equal to 230% of Himeko's ATK to all enemies. Himeko regenerates 5 extra Energy for each enemy defeated.",
                    toughness: 20
                },
                {
                    title: "Technique",
                    name: "Incomplete Combustion",
                    targetting: "Impair",
                    desc: "After using Technique, creates a dimension that lasts for 15 second(s). After entering battle with enemies in the dimension, there is a 100% base chance to increase Fire DMG taken by enemies by 10% for 2 turn(s). Only 1 dimension created by allies can exist at the same time.",
                    toughness: 0
                },
            ],
            awakenings: [
                {
                    stage: 2,
                    name: "Starfire",
                    desc: "After using an attack, there is a 50% base chance to inflict Burn on enemies for 2 turn(s). When afflicted with Burn, enemies take Fire DoT equal to 30% of Himeko's ATK at the start of each turn.",
                },
                {
                    stage: 4,
                    name: "Magma",
                    desc: "Skill deals 20% more DMG to enemies currently afflicted with Burn.",
                },
                {
                    stage: 6,
                    name: "Benchmark",
                    desc: "When current HP percentage is 80% or higher, CRIT Rate increases by 15%.",
                },
            ],
            stats: [
                {
                    stat: "Fire DMG",
                    amt: 22.4,
                },
                {
                    stat: "Attack",
                    amt: 18,
                },
                {
                    stat: "Effect Resistance",
                    amt: 10,
                },
            ]
        }
    },

    {
        name: "Welt",
        path: "Nihility",
        element: "Imaginary",
        faction: "Astral Express",
        intro: "A seasoned member of the Express crew. The passion buried in his heart burns anew as he enjoys this fresh adventure. Occasionally, he would sketch the experiences in a notebook.",
        story: {
            stories: {
                details: "The wise and sophisticated former Anti-Entropy Sovereign who inherits the name of the world - Welt. He has saved Earth from annihilation time and time again.\n\nAfter the incident with St. Fountain came to a close, Welt had no choice but to venture with the initiator of the incident to the other side of the portal.\n\nPerhaps even he didn't expect the new journey nor companions that awaited him there.",

                story_1: "On the way to the portal, Welt took out a pen and started outlining a sketch. For the eight years prior to that moment, he'd been repeating this job.\n\n Going back further in time, he would construct objects in a different way, as long as the images could be pictured in his mind. But he could never regard that as 'creation,' because they were just the way the original is. Those had nothing to do with his mind.\n\nThis is just the duty of the man who inherited the name of the world. If the world needs him to save it, then he will become that hero without hisitation. He has fallen down many times and been mocked even more, but he will always stand before everyone either in the past or the future - he will never change.\n\nOnly now, he finds himself embarking on a new journey.",

                story_2: "When Welt returned to that dangerous cosmic battlefield, he could feel his blood start to boil once more.\n\nEven when his spaceship lost power and was drifting aimlessly through space, he joked casually with his companion: 'The end of one adventure is often the beginning of another.'\n\nWhen a passing-by Himeko managed to save them and informed them that they couldn't go back home, he kept up his jokes: 'This is like something out of a cartoon, and it's far too coincidental to be real.'\n\nLife really is that coincidental.\n\nSince he can't find his way back home and can't live out a peaceful existence for the time being, why doesn't he take up arms again and fight?\n\nThis time, there is no burden or destiny to bear. Everything shall obey his own will.",

                story_3: "These days, Welt rarely fights, and it remains unknown whether or not he retains the strength from his heyday. Gravity manipulation has remained his usual combat means, ever since his cane was transformed from the Star of Eden.\n\nHe suppresses his enemies with gravity, even creating a kind of mini-black hole - what he considered his everyday powers are met with amazement by the youngsters of the Express.\n\n'Mr. Yang's incredible, amazing!'\n'If you need help with anything, Trailblazer, go ask Mr. Yang.'\n'You need to take turns. Let him rest a little while...'\n\nHe is shocked to realize that his carelessness and surety are the results of his countless experiences, marks of the relentless passage of time he had endured. However, the youths aboard the Express are like blank pieces of paper, writing out their own lives.\n\nWhat kind of responsiblities should he take on in their lives?\n\nHe couldn't help but think of the names of people throughout his life who had helped him before.",

                story_4: "- Welt's Log |DATE|/|DATE|/|DATE\n\n|REDACTED|'s relationship with the protagonists:\n\n|REDACTED|-|REDACTED|'s sparkling personality is just like the protagonist in a cartoon. Go for it!\n|REDACTED| - A lively youth. I hope she can keep being imaginative, and not feel guilty even if she stumbles. Youths are always going to make mistakes, and |REDACTED| will be able to support her.\n|REDACTED| - A reliable youth. There's no need to worry about him. I hope he can chat more with |REDACTED|, but if he doesn't want to, then that's fine.\n|REDACTED| - I can trust this companion with my life,|REDACTED| believes she will make the right decision.\n||REDACTED| - A common character in cartoons. Seemingly just a normal creature, but actually possesses frighteningly powerful abilities and a complicated background.\n\nNote: If I ever get back home, consider making a cartoon out of this.",
            }
        },
        traces: {
            skills: [
                {
                    title: "Basic Attack",
                    name: "Gravity Suppression",
                    targetting: "Single Target",
                    desc: "Deals Imaginary DMG equal to 100% of Welt's ATK to a single enemy.",
                    toughness: 10
                },
                {
                    title: "Talent",
                    name: "Time Distortion",
                    targetting: "Enhance",
                    desc: "When hitting an enemy that is already Slowed, Welt deals Additional Imaginary DMG equal to 60% of his ATK to the enemy.",
                    toughness: 10
                },
                {
                    title: "Skill",
                    name: "Edge of the Void",
                    targetting: "Bounce",
                    desc: "Deals Imaginary DMG equal to 72% of Welt's ATK to a single enemy and further deals DMG 2 extra times, with each time dealing Imaginary DMG equal to 72% of Welt's ATK to a random enemy. On hit, there is a 75% base chance to reduce the enemy's SPD by 10% for 2 turn(s).",
                    toughness: 20
                },
                {
                    title: "Ultimate",
                    name: "Synthetic Black Hole",
                    targetting: "AoE",
                    desc: "Deals Imaginary DMG equal to 150% of Welt's ATK to all enemies, with a 100% base chance for enemies hit by this ability to be Imprisoned for 1 turn. Imprisoned enemies have their actions delayed by 40% and SPD reduced by 10%.",
                    toughness: 20
                },
                {
                    title: "Technique",
                    name: "Gravitational Imprisonment",
                    targetting: "Impair",
                    desc: "After using Welt's Technique, create a dimension that lasts for 15 second(s). Enemies in this dimension have their Movement SPD reduced by 50%. After entering battle with enemies in the dimension, there is a 100% base chance to Imprison the enemies for 1 turn. Imprisoned enemies have their actions delayed by 20% and SPD reduced by 10%. Only 1 dimension created by allies can exist at the same time.",
                    toughness: 0
                },
            ],
            awakenings: [
                {
                    stage: 2,
                    name: "Retribution",
                    desc: "When using Ultimate, there is a 100% base chance to increase the DMG received by the targets by 12% for 2 turn(s).",
                },
                {
                    stage: 4,
                    name: "Judgment",
                    desc: "Using Welt's Ultimate additionally regenerates 10 Energy.",
                },
                {
                    stage: 6,
                    name: "Punishment",
                    desc: "Deals 20% more DMG to enemies inflicted with Weakness Break.",
                },
            ],
            stats: [
                {
                    stat: "Imaginary DMG",
                    amt: 14.4,
                },
                {
                    stat: "Attack",
                    amt: 28,
                },
                {
                    stat: "Effect Resistance",
                    amt: 10,
                },
            ]
        }
    },
];

const enemies = [
    {
        name: "Baryon",
        affiliation: "Antimatter Legion",
        weakness: ["Ice", "Wind"],
        desc: "In order to prevent antiparticles from dissipating and annihilating normal matter, the Antimatter Legion created two types of miniature ion traps for transportaion, collectively reffered to as Baryons and Antibaryons. Baryons have basic intelligence and can clear the path according to the commands and summons of Voidrangers on the battlefield."
    },
    {
        name: "Antibaryon",
        affiliation: "Antimatter Legion",
        weakness: ["Physical", "Quantum"],
        desc: "In order to prevent antiparticles from dissipating and annihilating normal matter, the Antimatter Legion created two types of miniature ion traps for transportaion, collectively reffered to as Baryons and Antibaryons. Antibaryons have basic intelligence and can clear the path according to the commands and summons of Voidrangers on the battlefield."
    },
    {
        name: "Voidranger: Reaver",
        affiliation: "Antimatter Legion",
        weakness: ["Physical", "Shock"],
        desc: "Warriors yet to perish were recast in the Warfroge and gained Destruction's power. Antimatter completes their bodies and negative particles reverberate throughout their forms. Violently aggressive, they embody the will of Destruction and are basic combat units of the Antimatter Legion, acting only according to their destructive insticts."
    },
    {
        name: "Voidranger: Distorter",
        affiliation: "Antimatter Legion",
        weakness: ["Wind", "Imaginary"],
        desc: "A Voidranger that has successfully survived particle annhilation, the positive and negative particles in its body have temporarily achieved a strange balance, granting them more power than ordinary reavers. Basic combat units of the Antimatter Legion. They possess some intelligence and are able to control reavers within a small surrounding area."
    },
    {
        name: "Voidranger: Eliminator",
        affiliation: "Antimatter Legion",
        weakness: ["Fire", "Ice", "Quantum"],
        desc: "Bodies that continued to be corroded by the Fragmentum after death. While their vital signs have changed, they continue to carry out their orders to eliminate. Voidranger: Eliminators will mark enemies they hit, cuasing them to take extra damage when attacked."
    },
    {
        name: "Mara-Struck Soldier",
        affiliation: "Sanctus Medicus",
        weakness: ["Fire", "Ice", "Quantum"],
        desc: "Soldiers of the Xianzhou who somehow fell into madness. Their bodies continue to grow and mutate and have long lost their humanoid form. It is said that the long-lived Xianzhou natives would eventually be stricken with mara."
    },
    {
        name: "Disciples of Sanctus Medicus: Internal Alchemist",
        affiliation: "Sanctus Medicus",
        weakness: ["Physical", "Imaginary"],
        desc: "A member of the Disciples of Sanctus Medicus, the secret sect that hid within the Xianzhou Luofu. With medicine, purify the heart. With elixir, transform one's body. They long to revive the ancient mysteries of Abundance, hoping to spur Xianzhou natives towards their next stage of evoltuion."
    },
    {
        name: "Disciples of Sanctus Medicus: Shape Shifter",
        affiliation: "Sanctus Medicus",
        weakness: ["Ice", "Wind", "Imaginary"],
        desc: "A cultivator who longs to revive the ancient mysteries of Abundance, and to guide the Xianzhou natives back on the liberating path of immortality. Now, their wish has been fulfilled. Gifted by the power of the ancient miracle and using it as both weapon and armor, they managed to touch on the secret of immortality."
    },
    {
        name: "Disciples of Sanctus Medicus: Ballistarius",
        affiliation: "Sanctus Medicus",
        weakness: ["Physical", "Ice", "Wind"],
        desc: "A member of the Disciples of Sanctus Medicus, the secret organization that had lain hidden in the Xianzhou Luofu. They pursue cultivation using tools and merge with them. They long to revive the lost secrets of Abundance, hoping to spur Xianzhou natives toward their next stage of evolution."
    },
    {
        name: "Abundant Ebon Deer",
        affiliation: "Sanctus Medicus",
        weakness: ["Fire", "Ice", "Quantum"],
        desc: "An auspicious spritual beast wrought into being by the Ambrosial Arbor and protects its roots. Its arrival brings along exuberant vegetation and promises good fortune. Once destroyed during ancient wras, the Ambrosial Arbor is mended by the Stellaron and finally revives. Rare creatures and legendary beasts made by celestials of the past all return to this world, like an old dream coming alive again."
    },
];

const aeons = [
    {
        name: "Akivili",
        path: "The Trailblaze",
        quote: "Countless shooting stars streak across the night sky... If you can pick the right one, it will carry your wish to thousands of distant worlds.",
        desc: "There are three directions on the compass of desinty - the Unknown, the Known, and the Unknowable. THEY can tolerate the Unknown, but will never bow to the Unknowable. Akivili left the isolated world of Pegana and continued to expand the unknown edges o the universe, trying to find an endpoint of the Tree of Existence. Unfortunately, Akivili's destiny was abruptly ended due to an accident."
    },
    {
        name: "Nanook",
        path: "The Destruction",
        quote: "If the increase of entropy is a fundamental law of the universe, then the heat death would be the inescapable destiny o the material world. So, why is it that we bother to struggle to survive? Expansion, fusion, and then annihilation. If we with to welcome the new, then we must first embrace the end.",
        desc: "The birth of the universe is a mistake. If civilization is a cancer emerging quietly from the boundless stars, then war is the only common language known to all intelligent life. To crrect this mistake and to clean up this tainted universe, Nanook became the avatar of entropy."
    },
    {
        name: "Lan",
        path: "The Hunt",
        quote: "With no end to hate and no boundaries to war, how much concern do you shoulder? With determined eyes an the arrow drawn, the Reignbow Arbiter needs not turn back hither.",
        desc: "The Aeon known as the Reignbow Arbiter wanders endlessly between worlds to destroy the undead beings that once poisoned their homeworld. The cost of the hunt was never a consideration for Lan. There is often no difference between the salvation they offer and total destruction."
    },
    {
        name: "Nous",
        path: "The Erudition",
        quote: "If the truth of the universe is cruel and stale, would you still yearn for the answer to the ultimate question? Knowledge seekers know not how to judge, for their core is cold and unwavering... As are the ends of Paths they set out to seek.",
        desc: "All things bear unanswered questions, and t here is an answer to everything. The astral computer originally meant to provide answers to the universe ascended to Aeonhood. Nous hopes to understnad the universe and solve all of its mysteries."
    },
    {
        name: "Qlipoth",
        path: "The Preservation",
        quote: "The philosopher gazes upon the stars trying to find the ultimate goal of civilization - 'Build a wall.' A majestic voice echoed in his head. 'Build a wall.'",
        desc: "The builder of the Celestial Comet Wall, the Subspace Crystalline Barrier, and the Great Attractor Base. Followers call THEM the 'Amber Lord,' one of the oldest and most tenacious Aeons, having survived the 'Dusk Wars.' Aware of the imminence of THEIR moratl enemy's devouring, the Amber Lord forged a powerful light-years-long seal that would isolate and protect the living worlds."
    },
    {
        name: "Xipe",
        path: "The Harmony",
        quote: "'The world is in harmony and the stars shine bright. Praise the Lord! All are connected and the wind of blessing breathes across the lands!'",
        desc: "A plural Aeon from multiple harmonious worlds. The glorious Xipe of thousand faces is chanting songs of joy and happiness.\nTo battle the brutality of the laws of the universe, intelligent lifeforms must discard their cowardly selfishness and the differences between individuals, fusing into one singular melody - to have the strong help the weak, and the to protect life with death."
    },
    {
        name: "IX",
        path: "The Nihility",
        quote: "'You may gaze deep into the vast grandeur of the stars, but do not glance at the abyss of the void... for it holds nothing except for the ability to make mortals lose all reason and thought.'",
        desc: "The existence of Nihility is a mystery itself, THEIR form enshrouded by layers of mist. IX doesn't interact with the other Aeons. THEY believe that the ultimate fate of the mutliverse is nothingness, and therefore, worthless."
    },
    {
        name: "Yaoshi",
        path: "The Abundance",
        quote: "'The flowers share their petals without care, waiting for their inevitable withering destiny. The birds fly high in song, moving toward their inevitable crash and death. The streams flow rapidly with life, in a direction where they inevitably run dry. Why must all things come to an end? There must be a miracle somewhere in the universe that can cure the disease known as finality.'",
        desc: "Ask with sentiment, and you shall receive.\nYaoshi is the nurturer of the people, the god of peace. THEIR presence ensures the existence of life.\nYaoshi is an Aeon who answers all prayers and cannot bear to see death and the pains of illness."
    },
    {
        name: "Fuli",
        path: "The Remembrance",
        quote: "'Time - the hardest working thief in the world. It keeps stealing away our present from us, and tossing it away in a warehouse named Memory. Some are addicted to recuperating their losses... Others care not in the slightest.'",
        desc: "There is no existence more embracing than the Remembrance in its purest form: It chronsicles everything with neither affinity nor aversion. It unselfishly preserves every single fundamental fact and every single resplendent form. It is a river formed by the continuous flow of life, a treasure built from the eternal wisdom of antiquity.\n- And Fuli is the fish that swims back upstream in this river, the very key to this treasure vault. Seated in mediation at the heart of the Pure Land, THEY observe in silence the world's tireless repetitions of the same mistakes over and over again."
    },
    {
        name: "Aha",
        path: "The Elation",
        quote: "'The Erudition is a hunk of junk, the Preservation is a fool, the Hunt has no sense of humor, an the Destruction is a lunatic. All the Aeons are as stubborn as they come. What a shame for Aha!'",
        desc: "To savor joy is a privelege unique to sentient beings. Neither the dusty rocks nor the distant stars can fathom the humor that life entails.\nGo seek adversaries worth of your mettle, games that while away the hours, and outcomes indifferent to victory or defeat.\nGo chase laughter that leaves you breathless, twists born of fate's wimsy, and songs that ascend your soul."
    },
    {
        name: "Oroboros",
        path: "The Voracity",
        quote: "'Insects are to birds, as hares are to wolves. The stars are to the black hole, as the worlds are to the voracity.'",
        desc: "The drinker of worlds, the unsatisfied devourer, the black hole with thought, THEY are an Aeon and a Leviathan at the same time.\nIn the eyes of Oroboros, life is a flickering fragment floating in the sea of void, destined to return to the darkness along with the stars which birthed THEM - This darkness is within the depths of THEIR mouths."
    },
    {
        name: "Idrila",
        path: "The Beauty",
        quote: "'There is beauty in a stretch of fabric, in the lines of a poem, and in a few notes in a song - Welcome to an era where the idea of 'beauty' is absolutely worthless! How vulgar! How hopeless! How sad!'",
        desc: "Idrila witnessed the ultimate meaning of the world's existence through the ever-changing view of the universe, known to the rest as the concept of 'beauty.'\nThe Aeon of Beauty suddenly vanished one day. It was just as mysterious as when THEY first appeared."
    },
    {
        name: "Tayzzyronth",
        path: "The Propagation",
        quote: "'Hurry and shut your doors and windows if shadows appear at the noontide horizon, for that is no early dusk but the hungering Swarm.'",
        desc: "Tayzzyronth, also known as the Imperator Insectorum, the Sand King, and the creator of the Swarm Disaster.\nAs the last member of the Coleoptera that rules the land, THEIR Path was ignited out of a desire born from loneliness. Tayzzyronth metamorphosed into a self-duplicating horror, a torrent of infinite propagation. Tayzzyronth - Tayzzyronths rataher - fluttered across the worlds until THEIR advances were halted by fate in some way."
    },
    {
        name: "Mythus",
        path: "The Enigmata",
        quote: "'To stop questioning is to ask pouring rain to relinquish its faith in the glittering stars. Open yourself to the roaring river of metaphors, and you will find truth awaits, hiding at the end of the night sky, in the swirling rosy storm of a bygone age.'",
        desc: "It is a fallacy that all things can be experienced and recognized. The living seek to produce prophecies of the unknown based on their limited grasp of order, but little do they know that the universe has no end and that the truth is but a fevered dream.\n\nTo prevent the certainty that Erudition brought about from destroying the possibilities championed by Mythus, Mythus conjured the Fog of Thought and the Rain of Sensation to reveal to the mortals the inexplicable truth through the four agents: Morph, Screen, Riddle, and Mirage."
    },
    {
        name: "HooH",
        path: "The Equilibrium",
        quote: "'I stole away the golden weights, and felt proud of the ripples stirred up. The Aeon always sees right through my tricks and the stars reset the balance to zero.'",
        desc: "The chain of karma that mortals obsess over is nothing but a rough approximation of the complicated topology behinds all things - HooH dissolved THEIR will into the web of logic behing the universe's movement, maintaining the balance and stability of all things in perpetuity.\nAdventurous mortals tirelessly seek out flaws in this system, believing their intellect to be superior to that of the Aeon. However, little could they imagine that they have already been reduced to strings inside a surveillance system, unable to escape the meticulous network woven by HooH."
    },
]

async function seed() {
    try {
        // Delete pre-existing data to start with clean slate and no repeated data
        await Char.deleteMany({});
        await Enemy.deleteMany({});
        await Aeon.deleteMany({});

        // Create the data that were predeteremined
        const createdChars = await Char.create(chars);
        const createdEnemies = await Enemy.create(enemies);
        const createdAeons = await Aeon.create(aeons);

        // Just shows the data that were added to MongoDB Compass
        console.log('Characters: ', createdChars);
        console.log('Enemies: ', createdEnemies);
        console.log('Aeons: ', createdAeons);

        // End the mongoose connection, aka run this function once to not allow it to repeat
        await mongoose.connection.close();
    } catch (err) {
        console.log(err)
    }
}

seed();