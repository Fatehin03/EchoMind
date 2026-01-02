# 🎙️ EchoMind: Real-Time AI Speech Analytics by Fatehin Alam

**EchoMind** is a sophisticated web application that leverages the **Web Speech API** to perform live voice-to-text transcription and instant sentiment analysis. By processing natural language patterns in real-time, EchoMind provides users with immediate visual feedback on the "mood" of their speech through dynamic UI state changes and interactive animations.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/API-Web_Speech-blueviolet)

---

## 🚀 Core Features

- **Live Voice Processing:** Seamlessly converts spoken words into high-accuracy text strings using the browser's native speech engine.
- **Instant Sentiment Mapping:** Analyzes transcriptions for emotional keywords (e.g., "amazing", "difficult") to categorize sentiment as Positive, Negative, or Neutral.
- **Adaptive UI:** Features a "Glow Engine" that changes the dashboard's primary accent color and iconography based on the detected emotional tone.
- **Hardware Integration:** Implements secure microphone permissions and real-time state management for hardware recording.
- **Glassmorphism Design:** A modern, deep-dark aesthetic optimized for focus and accessibility.

## 🛠️ Technical Implementation



### **The Engine**
The app utilizes the `webkitSpeechRecognition` interface (part of the Web Speech API). It handles:
- **Continuous Listening:** Stays active during long pauses for a natural conversation flow.
- **Interim Results:** Updates the transcript display in real-time before the final sentence is processed.

### **The Sentiment Logic**
EchoMind uses a lightweight Natural Language Processing (NLP) approach:
- **Keyword Tokenization:** Scans incoming text streams for weighted emotional tokens.
- **State Triggers:** Maps token weights to CSS variables to trigger the "Glow" effect without page reloads.

## 📦 Getting Started

1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/Fatehin03/echomind.git](https://github.com/Fatehin03/echomind.git)# EchoMind
