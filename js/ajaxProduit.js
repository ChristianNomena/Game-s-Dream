var getXMLHttpRequest = function ()
{
    var xhr = null; 
    if (window.XMLHttpRequest || window.ActiveXObject) {
        if (window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        } else {
            xhr = new XMLHttpRequest(); 
        }
    } else {
        alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
        return null;
    } 
    return xhr;
}


var httpRequest = getXMLHttpRequest()

httpRequest.onreadystatechange = function ()
{
    if (this.readyState == 4)
    {
        
        var produits = JSON.parse(this.responseText)

        var conteneurProduitBest = document.querySelector('.bestProduit')
        var conteneurProduitLast = document.querySelector('.lastProduit')
        var conteneurProduitFutur = document.querySelector('.futurProduit')

        for (var i=0; i<produits.length; i++)
        {
            var brochure = document.createElement('img')
            brochure.setAttribute('src', produits[i].image)
            brochure.classList.add('brochure')

            var lienImage = document.createElement('a')
            lienImage.setAttribute('src', '#')
            lienImage.setAttribute('onclick', 'alert(\'Acheter\')')
            lienImage.appendChild(brochure)

            var titre = document.createElement('h2')
            titre.innerText = produits[i].titre
            titre.classList.add('titreProduit')

            var prix = document.createElement('p')
            prix.innerText = produits[i].prix

            var bouton = document.createElement('button')
            bouton.innerText = "Acheter"
            bouton.setAttribute('onclick', 'alert(\'Félicitations! Vous avez acheté le produit\')')
            bouton.classList.add('bouton')

            var conteneurCarte = document.createElement('div')
            conteneurCarte.classList.add('conteneurCarte')
            conteneurCarte.appendChild(lienImage)
            conteneurCarte.appendChild(titre)
            conteneurCarte.appendChild(prix)
            conteneurCarte.appendChild(bouton)

            var produit = document.createElement('div')
            produit.classList.add('principale')
            produit.appendChild(conteneurCarte)

            if (produits[i].type.best == 1)
            {
                conteneurProduitBest.append(produit)
            }

            if (produits[i].type.recent == 1)
            {
                conteneurProduitLast.append(produit)
            }
            
            if (produits[i].type.future == 1)
            {
                conteneurProduitFutur.append(produit)
            }
        }
    }
}

httpRequest.open('GET', 'liste.json', true)
httpRequest.send()