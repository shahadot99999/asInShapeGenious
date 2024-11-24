function calculateTriangleArea(){
    
    // get triangle base value
    // console.log('inside Function');
    const triangleBaseInput = document.getElementById('traiangle-base');
    const traiangleBaseInputText = triangleBaseInput.value;
    const base = parseFloat(traiangleBaseInputText)
    console.log( base);

    // get triangle height value
    const triangleHeightInput = document.getElementById('traiangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText)
    console.log(height);

    // calculate triangle area
    const area = 0.5 * base * height;
    console.log('area of the triangle is : ', area);


    // display triangle area
    const traiangleAreaSpan = document.getElementById('triangle-area');
    traiangleAreaSpan.innerText = area;
}