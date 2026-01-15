let salon = {
name: "Pet Salon",
address: {
    street: "123 Main Street",
    city: "San Diego, CA",
    zip: "92110"
},
hours: {
    open: "9:00 AM",
    close: "9:00 PM"
}
};

function displaySalonInfo() {
let p = document.getElementById("SalonInformation");

p.textContent = `Welcome to ${salon.name}.
We are located at ${salon.address.city}, ${salon.address.street}.`;
}

displaySalonInfo();