// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();
// Código del cuadrado

// Código del triangulo
console.group("Triangulos");

function perimetroTrinagulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
console.groupEnd();
// Código del triangulo

// Código Circulo
console.group("Círculos");

// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

//PI = 3.1415
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return  diametro * PI;
}

// Area
function areaCirculo(radio){
    return (radio * radio ) * PI;
}
console.groupEnd();
// Código Circulo