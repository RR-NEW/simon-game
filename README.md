# simon-game
# Simon Game 🎮

A web-based replica of the classic electronic memory skill game, Simon. Test your memory and concentration as you try to replicate increasingly long sequences of flashing colors and tones!

## 🚀 Live Demo
[View Live Demo Here](http://127.0.0.1:5501/Simon%20Game%20Challenge%20Step%204%20Answer/)

---

## 🕹️ How to Play
1. **Start the Game:** Press any key on your keyboard to begin.
2. **Watch the Sequence:** The game will highlight a random button (Green, Red, Yellow, or Blue) and play a sound.
3. **Repeat the Pattern:** Click the buttons in the exact order they were shown.
4. **Advance Levels:** Every time you successfully complete a sequence, the game adds one more step to the pattern and advances you to the next level.
5. **Game Over:** If you click the wrong color, the screen will flash red, a game-over sound will play, and you can press any key to restart.

---

## ✨ Features
* **Dynamic Level Tracking:** Title shifts dynamically to keep track of your current score/level.
* **Responsive Visual Effects:** Smooth CSS transitions and custom animations (`.pressed` and `.game-over` classes) upon click and failure states.
* **Classic Retro Fonts:** Integrates the popular Google Font *'Press Start 2P'* for an authentic arcade aesthetic.
* **Audio Feedback:** Unique audio tones played for each color block to provide cognitive assistance (supports memory retention).

---

## 🛠️ Tech Stack
* **HTML5:** Semantic structure for the game board layout.
* **CSS3:** Custom grid layout, styling, styling transitions, and active button behaviors.
* **JavaScript (ES6):** Game state management, sequence generation, and validation array algorithms.
* **jQuery (v3.3.1):** Leveraged for speedy DOM manipulation, event listening (`click`, `keydown`), and animation sequences (`fadeIn`/`fadeOut`).

---

