document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var nota = parseFloat(document.getElementById('nota').value);
    var calificacion = obtenerCalificacion(nota);
    
    document.getElementById('calificacion').textContent = "Calificación: " + calificacion;
});

function obtenerCalificacion(nota) {
    if (isNaN(nota) || nota < 0 || nota > 10) {
        return 'Nota inválida';
    } else if (nota <= 3) {
        return 'Muy pobre';
    } else if (nota <= 5) {
        return 'Insuficiente';
    } else if (nota <= 6) {
        return 'Suficiente';
    } else if (nota <= 7) {
        return 'Está bien';
    } else if (nota <= 9) {
        return 'Notable';
    } else {
        return 'Sobresaliente';
    }
}
