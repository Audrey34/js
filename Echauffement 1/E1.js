var name = prompt ("comment tu t'appelles?");

longName(name);

function longName(name){
  if((name.length > 1) && (name.length < 10))
  {
    alert(`Bonjour, ${name}`);
  }
  else{
    alert('Ton nom est chelou, du vent!!');
  }
}
