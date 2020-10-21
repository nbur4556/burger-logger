$(document).ready(() => {
    $('#place-order').click(placeOrder);
    populateOrders();
});

function populateOrders() {
    const orderList = $('.order-list');
    const readyList = $('.ready-list');

    // Clear lists
    orderList.empty();
    readyList.empty();

    // Get all burgers from database
    $.ajax({
        url: '/api/burgers',
        type: "GET"
    }).then(data => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].is_ready === 0) {
                // Append burgers to order list
                orderList.append(`<li data-id="${data[i].id}">${data[i].burger_name}
                    <button class="update-btn btn btn-secondary">Update</button></li>`);
            }
            else {
                // Append burgers to ready list
                readyList.append(`<li data-id="${data[i].id}">${data[i].burger_name} 
                    <button class="delete-btn btn btn-secondary">Delete</button> </li>`);
            }
        }

        // Add button listeners
        $('.update-btn').click(setOrderReady);
        $('.delete-btn').click(removeOrder);
    });
}

function placeOrder() {
    let burgerName = $('#burger-input').val();

    // Clear burger input text box
    $('#burger-input').val("");

    // Send burger to database
    $.ajax({
        url: 'api/burgers',
        type: 'POST',
        data: {
            burger_name: burgerName
        }
    }).then(data => {
        populateOrders();
    });
}

function setOrderReady() {
    // Set orders to ready
    $.ajax({
        url: 'api/burgers',
        type: 'PUT',
        data: {
            id: $(this).parent('li').data('id'),
            val: 1
        }
    }).then(data => {
        populateOrders();
    });
}

function removeOrder() {
    // Remove burger from database
    $.ajax({
        url: `api/burgers/${$(this).parent('li').data('id')}`,
        type: 'DELETE'
    }).then(data => {
        populateOrders();
    });
}