//console.log('ellipse area are connected');
function calculateellipseArea(){
    //console.log('else button are okay');


    //get the semi major A
    const semiMajorAInput = document.getElementById('ellipse-semi-majorA');
    const semiMajorAText = semiMajorAInput.value ;
    const semiMajorA = parseFloat(semiMajorAText);
    console.log(semiMajorA);

     //get the semi  major B
     const semiMajorBInput  = document.getElementById('ellipse-semi-majorB');
     const semiMajorBText = semiMajorBInput.value;
     const semiMajorB = parseFloat(semiMajorBText);
     console.log(semiMajorB);


     // get the calculate
     const area = 3.1416 * semiMajorA * semiMajorB ;
     console.log('area of the ellipse :', area);

     //display the ellipse area
     const ellipseAreaSpan = document.getElementById('ellipse-area');
     ellipseAreaSpan.innerText = area;
}