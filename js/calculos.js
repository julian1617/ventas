
function calcularDiasVenta() {
    const fechaVencimiento = new Date(document.getElementById('fechaVencimiento').value);
    const fechaVenta = new Date(document.getElementById('fechaVenta').value);
    const diasVenta = Math.ceil((fechaVenta - fechaVencimiento) / (1000 * 60 * 60 * 24));
    document.getElementById('diasVenta').value = diasVenta;
}
document.getElementById('terminarVenta').addEventListener('click', function() {
    const fechaInicio = document.getElementById('fechaVencimiento').value;
    const fechaFin = document.getElementById('fechaVenta').value;
    const valorPagado = document.getElementById('valorPagado').value;
    const debe = document.getElementById('debe').checked ? 'Sí' : 'No';

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 400;
    canvas.height = 200;

    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.fillText(`Fecha de Inicio: ${fechaInicio}`, 10, 30);
    ctx.fillText(`Fecha de Fin: ${fechaFin}`, 10, 60);
    ctx.fillText(`Valor Pagado: ${valorPagado}`, 10, 90);
    ctx.fillText(`Debe: ${debe}`, 10, 120);

    const img = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = img;
    link.download = 'comprobante.png';
    link.click();
});