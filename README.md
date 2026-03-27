# Environmental-protection
Website for environmental awareness 
[index.html](https://github.com/user-attachments/files/26298794/index.html)
<!DOCTYPE html>
<html>
<head>
<title>Environmental Degradation System</title>
<style>
body {
  font-family: Arial;
  text-align: center;
  margin: 0;
  padding: 0;
  background: url("images/background.jpg") no-repeat center center fixed;
  background-size: cover;
}

body::before {
  content: "";
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(255, 255, 255, 0.25);
  z-index: -1;
}

.menu button {
  padding: 10px;
  margin: 10px;
  font-size: 16px;
  transition: transform 0.3s, background 0.3s;
}
.menu button:hover {
  transform: scale(1.1);
  background: #a5d6a7;
}

.section {
  display: none;
  margin-top: 20px;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}
.section.show {
  display: block;
  opacity: 1;
}

img {
  transition: transform 0.5s ease;
  margin: 10px;
  width: 500px;
}
img:hover {
  transform: scale(1.05);
}

.section p {
  text-align: left;        
  margin: 8px auto;        
  line-height: 1.6;        
  max-width: 700px;        
  font-size: 16px;
}


</style>
</head>
<body>

<script>
function showSection(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    sec.classList.remove("show");
    sec.style.display = "none";
  });

  let active = document.getElementById(id);
  active.style.display = "block";
  setTimeout(() => active.classList.add("show"), 10);
}

function checkAnswer(answer) {
  let result = document.getElementById("quiz-result");
  if (answer === "cutting") {
    result.textContent = "Correct! Cutting trees causes deforestation";
    result.style.color = "blue";
  } else {
    result.textContent = "Correct answer is cutting trees";
    result.style.color = "red";
  }
}

function resetQuiz() {
  let result = document.getElementById("quiz-result");
  result.textContent = "";
}
</script>
</head>

<body>
<h1>Environmental Degradation Awareness</h1>

<div class="menu">
  <button onclick="showSection('home')">Home</button>
  <button onclick="showSection('causes')">Causes</button>
  <button onclick="showSection('effects')">Effects</button>
  <button onclick="showSection('solutions')">Solutions</button>
  <button onclick="showSection('quiz')">Quiz</button>
</div>

<div id="home" class="section show">
  <h2>Welcome</h2>
  <p>This multimedia system teaches about environmental degradation.</p>
  <img src="images/forest.jpg">
</div>

<div id="causes" class="section">
  <h2>Causes of Environmental Degradation</h2>
  <p>1. Deforestation: Cutting trees reduces forest cover and biodiversity.</p>
  <video width="400" controls>
    <source src="videos/deforestation.mp4" type="video/mp4">
  </video>
  <p>2. Pollution: Factories release harmful gases and waste into environment.</p>
  <p>3. Poor farming practices: Overgrazing and soil misuse degrade fertile land.</p>
  <p>4. Industrialization: Expanding industries consume resources and pollute surroundings.</p>
  <p>5. Urbanization: Rapid city growth destroys habitats and increases waste.</p>
  <p>6. Overpopulation: Rising human numbers strain natural resources and ecosystems.</p>
</div>

<div id="effects" class="section">
  <h2>Effects</h2>
  <p>1. Climate Change: Rising temperatures disrupt weather patterns globally.</p>
  <img src="images/climate.jpg">
  <p>2. Desertification: Land becomes barren due to unsustainable human activities.</p>
<p>3. Water Scarcity: Pollution and deforestation reduce clean water availability.</p>
  <p>4. Soil Degradation: Nutrient loss reduces agricultural productivity significantly.</p>
    <p>5. Air Pollution: Harmful emissions cause respiratory diseases and global warming.</p>
  <p>6. Loss of Biodiversity: Species disappear due to habitat destruction worldwide.</p>
  <img src="images/pollution.jpg">
</div>

<div id="solutions" class="section">
  <h2>Solutions</h2>
  <p>1. Plant trees: Restores forests, improves air quality, supports wildlife.</p>
  <img src="images/treeplanting.jpg">
  <p>2. Recycle waste: Reduces pollution, conserves resources, protects environment.</p>
  <p>3. Protect forests: Prevents deforestation, preserves biodiversity, stabilizes climate.</p>
  <p>4. Use clean energy: Solar and wind reduce harmful emissions globally.</p>
  <p>5. Practice sustainable farming: Conserves soil, water, and agricultural productivity.</p>
  <p>6. Raise awareness: Educating communities encourages eco-friendly practices worldwide.</p>
</div>

<div id="quiz" class="section">
  <h2>Quiz</h2>
  <p>What causes deforestation?</p>
  <button onclick="checkAnswer('cutting')">Cutting trees</button>
  <button onclick="checkAnswer('planting')">Planting trees</button>
  <button onclick="checkAnswer('recycling')">Recycling plastic</button>
  <p id="quiz-result" style="margin-top:15px; font-weight:bold;"></p>
  <button onclick="resetQuiz()" style="margin-top:10px;">Reset Quiz

https://github.com/user-attachments/assets/27c89b91-bf5c-4729-81bb-c27c73a7a655

</button>

  <p style="margin-top:20px;">
    <a href="https://www.unep.org" target="_blank" 
       style="font-size:18px; font-weight:bold; color:#d32f2f; text-decoration:none;">
       Visit UNEP for more information
    </a>
  </p>

</div>

</body>
</html>![treeplanting](https://github.com/user-attachments/assets/687920b1-d3f4-4c5e-a1dc-28e0d9249fe8)
![pollution](https://github.com/user-attachments/assets/5a4bf891-c1fc-4633-9b2b-f626a8810307)
![forest](https://github.com/user-attachments/assets/5728c511-574d-492e-b10e-63c9780b4aac)
![climate](https://github.com/user-attachments/assets/647982d8-d4c4-4caa-ba14-5f45115fb613)
![background](https://github.com/user-attachments/assets/fb9b1347-429f-435e-956f-54adc58dbaa2)

