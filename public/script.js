let formEl = document.getElementById("registration-form");
formEl.addEventListener("submit", submitHotelDetails);

function submitHotelDetails(e) {
  const titleEl = document.getElementById("title"),
    typeEl = document.getElementById("type"),
    priceEl = document.getElementById("price"),
    descriptionEl = document.getElementById("description"),
    addressEl = document.getElementById("address"),
    cityEl = document.getElementById("city"),
    distEl = document.getElementById("dist");

  const title = titleEl.value,
    type = typeEl.value,
    price = priceEl.value,
    description = descriptionEl.value,
    address = addressEl.value,
    city = cityEl.value,
    dist = distEl.value;

  const hotelDetails = { title, type, price, description, address, city, dist };
  console.log(hotelDetails);

  let url = window.location.href;

  fetch(url, {
    // returns a promise
    method: "post", // specify method as post
    body: hotelDetails, // specify body as mail to send to request
  })
    .then((response) => response.json()) // converting promise to JSON
    .then((res) => console.log(res)) // view the response from server, later after our express server is set
    .catch((error) => console.log(error));
}
