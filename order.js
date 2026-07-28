const form = document.getElementById("orderForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const description =
        document.getElementById("description").value;

    if(description.trim()==""){

        alert("Veuillez décrire votre projet.");

        return;
    }

    alert("Votre commande a été envoyée avec succès !");

    form.reset();

});

document.querySelector(".contactBtn").addEventListener("click",function(){

    alert("Vous allez être redirigé vers le chat avec l'ingénieur.");

});