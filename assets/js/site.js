let navne = [
  "Atal",
  "Jonas",
  "Kasper",
  "Kristian",
  "Lui",
  "Mikkel",
  "Mingus",
  "Nikolaj",
  "Oliver",
  "Tobias",
  "Vitalii",
];

console.log(navne[1]);

function visNavn() {
    let index = document.getElementById("nameInput").value;
    let navn = navne [index];

    document.getElementById("resultat").innerHTML = navn;
}