function circle(radius){
    let area = 3.14*(radius**2);
    let perimeter = 2*3.14*radius;

    console.log(`Circle's Area: ${parseInt(area)}cm² | Perimeter: ${parseInt(perimeter)}cm`);
}

circle(5);