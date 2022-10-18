function yourName(){
  let userName = prompt('What is your name?');
  document.write (userName);
  console.log(userName);
}

function goodbye(userName){
  document.write(userName);
  console.log(userName);
}

function spiceYouLike(){
  let spice = prompt('Which of the 4 flavor profiles do you like most? Sweet, Savory, Spicy, Fragrant');
  console.log(spice);
  if (spice === 'sweet' || spice === 'Sweet'){
    alert ('If you like ' + spice + ', you will love our Valhalla Blend');
  }
  else if(spice === 'savory' || spice === 'Savory' ){
    alert ('If you like ' + spice + ', you will love our Pangea Blend');
  }
  else if(spice === 'spicy' || spice === 'Spicy'){
    alert ('If you like ' + spice + ', you will love our El Dorado Blend');
  }
  else if(spice === 'fragrant' || spice === 'Fragrant'){
    alert ('If you like Nick' + spice + ', you will love our Atlantis Blend');
  }
  else{
    alert('I didn\'t quite catch that? Explore around to find what you like');
  }
  return spice;
}

function userVisits(){
  let visit = prompt('If you could visit any mythical location where would it be?');
  console.log(visit);
  return visit;
}

function newSpice(){
  let newSpice = prompt('What kind of new spice blend would you like to see?');
  console.log(newSpice);
  return newSpice;
}
