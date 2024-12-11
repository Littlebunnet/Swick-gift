// Appreciation Section
document.getElementById('saveAppreciation').addEventListener('click', () => {
    const a1 = document.getElementById('appreciation1').value;
    const a2 = document.getElementById('appreciation2').value;
    const a3 = document.getElementById('appreciation3').value;

    const entry = document.createElement('div');
    entry.textContent = `${new Date().toLocaleDateString()}: 1) ${a1}, 2) ${a2}, 3) ${a3}`;
    document.getElementById('appreciationHistory').appendChild(entry);

    // Clear fields
    document.getElementById('appreciation1').value = '';
    document.getElementById('appreciation2').value = '';
    document.getElementById('appreciation3').value = '';
});

// Study Trackers
function updateTracker(subject) {
    let inputId = subject + 'Time';
    let progressId = subject + 'Progress';
    let val = Number(document.getElementById(inputId).value) || 0;
    let percent = Math.min(val / 60 * 100, 100); // assuming 60 min = 100% for demonstration
    document.getElementById(progressId).style.width = percent + '%';
}

// Flashcards (Placeholder)
document.getElementById('uploadFlashcards').addEventListener('click', () => {
    const fileInput = document.getElementById('flashcardUpload');
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const lines = e.target.result.split('\n');
            const list = document.getElementById('flashcardList');
            list.innerHTML = '';
            lines.forEach(line => {
                const card = document.createElement('div');
                card.textContent = line;
                card.className = 'flashcard';
                list.appendChild(card);
            });
        };
        reader.readAsText(file);
    }
});

// Warm Chatroom
document.getElementById('setGreeting').addEventListener('click', () => {
    const mode = document.getElementById('greetingMode').value;
    let greeting = "Hello, friend.";
    if (mode === 'morning') greeting = "Good morning! Ready for a bright day?";
    if (mode === 'evening') greeting = "Good evening. Hope you had a peaceful day.";
    if (mode === 'motivational') greeting = "You can do this! Keep pushing forward!";
    const chat = document.getElementById('chatMessages');
    const msg = document.createElement('div');
    msg.textContent = greeting;
    chat.appendChild(msg);
});

document.getElementById('sendMessage').addEventListener('click', () => {
    const userMsg = document.getElementById('userMessage').value;
    if (!userMsg) return;
    const chat = document.getElementById('chatMessages');
    const msg = document.createElement('div');
    msg.textContent = "You: " + userMsg;
    chat.appendChild(msg);
    document.getElementById('userMessage').value = '';

    // Simulated response
    setTimeout(() => {
        const response = document.createElement('div');
        response.textContent = "Companion: I’m here, and I believe in you.";
        chat.appendChild(response);
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
});

// Dream & Inspiration Gallery (Placeholder)
document.getElementById('addDream').addEventListener('click', () => {
    const dreamText = document.getElementById('dreamInput').value;
    if (!dreamText) return;
    const dreamList = document.getElementById('dreamList');
    const dreamEntry = document.createElement('div');
    dreamEntry.innerHTML = `<strong>${new Date().toLocaleString()}:</strong> ${dreamText} <br><img src="images/placeholder-illustration.jpg" alt="AI Illustration" style="max-width:200px;"/>`;
    dreamList.appendChild(dreamEntry);
    document.getElementById('dreamInput').value = '';
});

// Lucky Moments
document.getElementById('addLucky').addEventListener('click', () => {
    const luckyText = document.getElementById('luckyInput').value;
    if (!luckyText) return;
    const luckyList = document.getElementById('luckyList');
    const entry = document.createElement('div');
    entry.textContent = `${new Date().toLocaleString()}: ${luckyText}`;
    luckyList.appendChild(entry);
    document.getElementById('luckyInput').value = '';
});
