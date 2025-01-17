function addCar() {
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const price = document.getElementById('price').value;

    fetch('/add_car', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ make, model, year, price })
    }).then(response => response.json()).then(data => {
        console.log('Car added:', data);
        loadCars();
    });
}

function loadCars() {
    fetch('/get_cars')
        .then(response => response.json())
        .then(cars => {
            const carList = document.getElementById('car-list');
            carList.innerHTML = '';
            cars.forEach(car => {
                const carItem = document.createElement('div');
                carItem.textContent = `${car.make} ${car.model} (${car.year}) - $${car.price}`;
                carList.appendChild(carItem);
            });
        });
}

document.addEventListener('DOMContentLoaded', loadCars);
