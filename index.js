function receivesAFunction(callback){
	callback();
}

function returnsANamedFunction(){
	return function named(){};
}

function returnsAnAnonymousFunction(){
	return () => {};
}






// function runFiveMiles() {
//   console.log("Go for a five-mile run");
// }

// function liftWeights() {
//   console.log('Pump iron');
// }

// function swimFortyLaps() {
//   console.log('Swim 40 laps');
// }


// function morningRoutine(exercise) {
//   var breakfast = null;
 
//   if (exercise === liftWeights) {
//     breakfast = 'protein bar';
//   } else if (exercise === swimFortyLaps) {
//     breakfast = 'kale smoothie';
//   } else {
//     breakfast = 'granola';
//   }
 
//   exerciseRoutine(exercise);
 
//   // we could give this function a name if we wanted to,
//   // but since it's only available _inside_ morningRoutine(),
//   // we don't need to
//   return function() {
//     console.log(`Nom nom nom, this ${breakfast} is delicious!`);
//   }
// }
