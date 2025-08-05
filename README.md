# 🧠 React Quiz App

A dynamic, user-friendly quiz application built with **React.js** that tests your knowledge with instant feedback, score tracking, and smooth UX features. Built as a personal project to sharpen React skills and create an engaging user experience.

### 🌐 Live Demo
👉 [Check it out here](https://quiz-app-react-nu-seven.vercel.app/)

---

## ✨ Features

- 🚀 **Start Screen** with a start button to begin the quiz
- 📄 **Multiple Choice Questions** with single-answer selection
- ⏱️ **30-Second Countdown Timer** for each question
- ✅ **Instant Feedback**:
  - Green with ✔️ on correct answer
  - Red with ❌ and reveal of correct answer on wrong attempt
- 🔊 **Sound Effects**:
  - Ding sound for correct answers
  - Buzz sound for wrong answers
  - Toggle sound on/off anytime
- 🧮 **Final Score Screen** showing total correct answers
- 🏆 **High Score Tracking** (changes when user beats the previous high score)
- 🔄 **Restart Quiz** option after completion
- 📱 **Responsive Design** for mobile, tablet, and desktop

---

## 🛠️ Tech Stack

- **React.js**
- **JavaScript (ES6+)**
- **CSS / Tailwind CSS**
- **Vercel** for deployment

---

## 📁 Folder Structure

public/
   └── data.js                     # Quiz questions and answers
src/
│   ├── assets/
│   │   ├── audio/
│   │   │   ├── correct.mp3         # Sound for correct answer
│   │   │   └── wrong.mp3           # Sound for wrong answer
│   │   └── images/
│   │       ├── QuizTime.svg        # Quiz heading/logo
│   │       ├── correct.svg         # Tick icon for correct answer
│   │       ├── wrong.svg           # Cross icon for wrong answer
│   │       └── startNowBtn.svg     # Start button graphic
│   │
│   ├── components/
│   │   ├── Footer.jsx              # Footer component
│   │   ├── Home.jsx                # Start screen logic
│   │   ├── Modal.jsx               # Modal for time's up, skip question
│   │   ├── Option.jsx              # Options component
│   │   ├── Question.jsx            # Question page
│   │   └── Result.jsx              # Result screen component
│   │
│   ├── App.jsx                     # Main app component
│   ├── index.css                   # Global styles
│   └── main.jsx                    # Entry point



