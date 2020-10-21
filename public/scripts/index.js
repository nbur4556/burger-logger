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
            let burgerListItem = $(`<li data-id=${data[i].id}>`);
            let burgerButton = $('<button>');
            // burgerItem.html(<button class="update-btn btn btn-secondary">Update</button>`)
            burgerButton.addClass('btn btn-secondary');

            burgerListItem.text(data[i].burger_name);
            burgerListItem.append(burgerButton);

            if (data[i].is_ready === 0) {
                // Append burgers to order list
                burgerButton.text('Update');
                burgerButton.addClass('update-btn');
                orderList.append(burgerListItem);
            }
            else {
                // Append burgers to ready list
                burgerButton.text('Delete');
                burgerButton.addClass('delete-btn');
                readyList.append(burgerListItem);
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