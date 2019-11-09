var menstru1;
var dmenstru1;
var menstru2;
var dmenstru2;
var cycle;
var ovulation;
var fecond_debut;
var fecond_fin;
var menstru3 = new Date();
var dovulation = new Date();
var dfecond_debut = new Date();
var dfecond_fin = new Date();
var cmenstru3;
var covulation;
var cfecond_debut;
var cfecond_fin;
var mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Décembre"]; 
var menstruation = menstru3.getMonth();
var date_ovul = dovulation.getMonth();
var date_debut = dfecond_debut.getMonth();
var date_fin = dfecond_fin.getMonth();
var ymenstru = menstru3.getFullYear();
var yovulation = dovulation.getFullYear();
var yfecond_debut = dfecond_debut.getFullYear();
var yfecond_fin = dfecond_fin.getFullYear();

function calcul(){
    menstru1 = document.getElementById("regle1").value;
    dmenstru1 = menstru1.split("-");
    
    menstru2 = document.getElementById("regle2").value;
    dmenstru2 = menstru2.split("-");

    
    if(dmenstru1[1]-dmenstru2[1] != 0){
        if(dmenstru2[1]%2 != 0 && dmenstru2[1]<08  || dmenstru2[1]%2 == 0 && dmenstru2[1]>08){
            cycle = parseInt((31 - dmenstru2[2])) + parseInt(dmenstru1[2]) - 1;

        }else if(dmenstru2[1]%2 != 0 && dmenstru2[1]>08  || dmenstru2[1]%2 == 0 && dmenstru2[1]<=08){
            cycle = parseInt((30 - dmenstru2[2])) + parseInt(dmenstru1[2]) - 1;
        }
        
    }else if(dmenstru1[1]-dmenstru2[1] == 0){
        cycle = Math.abs(dmenstru1[2] - dmenstru2[2]);
    }

    ovulation = Math.abs(cycle - 14);
    fecond_debut = Math.abs(ovulation - 4);
    fecond_fin = Math.abs(ovulation + 1);

    cmenstru3 = parseInt(dmenstru1[2]) + cycle;
    covulation = parseInt(dmenstru1[2]) + ovulation - 1;
    cfecond_debut = parseInt(dmenstru1[2]) + fecond_debut - 1;

    if(dmenstru1[1]%2 != 0 && dmenstru1[1]<08  || dmenstru1[1]%2 == 0 && dmenstru1[1]>08){
        if(cmenstru3>31){
            cmenstru3 = cycle - (31-dmenstru1[2]);
            menstruation += 1;
        }

        if(covulation>31){
            covulation = ovulation - (31-dmenstru1[2]);
            date_ovul = menstruation;
        }

        if(cfecond_debut>31){
            cfecond_debut = fecond_debut - (31-dmenstru1[2]);
            date_debut = menstruation;
        }

    }else if(dmenstru1[1]%2 != 0 && dmenstru1[1]>08  || dmenstru1[1]%2 == 0 && dmenstru1[1]<=08){
        if(cmenstru3>30){
            cmenstru3 = cmenstru3 - (30-dmenstru1[2]);
            menstruation += 1;
        }

        if(covulation>30){
            covulation = ovulation-(30-dmenstru1[2]);
            date_ovul = menstruation;
        }

        if(cfecond_debut>30){
            cfecond_debut = fecond_debut - (31-dmenstru1[2]);
            date_debut = menstruation;
        }
    }

    date_fin = date_ovul;

    if(dmenstru1[1]%2 != 0 && dmenstru1[1]<08  || dmenstru1[1]%2 == 0 && dmenstru1[1]>08){
        if(covulation == 31){
            cfecond_fin = 1;
            date_fin = menstruation;
        }else{
            cfecond_fin = parseInt(covulation) + 1;
        }
    }else if(dmenstru1[1]%2 != 0 && dmenstru1[1]>08  || dmenstru1[1]%2 == 0 && dmenstru1[1]<=08){
        if(covulation == 30){
            cfecond_fin = 1;
            date_fin = menstruation;
        }else{
            cfecond_fin = parseInt(covulation) + 1;
        }
    }

    menstru3.setDate(cmenstru3);
    dovulation.setDate(covulation);
    dfecond_debut.setDate(cfecond_debut);
    dfecond_fin.setDate(cfecond_fin);

    var resultat = document.getElementById('resultat')

    var newp1 = document.createElement("p");
    var newtext = document.createTextNode("Votre cycle dure "+cycle+"jours.");
    var newtext1 = document.createTextNode("Vos prochaines règles auront donc lieu le "+menstru3.getDate()+" "+mois[menstruation]+" "+ymenstru);
    newp1.appendChild(newtext);
    newp1.appendChild(newtext1);
    resultat.append(newp1);
    //document.body.append(newp1);

    var newp2 = document.createElement("p");
    var newtext = document.createTextNode("Vous êtes féconde de votre "+fecond_debut+"eme jour au "+fecond_fin+"eme jour. Soit du "+dfecond_debut.getDate()+" "+mois[date_debut]+" "+yfecond_debut+" au "+dfecond_fin.getDate()+" "+mois[date_fin]+" "+yfecond_fin);
    newp2.appendChild(newtext);
    resultat.append(newp2);
    //document.body.append(newp2);

    var newp3 = document.createElement("p");
    var newtext = document.createTextNode("Votre ovulation est le "+ovulation+"eme jour. C'est-à-dire le "+dovulation.getDate()+" "+mois[date_ovul]+" "+yovulation);
    newp3.appendChild(newtext);
    resultat.append(newp3);
    //document.body.append(newp3);
}