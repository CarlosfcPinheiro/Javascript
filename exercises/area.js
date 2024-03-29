function calc_area_per(height, width){
    let area = height*width;
    let perimeter = ((2*height) + (2*width));
    
    console.log(`Area: ${area}m² | Perimeter: ${perimeter}m`);
}

calc_area_per(5, 6);