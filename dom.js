const $card = document.querySelector(".card")

console.log($card)
console.log($card.className) //card
console.log($card.classList) //array, but its not an array
console.log($card.classList.contains("rotate-45")) //false
$card.classList.add("rotate-45")

console.log($card.classList.contains("rotate-45")) //true
console.log($card.className) //card
console.log($card.classList) //array, but its not an array
$card.classList.remove("rotate-45")

$card.classList.toggle("rotate-45") //add and remove
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("opacity-80", "sepia")
$card.classList.remove("opacity-80", "sepia")
$card.classList.toggle("opacity-80", "sepia")