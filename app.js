const micBtn = document.getElementById('micBtn');
const transcriptArea = document.getElementById('transcript');
const statusTag = document.getElementById('statusTag');
const emoji = document.getElementById('sentimentEmoji');

// Check for browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    transcriptArea.innerText = "Error: Browser does not support Speech API.";
} else {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    let isListening = false;

    micBtn.onclick = () => {
        if (!isListening) {
            recognition.start();
            micBtn.classList.add('mic-active', 'bg-red-500');
            statusTag.innerText = "Listening...";
            statusTag.classList.replace('bg-slate-800', 'bg-red-900/30');
            statusTag.classList.add('text-red-400');
        } else {
            recognition.stop();
            micBtn.classList.remove('mic-active', 'bg-red-500');
            statusTag.innerText = "Analysis Complete";
            statusTag.classList.replace('bg-red-900/30', 'bg-emerald-900/30');
            statusTag.classList.replace('text-red-400', 'text-emerald-400');
        }
        isListening = !isListening;
    };

    recognition.onresult = (event) => {
        const text = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');

        transcriptArea.innerText = text;
        analyzeSentiment(text.toLowerCase());
    };
}

function analyzeSentiment(text) {
    const positive = ['happy', 'great', 'amazing', 'good', 'love', 'excellent', 'yes'];
    const negative = ['sad', 'bad', 'horrible', 'hate', 'no', 'difficult', 'angry'];

    if (positive.some(word => text.includes(word))) {
        emoji.innerText = "😊";
        document.querySelector('.glow').style.boxShadow = "0 0 30px rgba(16, 185, 129, 0.3)";
    } else if (negative.some(word => text.includes(word))) {
        emoji.innerText = "😞";
        document.querySelector('.glow').style.boxShadow = "0 0 30px rgba(244, 63, 94, 0.3)";
    } else {
        emoji.innerText = "😐";
        document.querySelector('.glow').style.boxShadow = "0 0 30px rgba(168, 85, 247, 0.3)";
    }
}
