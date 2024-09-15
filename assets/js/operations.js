// Loader script
document.addEventListener("DOMContentLoaded", function () {
  const loader = document.querySelector('.loading-container');
  loader.style.display = 'none'; // Hide the loader after page load
});

// Show resume popup
function showPopup() {
  document.getElementById('resumePopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('resumePopup').style.display = 'none';
}

// Download selected resume
function downloadResume(type) {
  if (type === 'data_analyst') {
    window.open('./assets/docs/Data Analyst Resume.pdf', '_blank');
  } else if (type === 'software_developer') {
    window.open('./assets/docs/Software Developer Resume.pdf', '_blank');
  }
  closePopup();
}

// Show selected project category
function showProjects(category) {
  const dataAnalystProjects = document.getElementById('data-analyst-projects');
  const softwareDeveloperProjects = document.getElementById('software-developer-projects');
  const dataAnalystBtn = document.getElementById('data-analyst-btn');
  const softwareDeveloperBtn = document.getElementById('software-developer-btn');

  dataAnalystProjects.style.display = 'none';
  softwareDeveloperProjects.style.display = 'none';

  dataAnalystBtn.classList.remove('active');
  softwareDeveloperBtn.classList.remove('active');

  if (category === 'data-analyst') {
    dataAnalystProjects.style.display = 'block';
    dataAnalystBtn.classList.add('active');
  } else if (category === 'software-developer') {
    softwareDeveloperProjects.style.display = 'block';
    softwareDeveloperBtn.classList.add('active');
  }
}

// Default to showing Software Developer Projects on page load
showProjects('software-developer');

// Successfull message sent 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulate form submission (replace with actual form handling logic)
    var formSubmittedSuccessfully = Math.random() > 0.5; // Simulating success/failure

    if (formSubmittedSuccessfully) {
        showMessage('success-message');
    } else {
        showMessage('error-message');
    }
});

function showMessage(messageId) {
    document.getElementById(messageId).style.display = 'flex';
    setTimeout(function() {
        document.getElementById(messageId).style.display = 'none';
    }, 3000); // Automatically hides after 3 seconds
}

function closeMessage(messageId) {
    document.getElementById(messageId).style.display = 'none';
}

