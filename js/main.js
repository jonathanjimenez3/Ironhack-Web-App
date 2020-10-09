$(document).ready(function () {
    $("#button").click(function () {
      alert("This app is awesome!");
    });
  });

  async function getPeopleInSpace(){
    const peopleResponse = await fetch("https://superheroapi-m1.herokuapp.com/heroes/");
    const peopleJSON = await peopleResponse.json();
  return peopleJSON;
}
  getPeopleInSpace()