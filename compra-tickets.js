const realPrice = {
    "1": 0.2,
    "2": 0.5,
    "3": 0.85
};

function calcularTotal() {
    const form = document.getElementById("tickets");

    const cantidad = form.elements["cantidad"];

    const categoria = form.elements["categoria"];

    const selectedCategoria = categoria.options[categoria.selectedIndex];

    let total = form.elements["total"];

    total.value = "Total a pagar: $" + (cantidad.value * 200 * realPrice[selectedCategoria.value]);
}

function enableButton() {
    const form = document.getElementById("tickets");

    const cantidad = form.elements["cantidad"];

    const resumen = form.elements["resumen"];

    resumen.disabled = cantidad.value == "";
}