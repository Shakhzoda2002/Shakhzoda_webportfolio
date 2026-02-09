document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleSkillsBtn");
  const skillsContent = document.getElementById("skillsContent");

  toggleBtn.addEventListener("click", function () {
    if (skillsContent.style.display === "none") {
      skillsContent.style.display = "block";
      toggleBtn.textContent = "Hide Skills";
    } else {
      skillsContent.style.display = "none";
      toggleBtn.textContent = "Show Skills";
    }
  });
});
