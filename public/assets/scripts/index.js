$(document).ready(() => {
    $('#place-order').click(placeOrder);

    populateOrders();
});

function populateOrders() {
    // Get all current burgers from database
    $.ajax({
        url: '/api/burgers',
        type: "GET"
    }).then(data => {
        // Append all burgers to order list
        for (let i = 0; i < data.length; i++) {
            $('.order-list').append(`<li>${data[i].burger_name}</li>`);
        }
    });
}

function placeOrder() {
    let burgerName = $('#burger-input').val();

    $('.order-list').append(`<li>${burgerName}</li>`);
}