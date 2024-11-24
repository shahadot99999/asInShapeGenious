console.log('pentagon is connected');

function calculatePentagonArea(){
    //console.log('pentagon is connected');

    //get the perimeter
    const perimeterInput = document.getElementById('pentagon-perimeter');
    const perimeterText = perimeterInput.value ;
    const perimeter = parseFloat(perimeterText);
    console.log(perimeter);

    //get the apothem
    const apothemInput = document.getElementById('pentagon-apothem');
    const apothemText = apothemInput.value ;
    const apothem = parseFloat(apothemText);
    console.log(apothem);

    //get the calculate
    const area = 0.5 * perimeter * apothem ;
    console.log('area of the pentagon : ', area);

    //display the pentagon area 
    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
    
}