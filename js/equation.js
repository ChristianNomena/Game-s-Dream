function solution()
{

    a1=parseInt(document.getElementById('a1').value);
    b1=parseInt(document.getElementById('b1').value);  
    c1=parseInt(document.getElementById('c1').value);   
    d1=parseInt(document.getElementById('d1').value);

    a2=parseInt(document.getElementById('a2').value);
    b2=parseInt(document.getElementById('b2').value);  
    c2=parseInt(document.getElementById('c2').value);   
    d2=parseInt(document.getElementById('d2').value);

    a3=parseInt(document.getElementById('a3').value);
    b3=parseInt(document.getElementById('b3').value);  
    c3=parseInt(document.getElementById('c3').value);   
    d3=parseInt(document.getElementById('d3').value);

    det = (a1*b2*c3)+(b1*c2*a3)+(c1*a2*b3)-(a3*b2*c1)-(b3*c2*a1)-(c3*a2*b1);
    detx = (d1*b2*c3)+(b1*c2*d3)+(c1*d2*b3)-(d3*b2*c1)-(b3*c2*d1)-(c3*d2*b1);
    dety = (a1*d2*c3)+(d1*c2*a3)+(c1*a2*d3)-(a3*d2*c1)-(d3*c2*a1)-(c3*a2*d1);
    detz = (a1*b2*d3)+(b1*d2*a3)+(d1*a2*b3)-(a3*b2*d1)-(b3*d2*a1)-(d3*a2*b1);
        
    x = document.getElementById("x");
    y = document.getElementById("y");
    z = document.getElementById("z");
    delta = document.getElementById("delta");
    
    
    delta.value = det ;
    if (det == 0)
    {
        document.getElementById("valiny").innerHTML = '>> IL N\'Y A PAS DE SOLUTION <<' ;
        x.value = '';
        y.value = '';
        z.value = '';
        
    }
    else 
    {
        document.getElementById("valiny").innerHTML = 'SOLUTION' ;
        x.value = detx/det;
        y.value = dety/det;
        z.value = detz/det;
        
    }
}

function reset()
{
    document.getElementById(corps);
    document.getElementById("valiny").innerHTML = '';
    a1.value ='';
    a2.value ='';
    a3.value ='';
    b1.value ='';
    b2.value ='';
    b3.value ='';
    c1.value ='';
    c2.value ='';
    c3.value ='';
    d1.value ='';
    d2.value ='';
    d3.value ='';
    delta.value=''
    x.value ='';
    y.value ='';
    z.value ='';
}