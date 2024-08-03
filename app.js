// Données sur les catégories d'IMC
const BMIData = [
    { name: "Vous êtes en maigreur ! 😢", color: "blue", range: [0, 18.5] },
    { name: "Vous êtes en bonne santé ! 😊", color: "green", range: [18.5, 25] },
    { name: "Vous êtes en surpoids ! 😑", color: "coral", range: [25, 30] },
    { name: "Vous êtes en obésité modérée ! 😖", color: "orange", range: [30, 35] },
    { name: "Vous êtes en obésité sévère ! 😣", color: "crimson", range: [35, 40] },
    { name: "Vous êtes en obésité morbide ! 😢", color: "purple", range: [40, Infinity] },
  ];
  
  // Sélection du formulaire
  const form = document.querySelector("form");
  
  // Ajout d'un event listener pour soumettre le formulaire
  form.addEventListener("submit", handleForm);
  
  // Fonction pour gérer la soumission du formulaire
  function handleForm(e) {
    e.preventDefault();
    calculateBMI();
  }
  
  // Sélection des inputs
  const inputs = document.querySelectorAll("input");
  
  // Fonction pour calculer l'IMC
  function calculateBMI() {
    const height = parseFloat(inputs[0].value);
    const weight = parseFloat(inputs[1].value);
  
    // Vérification des valeurs des inputs
    if (!height || !weight || height <= 0 || weight <= 0) {
      handleError();
      return;
    }
  
    // Calcul de l'IMC
    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
    console.log(BMI);
  
    // Affichage du résultat
    showResult(BMI);
  }
  
  // Sélection des éléments d'affichage
  const displayBMI = document.querySelector(".bmi-value");
  const result = document.querySelector(".message");
  
  // Fonction pour gérer les erreurs
  function handleError() {
    displayBMI.textContent = "Woups";
    result.textContent = "Remplissez correctement les champs du formulaire...";
  }
  
  // Fonction pour afficher le résultat
  function showResult(BMI) {
    // Recherche de la catégorie d'IMC correspondante
    const rank = BMIData.find(data => {
      if (BMI >= data.range[0] && BMI < data.range[1]) return true;
      else if (typeof data.range === "number" && BMI >= data.range) return true;
    });
  
    // Affichage de l'IMC
    displayBMI.textContent = BMI;
    // Mise à jour de la couleur du texte de l'IMC
    displayBMI.style.color = `${rank.color}`;
    // Mise à jour de la couleur du texte du message
    result.style.color = `${rank.color}`;
    result.textContent = `${rank.name}`;
  }
  