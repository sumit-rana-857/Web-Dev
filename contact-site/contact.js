document.getElementById("complaintForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch("https://formsubmit.co/ranathinkers@outlook.in", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("statusMessage").innerText = "Complaint Submitted Successfully!";
        document.getElementById("complaintForm").reset();
    })
    .catch(error => {
        document.getElementById("statusMessage").innerText = "Error submitting form. Try again.";
    });
});