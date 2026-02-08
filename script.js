// LOGIN
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        document.getElementById("loginBox").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
    } else {
        document.getElementById("loginMsg").innerText =
            "Invalid Username or Password ❌";
    }
}

// HALL BOOKING (CRUD using localStorage)
function bookHall() {
    let hall = document.getElementById("hallType").value;
    let from = document.getElementById("fromDate").value;
    let to = document.getElementById("toDate").value;

    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    let exists = bookings.find(b =>
        b.hall === hall && b.from === from && b.to === to
    );

    if (exists) {
        document.getElementById("hallMsg").innerText =
            "❌ No rooms available for this time";
        return;
    }

    bookings.push({ hall, from, to });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    document.getElementById("hallMsg").innerText =
        "✅ Hall booked successfully";
}

// POOJA
function bookPooja() {
    document.getElementById("poojaMsg").innerText =
        "🙏 Pooja booked successfully";
}

// DONATION
function payDonation() {
    let amount = document.getElementById("amount").value;

    if (amount <= 0) {
        document.getElementById("donationMsg").innerText =
            "Enter valid amount";
        return;
    }

    document.getElementById("donationMsg").innerText =
        "💖 Amount transferred successfully. Thank you for your donation 🙏";
}
