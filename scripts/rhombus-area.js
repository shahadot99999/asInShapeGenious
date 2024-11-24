//console.log("rhombus is connected");

function calculateRhombusArea(){
    // console.log('rhombus is welcome');
    
    //get the diagonial 1 
    const diagonialOneInput = document.getElementById('rhombus-diagonalOne');
    const diagonalOneText = diagonialOneInput.value ;
    const diagonalOne = parseFloat(diagonalOneText);
    console.log(diagonalOne);


    //get the diagonial 2
    const diagonialTwoInput = document.getElementById('rhombus-diagonalTwo');
    const diagonialTwoText = diagonialTwoInput.value ;
    const diagonalTwo = parseFloat(diagonialTwoText);
    console.log(diagonalTwo);


    // calculate rhombus area
    const area = 0.5 * diagonalOne *diagonalTwo ;
    console.log('area of the rhymbus:', area);

    //display the rhymbus area
    const rhymbusAreaSpan = document.getElementById('rhombus-area');
    rhymbusAreaSpan.innerText = area;
}