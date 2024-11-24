//console.log("parallelogramarea are connnect");

function calculateParallelogramArea(){

    //console.log("parallelogrem are connected");

    // get the base of hte parallelogrem
    const baseInput = document.getElementById('parallelogram-base');
    const baseText = baseInput.value ;
    const base = parseFloat(baseText);
    console.log(base);


    //get the height of the parallelogrem
    const heightInput = document.getElementById('parallelogram-height');
    const heightText = heightInput.value ;
    const height = parseFloat(heightText);
    console.log(height);

    //calculate parallelogram area
    const area = base * height ;
    console.log(' area of the rectangle :',area);

    //display parallelogram area
    const parallelogramAreaSpan = document.getElementById('parallelogram-area');
    parallelogramAreaSpan.innerText = area;

}
