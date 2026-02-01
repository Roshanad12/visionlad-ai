/* ===== PORTFOLIO SLIDER ===== */
let index=0;
const slides=document.querySelectorAll(".portfolio-slider img");
function showSlide(i){
  slides.forEach(s=>s.style.display="none");
  slides[i].style.display="block";
}
showSlide(index);
setInterval(()=>{
  index=(index+1)%slides.length;
  showSlide(index);
},3000);

/* ===== AOS INIT ===== */
AOS.init({duration:1200});

/* ===== AI USER PROFILE ===== */
let user = {
  loggedIn:true,
  name:"Roshan ad",
  email:"roshanad346@gmail.com",
  plan:"Free",
  credits:5,
  videos:0,
  history:[]
};

/* ===== PROFILE PANEL ===== */
const fullProfile = document.createElement("div");
fullProfile.id="fullProfile";
fullProfile.innerHTML=`
<div class="profile-box">
  <div class="profile-header">
    <h2>👤 User Profile</h2>
    <div class="close-profile" onclick="closeProfile()">✕ Close</div>
  </div>
  <div class="profile-grid">
    <div class="profile-card">
      <h3>Account Info</h3>
      <p><b>Name:</b> <span id="pfName"></span></p>
      <p><b>Email:</b> <span id="pfEmail"></span></p>
      <p><b>Plan:</b> <span id="pfPlan"></span></p>
    </div>
    <div class="profile-card">
      <h3>Usage Stats</h3>
      <p>Credits Left: <span class="stat" id="pfCredits"></span></p>
      <p>Videos Created: <span class="stat" id="pfVideos"></span></p>
    </div>
    <div class="profile-card">
      <h3>AI Activity</h3>
      <div id="pfHistory">No activity yet</div>
    </div>
    <div class="profile-card profile-actions">
      <h3>Actions</h3>
      <button onclick="openPrompt()">Create New AI Video</button>
      <button onclick="upgradePlan()">Upgrade Plan</button>
      <button onclick="logout()">Logout</button>
    </div>
  </div>
</div>`;
document.body.appendChild(fullProfile);

function openProfile(){
  document.getElementById("pfName").innerText=user.name;
  document.getElementById("pfEmail").innerText=user.email;
  document.getElementById("pfPlan").innerText=user.plan;
  document.getElementById("pfCredits").innerText=user.credits;
  document.getElementById("pfVideos").innerText=user.videos;
  const hist=document.getElementById("pfHistory");
  hist.innerHTML=user.history.length?user.history.map(h=>`• ${h}`).join("<br>"):"No activity yet";
  fullProfile.style.display="block";
}
function closeProfile(){fullProfile.style.display="none";}
function logout(){location.reload();}
function upgradePlan(){alert("Upgrade Plan coming soon!");}
function openPrompt(){
  let v = prompt("Enter AI video description:");
  if(v){user.videos++; user.history.push(v); openProfile();}
}