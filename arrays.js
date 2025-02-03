document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny", "Sniffles"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 


    // Opgave 1: Lav en ny array med alle tal fra numbersArray, som er større end 20

    let newNumbers = numbersArray.filter(function (number) {
        return number > 20
    })
    console.log("Opgave 1", newNumbers)

    // opgave 2 Tilføj katten "Sniffles" til catsArray.
    console.log("Opgave 2",catsArray)


    //opgave 3 a Check om der i dogsArray er en hund som hedder "Trixie".
    let trixie = dogsArray.includes("Trixie")
    console.log("Opgave 3a",trixie)

    //opgave 3 a Check om der i dogsArray er en hund som hedder "Baxter".
    let baxter = dogsArray.includes("Baxter")
    console.log("Opgave 3b",baxter)

    //opgave 4 a Check om der i catsArray er en kat som hedder "Bagheera".
    let bagheera = catsArray.includes("Bagheera")
    console.log("Opgave 4a",bagheera)

    //opgave 4 b Check om der i catsArray er en kat som hedder "Salem".
    let salem = catsArray.includes("Salem")
    console.log("Opgave 4b",salem)

    //opgave 5 Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    let newNumbersArray = numbersArray.map(function (number) {
        return number * 3
    })
    console.log("Opgave 5",newNumbersArray)

    //opgave 6 Udskriv alle hundene i dogsArray i én lang streng. (Sådan her: BarneyMollyBaxter...)
    let dogsString = dogsArray.join("")
    console.log("Opgave 6",dogsString)

    //opgave 7 a Find ud af hvilket index "Mango" har i fruitsArray.
    let mangoIndex = fruitsArray.indexOf("Mango")
    console.log("Opgave 7a",mangoIndex)

    //opgave 7 b Find ud af hvilket index "Blåbær" har i fruitsArray.
    let BlåbærIndex = fruitsArray.indexOf("Blåbær")
    console.log("Opgave 7b",BlåbærIndex)

    //opgave 8 Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling. Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen. Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
    let pollyIndex = dogsArray.indexOf("Polly")
    console.log("Opgave 8",pollyIndex)

    // ekstra opgave Udskriv summen af alle tallene i numbersArray i konsollen:
    let sum = numbersArray.reduce(function (acc, number) {
        return acc + number
    }, 0)
    console.log("Ekstra opgave",sum)






}) // ends DOMContentLoaded