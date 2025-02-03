document.addEventListener("DOMContentLoaded", function() {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny", "Sniffles"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 


    // Opgave 1: Lav en ny array med alle tal fra numbersArray, som er større end 20

    let newNumbers = numbersArray.filter(function(number) {
        return number > 20
    })
    console.log("Opgave 1", newNumbers)



    // opgave 2 Tilføj katten "Sniffles" til catsArray.
    console.log(catsArray)
    




}) // ends DOMContentLoaded