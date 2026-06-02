const bookingForm =
document.getElementById("bookingForm");

const successMessage =
document.getElementById("successMessage");

bookingForm.addEventListener("submit", function(e){

e.preventDefault();

successMessage.innerHTML =
"Thank you! Your booking request has been submitted.";

bookingForm.reset();
});
