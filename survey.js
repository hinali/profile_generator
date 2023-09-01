const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  rl.question('What is your favorite music: ', (music) => {
    rl.question('What is your favorite activity : ', (activity) => {
      rl.question('What is your favorite meal: ', (meal) => {
        rl.question('What is your favorite food: ', (food) => {
          rl.question('What is your favorite sports activity: ', (sport) => {
            rl.question('What activity you are amazing at: ', (activity2) => {
              console.log(`${name} loves listening to ${music} music,devouring ${food} for ${meal},
              prefers ${sport} over any other sport,and is amazing at ${activity2}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


