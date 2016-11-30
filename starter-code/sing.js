console.log("sing.js loaded");

var bottles = prompt('how many bottles would you like?');

for(var i = bottles; i >= 0; i--){
    var bottle = i === 1 ? bottle = 'bottle ' : bottle = 'bottles ',
      verse = i + ' ' + bottle + 'of beer on the wall, \n'+ i + ' ' + 'bottles of beer! \n',
      verse2 = 'Take one down, pass it around, \n' + i + ' ' + bottle + 'of beer on the wall. \n';

    if(i === 0){
      console.log('No more bottles!');
      break;
    }
  console.log(verse + verse2);
}
