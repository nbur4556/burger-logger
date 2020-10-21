$(document).ready(() => {
    $('#place-order').click(placeOrder);

    populateOrders();
});

function populateOrders() {
    $('.order-list').empty();

    // Get all current burgers from database
    $.ajax({
        url: '/api/burgers',
        type: "GET"
    }).then(data => {
        // Append all burgers to order list
        for (let i = 0; i < data.length; i++) {
            $('.order-list').append(`<li>${data[i].burger_name} <button>Delete</button> </li>`);
        }
    });
}

function placeOrder() {
    let burgerName = $('#burger-input').val();

    // Send burger to database
    $.ajax({
        url: 'api/burgers',
        type: 'POST',
        data: {
            burger_name: burgerName
        }
    });

    populateOrders();
}

function removeOrder() {

}