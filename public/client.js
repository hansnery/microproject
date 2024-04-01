// Define a function to fetch JSON data from the server
async function fetchData() {
  try {
    // Use async/await to fetch data from the server
    const response = await fetch("http://localhost:3000/api/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data from server");
    }
    // Parse the JSON response
    const jsonData = await response.json();
    // Process the JSON data and display it in the HTML
    displayData(jsonData);
    // Hide the fetch button
    document.getElementById("fetchButton").style.display = "none";
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display data in the HTML
function displayData(data) {
  const container = document.getElementById("dataContainer");
  // Clear previous content
  container.innerHTML = "";
  // Create elements for each item in the data array
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">${item.description}</p>
        <p class="card-text">Price: $${item.price}</p>
        <p class="card-text">Category: ${item.category}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

// Add an event listener to the button
document.getElementById("fetchButton").addEventListener("click", fetchData);
