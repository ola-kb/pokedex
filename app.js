//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png
const container = document.querySelector('#container');
const pokeUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const buttonFirstGeneration = document.querySelector('#buttonFirstGeneration');
const generationFirst = document.querySelector('#generationFirst');

buttonFirstGeneration.addEventListener('click', function () {
   if (generationFirst.classList.contains('generationHidden')) {
      generationFirst.classList.remove('generationHidden')
   } else { generationFirst.classList.add('generationHidden') }
})

const buttonSecondGeneration = document.querySelector('#buttonSecondGeneration');
const generationSecond = document.querySelector('#generationSecond');

buttonSecondGeneration.addEventListener('click', function () {
   if (generationSecond.classList.contains('generationHidden')) {
      generationSecond.classList.remove('generationHidden')
   } else { generationSecond.classList.add('generationHidden') }
})

const buttonThirdGeneration = document.querySelector('#buttonThirdGeneration');
const generationThird = document.querySelector('#generationThird');

buttonThirdGeneration.addEventListener('click', function () {
   if (generationThird.classList.contains('generationHidden')) {
      generationThird.classList.remove('generationHidden')
   } else { generationThird.classList.add('generationHidden') }
})

for (let i = 1; i <= 386; i++) {
   const pokeDiv = document.createElement('div');
   pokeDiv.classList.add('pokeDiv');


   const label = document.createElement('span');
   label.innerText = `#${i}`;
   const newImg = document.createElement('img');
   newImg.src = `${pokeUrl}${i}.png`

   pokeDiv.appendChild(newImg);
   pokeDiv.appendChild(label);


   if (i <= 151) {
      generationFirst.appendChild(pokeDiv)
   }
   else if (i > 151 && i < 252) { generationSecond.appendChild(pokeDiv); }
   else {
      generationThird.appendChild(pokeDiv);
   }
}




// Leave the next line, the form must be assi\gned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const fvrPok = document.querySelector('#favouritePok');
const theBestOf = document.querySelector('#list');
form.addEventListener('submit', function (e) {
   e.preventDefault();
   const newLI = document.createElement('LI');
   newLI.innerHTML = fvrPok.value;
   theBestOf.appendChild(newLI);
   fvrPok.value = "";
});