document.addEventListener("DOMContentLoaded", function () {

    /*********************************
     * FAQ SECTION
     *********************************/
    const faqDropdown = document.getElementById("faqDropdown");
    if (faqDropdown) {
        faqDropdown.addEventListener("change", function () {
            document.querySelectorAll(".faq-answer").forEach(function (el) {
                el.style.display = "none";
            });
            if (this.value) {
                document.getElementById(this.value).style.display = "block";
            }
        });
    }

    /*********************************
     * ADMISSION FORM FUNCTIONALITY
     *********************************/
    const onlineOption = document.getElementById("onlineOption");
    const faceToFaceOption = document.getElementById("faceToFaceOption");
    const studyOptions = document.getElementById("studyOptions");
    const admissionHeading = document.querySelector(".admission-section h2");
    const admissionForm = document.getElementById("admissionForm");
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const nextStep = document.getElementById("nextStep");
    const acceptButton = document.getElementById("acceptButton");
    const confirmationMessage = document.getElementById("confirmationMessage");

    // Show form and remove study options when a mode is selected
    function startAdmission(option) {
        if (studyOptions && admissionHeading && admissionForm && step1) {
            studyOptions.style.display = "none"; // Hide study cards
            admissionHeading.style.display = "none"; // Hide title
            admissionForm.classList.remove("hidden"); // Show the entire form
            admissionForm.style.display = "block"; // Ensure visibility
            step1.classList.add("active");
            step1.style.display = "block";
        }
    }

    // Check if elements exist before adding event listeners
    if (onlineOption && faceToFaceOption) {
        onlineOption.addEventListener("click", () => startAdmission("Online"));
        faceToFaceOption.addEventListener("click", () => startAdmission("Face to Face"));
    }

    // Move to next step (Price Confirmation)
    if (nextStep) {
        nextStep.addEventListener("click", function () {
            if (step1 && step2) {
                step1.style.display = "none";
                step2.classList.add("active");
                step2.style.display = "block";
            }
        });
    }

    // Show confirmation message
    if (acceptButton) {
        acceptButton.addEventListener("click", function () {
            if (step2 && confirmationMessage) {
                step2.style.display = "none";
                confirmationMessage.style.display = "block";
            }
        });
    }
});
