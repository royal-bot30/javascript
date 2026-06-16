//declarer les variables
const rep1= document.getElementById("rep1")
const rep2=document.getElementById("rep2")
const rep3=document.getElementById("rep3")
const rep4=document.getElementById("rep4")
const resultat=document.getElementById("resultat")
const resetButton = document.getElementById("reset");
//vérification
console.log(rep1)
console.log(rep2)
console.log(rep3)
console.log(rep4)

//ajouter un evènement click
rep1.addEventListener("click", function() {
  if (resultat.textContent==='Faux!') { 
    resultat.textContent='';
  } else {
    resultat.textContent='Faux!';
    console.log("faux")
    resultat.style.color='red'
    resultat.classList.add('resultat')
  }
});

rep2.addEventListener("click", function() {
  if (resultat.textContent==='Faux!') { 
  resultat.textContent="";
 } else {
  resultat.textContent='Faux!';
    console.log("faux")
    resultat.style.color='red'
    element.classList.add('resultat')
  } 
});

rep3.addEventListener("click", function() {
    if (resultat.textContent==="Faux!") {
      resultat.textContent="";
      } else {
        resultat.textContent="faux!";
        console.log("faux")
        resultat.style.color="green";
        resultat.classList=("resultat");
        }
      });

rep4.addEventListener("click", function() {
  if (resultat.textContent==="Faux!") {
    resultat.textContent="";
    } else {
      resultat.textContent="Faux!";
      resultat.style.color="red";
      resultat.classList=("resultat");
      console.log('Faux');
      } 
    });

  //ajouter un evenement click sur le boutton  reset
  resetButton.addEventListener("click", function() {
    resultat.textContent = "";
    resetButton.style.color = "blue";
    resultat.classList.add('reset')
    
    
  });

  //colorer le resp4 et le reset
  rep4.style.color='blue';
  resetButton.style.color='yellow';
  rep2.style.color='black';
  rep1.style.color='red';
  rep3.style.color='green';
