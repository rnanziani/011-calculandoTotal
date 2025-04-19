// Inicializar todos los productos
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las tarjetas de producto
    const productCards = document.querySelectorAll('.product-card');
    
    // Inicializar cada tarjeta
    productCards.forEach(card => {
        // Obtener elementos dentro de esta tarjeta
        const precioInicial = card.querySelector('.precio-inicial');
        const cantidadElement = card.querySelector('.cantidad');
        const valorTotal = card.querySelector('.valor-total');
        const increaseBtn = card.querySelector('.increase');
        const decreaseBtn = card.querySelector('.decrease');
        
        // Establecer valores iniciales
        let precio = parseInt(precioInicial.textContent);
        let cantidad = 0;
        
        // Formatear el precio inicial con separador de miles
        precioInicial.textContent = precio.toLocaleString();
        
        // Actualizar el total
        function actualizarTotal() {
            cantidadElement.textContent = cantidad;
            valorTotal.textContent = (precio * cantidad).toLocaleString();
        }
        
        // Inicializar el total
        actualizarTotal();
        
        // Evento para aumentar cantidad
        increaseBtn.addEventListener('click', function() {
            cantidad++;
            actualizarTotal();
        });
        
        // Evento para disminuir cantidad
        decreaseBtn.addEventListener('click', function() {
            if (cantidad > 0) {
                cantidad--;
                actualizarTotal();
            }
        });
        
        // Evento para el botón comprar
        const buyButton = card.querySelector('.buy-button');
        buyButton.addEventListener('click', function() {
            if (cantidad > 0) {
                alert(`¡Compra realizada! Has comprado ${cantidad} unidades por un total de $${(precio * cantidad).toLocaleString()}`);
                cantidad = 0;
                actualizarTotal();
            } else {
                alert('Por favor selecciona al menos una unidad para comprar');
            }
        });
    });
});