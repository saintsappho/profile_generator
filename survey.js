const readline = require('readline');
let userProfile = {}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  userProfile.name = name;
  rl.question("Thanks! What's an activity you like doing? ", (hobby) => {
    userProfile.hobby = hobby
    rl.question("Cool! What do you listen to while doing that? ", (music) => {
    userProfile.musicTaste = music
      rl.question("Okay, so which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
     userProfile.faveMeal = meal
        rl.question("Alright! Then what's your favourite thing to eat for that meal? ", (faveFood) => {
      userProfile.faveFood = faveFood
          rl.question("Yummy! Which sport is your absolute favourite? ", (sport) => {
       userProfile.faveSport = sport
            rl.question("Last Question: What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
              userProfile.superPower = superpower
              console.log(userProfile)
              rl.close();
            });
          });
        });
      });
    });
  });
});
            