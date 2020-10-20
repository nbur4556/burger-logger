$(document).ready(() => {
    console.log("hello world");

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

    // Send burger to database
    $.ajax({
        url: 'api/new_burger',
        type: 'POST',
        data: {
            burger_name: burgerName
        }
    });
}