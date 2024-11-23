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
    console.log(height);;
}