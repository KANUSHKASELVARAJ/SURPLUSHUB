// For Shop Page (Adding Item)
const addItemForm = document.getElementById('add-item-form');
if (addItemForm) {
  addItemForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const itemName = document.getElementById('itemName').value;
    const price = document.getElementById('price').value;
    const quantity = document.getElementById('quantity').value;

    const newItem = { itemName, price, quantity };

    let items = JSON.parse(localStorage.getItem('surplusItems')) || [];
    items.push(newItem);
    localStorage.setItem('surplusItems', JSON.stringify(items));

    alert('Surplus Item Added Successfully!');
    addItemForm.reset();
  });
}

// For Vendor Page (Displaying Items)
const surplusContainer = document.getElementById('surplus-listings');
if (surplusContainer) {
  let items = JSON.parse(localStorage.getItem('surplusItems')) || [];

  if (items.length === 0) {
    surplusContainer.innerHTML = '<p class="text-gray-600">No Surplus Items Available</p>';
  } else {
    items.forEach(item => {
      surplusContainer.innerHTML += `
        <div class="bg-white p-4 rounded shadow">
          <h2 class="text-xl font-bold">${item.itemName}</h2>
          <p>Price: ₹${item.price}</p>
          <p>Quantity: ${item.quantity}</p>
        </div>`;
    });
  }
}
