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

function perimetroTriangulo(lado1, lado2, base){
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

// Aquí interatuamos con el HTML


function calcularPerimetroCuadrado(){
    const div = document.getElementById("respuestaCuadrado");
    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);

    const perimetro = perimetroCuadrado(value);
    const p = document.createElement("p");
    p.innerHTML = `Perímetro: <b>${perimetro}</b> `;
    div.append(p);
}
function calcularAreaCuadrado(){
    const div = document.getElementById("respuestaCuadrado");
    const input = document.getElementById("InputCuadrado");
    const value = parseFloat(input.value);

    const area = areaCuadrado(value);
    const p = document.createElement("p");
    p.innerHTML = `Área: <b>${area}</b> `;
    div.append(p);
}
function calcularPerimetroTriangulo(){
    const div = document.getElementById("respuestaTriangulo");
    const lado1Trinagulo = document.getElementById("lado1Trinagulo");
    const lado1 = parseFloat(lado1Trinagulo.value);
    const lado2Trinagulo = document.getElementById("lado2Trinagulo");
    const lado2 = parseFloat(lado2Trinagulo.value);
    const baseTrinagulo = document.getElementById("baseTrinagulo");
    const base = parseFloat(baseTrinagulo.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);

    const p = document.createElement("p");
    p.innerHTML = `Perímetro: <b>${perimetro}</b> `;
    div.append(p);
}
function calcularAreaTrinagulo(){
    const div = document.getElementById("respuestaTriangulo");
    const baseTrinagulo = document.getElementById("baseTrinagulo");
    const base = parseFloat(baseTrinagulo.value);
    const alturaTrinagulo = document.getElementById("alturaTrinagulo");
    const altura = parseFloat(alturaTrinagulo.value);

    const area = areaTriangulo(base, altura);

    const p = document.createElement("p");
    p.innerHTML = `Perímetro: <b>${area}</b> `;
    div.append(p); 
}
function calcularPerimetroCirculo(){
    const div = document.getElementById("respuestaCirculo");
    const RadioCirculo =  document.getElementById("RadioCirculo");
    const radio = parseFloat(RadioCirculo.value);

    const perimetro = perimetroCirculo(radio);
    const p = document.createElement("p");
    p.innerHTML = `Perímetro: <b>${perimetro}</b> `;
    div.append(p);
}
function calcularAreaCirculo(){
    const div = document.getElementById("respuestaCirculo");
    const RadioCirculo =  document.getElementById("RadioCirculo");
    const radio = parseFloat(RadioCirculo.value);

    const area = areaCirculo(radio);
    const p = document.createElement("p");
    p.innerHTML = `Perímetro: <b>${area}</b> `;
    div.append(p);
}