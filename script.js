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
    const userMsg = document.getElementById('userMessage').value.trim();
    if (!userMsg) return;
    const chat = document.getElementById('chatMessages');
    const msg = document.createElement('div');
    msg.textContent = "You: " + userMsg;
    chat.appendChild(msg);
    document.getElementById('userMessage').value = '';

    // 随机回复池
    const randomReplies = [
        "今天的你，已经很棒了！",
        "别忘了喝水，身体是最重要的哦！",
        "无论发生什么，我都在这里陪着你。",
        "放松一下吧，一切都会好起来的！",
        "世界很美好，你也是其中一部分！",
    ];

    // 关键词与多条随机回复
    const keywordReplies = {
        "学习": [
            "学习累了就歇一会儿，放松一下更有效率！",
            "今天学到了什么有趣的内容？",
            "学习是个积累的过程，不要着急哦！",
        ],
        "休息": [
            "休息也是学习的一部分哦！",
            "今天有没有做点放松的事情？",
            "适当休息才能更好地积蓄能量！",
        ],
        "开心": [
            "听到你开心的消息，我也觉得很幸福！",
            "真好！开心是最珍贵的事情，保持这份喜悦吧！",
            "希望你的好心情能一直持续下去！",
        ],
        "努力": [
            "只要继续努力，总有一天会看到成果的！加油！",
            "坚持下去！哪怕今天只是微小的一步，也很棒！",
        ],
    };

    // Simulated response with keyword detection
    setTimeout(() => {
        let reply = randomReplies[Math.floor(Math.random() * randomReplies.length)]; // 默认随机回复

        // 检查是否包含关键词
        for (let keyword in keywordReplies) {
            if (userMsg.includes(keyword)) {
                const possibleReplies = keywordReplies[keyword];
                reply =
                    possibleReplies[
                        Math.floor(Math.random() * possibleReplies.length)
                    ]; // 从关键词回复池中随机挑选
                break;
            }
        }

        // 创建回复并添加到聊天框
        const response = document.createElement('div');
        response.textContent = "Companion: " + reply;
        chat.appendChild(response);
        chat.scrollTop = chat.scrollHeight; // 滚动到最新消息
    }, 1000);
});
    // Simulated response with keyword detection
    setTimeout(() => {
        let reply = randomReplies[Math.floor(Math.random() * randomReplies.length)]; // 默认随机回复

        // 检查是否包含关键词
        for (let keyword in keywordReplies) {
            if (userMsg.includes(keyword)) {
                const possibleReplies = keywordReplies[keyword];
                reply =
                    possibleReplies[
                        Math.floor(Math.random() * possibleReplies.length)
                    ]; // 从关键词回复池中随机挑选
                break;
            }
        }

        // 创建回复并添加到聊天框
        const response = document.createElement('div');
        response.textContent = "Companion: " + reply;
        chat.appendChild(response);
        chat.scrollTop = chat.scrollHeight; // 滚动到最新消息
    }, 1000);
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
