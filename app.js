console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let favNum = Math.floor(Math.random() * 11);
console.log(favNum)
let userNum = prompt(`Select a number 1-10.`)
if(userNum < favNum){
    alert("Too Low! Try again later.")
}
else if(userNum > favNum){
    alert("Too High! Try again later.")
}
else{
    alert("Congradulations")
}
// Exercise 2
function marvelUn(){
    let hero = prompt(`Who is your favorite superhero?`);
    switch(hero.toLowerCase()){
        case "wolverine":
            alert("Magneto's Puppet!!");
            break;
        case "spiderman",
            "spider man",
            "spider-man":
            alert("Thats my personal favorite as well!");
            break;
        case "thor":
            alert("Arguably the strongest Avenger!");
            break;
        case "iron man":
            alert("Literal heart of steel");
            break;
        case "hulk":
            alert("Dare I say Dr. Jekyll and Mr. Hyde!?");
            break;
        case "captain america":
            alert("He can dou everything you can do just slightly better and faster!");
            break;
        case "daredevil":
            alert("Has sonar powers and can not see. Is he Batman?");
            break;
        default:
            alert("Are you sure your a Marvel fan?");

    }
}
function dcUn(){
    let hero = prompt(`Who is your favorite superhero?`);
    switch(hero.toLowerCase()){
        case "aquaman":
            alert("His super power......He can talk to fish");
            break;
        case "martian manhunter":
            alert("Basically like trying to fight a ghost");
            break;
        case "green lantern":
            alert("As strong as his imagination!");
            break;
        case "wonder woman":
            alert("Reflexes fast enough to dodge a bullete with a braclet");
            break;
        case "batman":
            alert("Secretly has a way to beat every super bein in existence");
            break;
        case "flash":
            alert("Faster than the expansion of space!");
            break;
        case "beastboy":
            alert("The power of nature in a boy!");
            break;
            default:
            alert("Are you sure your a DC fan?");

    }
}
let userInput2 = prompt(`Which is your favorite universe, Marvel or Dc?`);
switch(userInput2.toLowerCase()){
    case "marvel":
     marvelUniverse();
    break;
    case "dc":
        dcUniverse();
        break;
        default:
            alert("Stan Lee was the best at his craft")

}
console.log(userInput2)

