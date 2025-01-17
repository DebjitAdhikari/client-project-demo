const indicators = document.querySelectorAll('.indicators button');
indicators.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });
  function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModalButton = document.getElementById("close-modal");
    const triggers = document.querySelectorAll(".awards-modal-trigger");

    // Image click handler
    triggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            modalImage.src = e.target.src;
            modalTitle.textContent = "AWARDED MOST PREFERRED SUPPLIER BY MAJOR EUROPEAN CUSTOMER";
            // modalTitle.textContent = "AWARDED MOST PREFERRED SUPPLIER BY MAJOR EUROPEAN CUSTOMER";
            modalDescription.textContent = `WE WERE HONORED WITH THE ‘MOST PREFERRED SUPPLIER’ AWARD BY ONE OF
OUR MAJOR EUROPEAN CUSTOMERS. THIS PRESTIGIOUS RECOGNITION REFLECTS
OUR COMMITMENT TO DELIVERING EXCEPTIONAL QUALITY, RELIABILITY, AND
CUSTOMER SATISFACTION IN THE CASTING MANUFACTURING INDUSTRY.`;
            // modalDescription.textContent = `Details about "${e.target.alt}" go here.`;
            modal.classList.remove("hidden");
        });
    });

    // Close modal
    closeModalButton.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Close modal on background click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const teamModal = document.getElementById("team-member-modal");
  const teamModalImage = document.getElementById("team-modal-image");
  const teamModalTitle = document.getElementById("team-modal-title");
  const teamModalDescription = document.getElementById("team-modal-description");
  const closeTeamModalButton = document.getElementById("close-team-modal");
  const teamTriggers = document.querySelectorAll(".modal-trigger"); // Assuming you use the same trigger class for team modal

  // Open modal and populate content
  teamTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
          const name = trigger.getAttribute("data-name");
          const role = trigger.getAttribute("data-role");
          const imgSrc = trigger.getAttribute("data-img");

          teamModalImage.src = imgSrc;
          teamModalTitle.textContent = name;
          teamModalDescription.textContent = role;

          teamModal.classList.remove("hidden");
      });
  });

  // Close modal on button click
  closeTeamModalButton.addEventListener("click", () => {
      teamModal.classList.add("hidden");
  });

  // Close modal when clicking outside the modal content
  teamModal.addEventListener("click", (e) => {
      if (e.target === teamModal) {
          teamModal.classList.add("hidden");
      }
  });
});

