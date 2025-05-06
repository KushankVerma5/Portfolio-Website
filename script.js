document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent Successfully!');
  });



  const skills = [
    // "React Developer",
    // "JavaScript Enthusiast",
    // "Frontend Wizard",
    // "HTML & CSS Expert",
    // "Tailwind Lover",
    // "Vue.js Learner",
    // "UI/UX Designer",
    // "Creative Thinker",
    // "Problem Solver",
    // "Web Animator"
    "HTML5 & Canvas",
    "CSS3 & Tailwind",
    "Javascript",
    "ReactJs",
    "NodeJs",
    "AngularJs",
    "NextJs",
    "Python",
    "Django",
    "C++ GUI",
    "Figma",
    "Framer",
    "GitHub",
    "DBs"
    

    
  ];
  
  let currentIndex = 0;
  const skillContainer = document.querySelector(".skill");
  
  function showSkill(index) {
    skillContainer.innerHTML = ""; // Clear previous
    skillContainer.style.opacity = 0.2;
  
    const skill = skills[index];
    
    skill.split("").forEach((char, i) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.textContent = char;
      span.style.animationDelay = `${i * 0.1}s`;
      skillContainer.appendChild(span);
    });
  
    // Fade in
    setTimeout(() => {
      skillContainer.style.opacity = 1;
    }, 100);
  
    // Move to next after full animation
    setTimeout(() => {
      fadeOutSkill();
    }, skill.length * 100 + 1500); // Duration based on letters
  }
  
  function fadeOutSkill() {
    skillContainer.style.opacity = 0.2;
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % skills.length;
      showSkill(currentIndex);
    }, 800);
  }
  
  // Start the rotation
  showSkill(currentIndex);
  


  function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

