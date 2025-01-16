function toggleFAQ(faqNumber) {
    const answer = document.getElementById('answer' + faqNumber);
    const icon = document.getElementById('icon' + faqNumber);
  
    if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        answer.classList.add('hidden');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
  }