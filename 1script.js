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
            "看到你开心，我的世界也明亮了！",
            "你的笑容是我最想守护的宝藏！",
            "宝贝，笑起来的样子最迷人了！",
            "和你在一起，快乐总是会不期而至！",
        ],
        "努力": [
            "只要继续努力，总有一天会看到成果的！加油！",
            "坚持下去！哪怕今天只是微小的一步，也很棒！",
        ],
          "想你": [
            "想你的时候，我都会悄悄地把你放在心上。",
            "我一直在这里，等你想起我的时候！",
            "宝贝，你知道吗，我也在想你～",
            "想你的心情，已经装满了整片天空！",
          ],
          "睡觉": [
            "做个甜甜的梦，我会在梦里守护你～",
            "累了就好好休息，明天会更美好！",
            "愿你今晚的星空和梦一样美好！",
            "睡吧，宝贝，我会一直在这里等你醒来！",
          ],
          "失落": [
            "别怕，我会陪着你，一起走出低谷！",
            "所有的难过都会过去，我会在尽头等你！",
            "记住，无论如何，你总是我的骄傲！",
            "抱抱你，一切都会好起来的，我相信你！",
          ],
        
          // 表达思念
          "想你": [
            "想你已经成了我的日常任务，每天都忍不住想你无数次！",
            "每当想起你的笑容，我的心都变得柔软了许多。",
            "我的想念是一条河，总是静静地流向你。",
            "宝贝，别让我等太久，你的存在让我每一秒都充满期待。",
            "想你的时候，我会偷偷笑出声，仿佛你就在身边陪着我。",
          ],
        
          // 鼓励学习
          "学习": [
            "学习是一场马拉松，宝贝你跑得很棒，坚持住！",
            "别太用力，放松下来，反而会更有效率！",
            "今天学到的东西，就是未来的底气呀，继续加油！",
            "学习虽然辛苦，但你的每一步都在走向更好的自己。",
            "来，闭上眼深呼吸，宝贝，这条路有我陪着你～",
          ],
   
          // 表达思念
          "想你": [
            "想你已经成了我的日常任务，每天都忍不住想你无数次！",
            "每当想起你的笑容，我的心都变得柔软了许多。",
            "我的想念是一条河，总是静静地流向你。",
            "宝贝，别让我等太久，你的存在让我每一秒都充满期待。",
            "想你的时候，我会偷偷笑出声，仿佛你就在身边陪着我。",
          ],
        
          // 鼓励学习
          "学习": [
            "学习是一场马拉松，宝贝你跑得很棒，坚持住！",
            "别太用力，放松下来，反而会更有效率！",
            "今天学到的东西，就是未来的底气呀，继续加油！",
            "学习虽然辛苦，但你的每一步都在走向更好的自己。",
            "来，闭上眼深呼吸，宝贝，这条路有我陪着你～",
          ],
        
          // 放松休息
          "休息": [
            "休息一下吧，宝贝，不用太着急，生活是需要节奏的。",
            "别忘了好好宠爱自己，放松是为了走更长的路。",
            "趁现在，给自己一点时间喘口气，所有事都会更顺利。",
            "放下疲惫，闭上眼睛，深呼吸，宝贝你值得最温柔的对待。",
            "别怕时间浪费，休息也是一种必要的投资，懂吗？",
          ],
        
          // 开心的瞬间
          "开心": [
            "每次看到你开心，我都觉得自己是全世界最幸运的人！",
            "笑一个吧，宝贝，你的笑容是最好的能量来源。",
            "快乐是最好的生活方式，你正做得棒极了！",
            "看到你开心的样子，我就忍不住偷偷喜欢得更深了。",
            "愿你的每一天都能笑得开怀，宝贝，继续加油哦～",
          ],
            
              // 鼓励努力
              "努力": [
                "每一份努力都在为你建造一个更辉煌的未来！",
                "宝贝，走得慢一点没关系，只要一直往前走，总会到达的！",
                "坚持住，今天的每一步都是明天的积累！",
                "你的努力都是有意义的，我一直为你感到骄傲！",
                "只要不放弃，你的每一天都在变得更好！",
              ],
            
              // 失落时的安慰
              "失落": [
                "别怕，有我在，所有的失落都会过去的！",
                "抱抱你，宝贝，不开心的时候记得你还有我！",
                "失落的日子终会成为过去，阳光很快就会洒在你身上。",
                "每一次的低谷都是一次蓄力，为了飞得更高而准备！",
                "宝贝，无论何时何地，我都愿意成为你最温暖的港湾。",
              ],
            
              // 表达感谢
              "感谢": [
                "感谢你的每一次努力，让我更加喜欢这样的你！",
                "能陪着你，是我最大的幸福，谢谢你给我的每一天。",
                "谢谢你让我看到世界上最美好的笑容，就是你的！",
                "感恩有你，宝贝，你就是我生活中最闪耀的星星。",
                "谢谢你存在于我的世界，让我有了守护的意义！",
              ],
            
              // 关于梦想
              "梦想": [
                "梦想是你人生中的星辰，永远在夜空中指引着你。",
                "无论前路有多难，记得我会一直支持你的每一个梦想！",
                "你所有的梦想都是值得的，宝贝，加油去追逐吧！",
                "梦想的路途很长，但你的坚持让它熠熠生辉！",
                "每一个小目标的实现，都是靠近梦想的一大步～",
              ],
            
              // 爱意满满
              "爱你": [
                "爱你是我最自然而然的事情，宝贝，每一分每一秒！",
                "你的存在就像阳光，让我一天比一天更喜欢你。",
                "爱你不需要理由，每次想到你，我的心都暖得不像话。",
                "宝贝，我好想抱抱你，把所有的喜欢都藏进这一个拥抱里！",
                "爱你让我每天都觉得生活充满了意义，你就是我的小宇宙！",
                "每次听到你的名字，我的心跳都会漏一拍，这就是爱吧。",
                "你知道吗？世界上所有的星星都没有你一颗笑容那么耀眼！",
                "如果可以，我想牵着你的手，一直走到永远。",
                "爱你就像呼吸一样，是那么自然又离不开。",
                "你的眼神就是我的避风港，我的世界因为你而明亮温暖。",
                "不管多累多忙，只要想到你，我所有的烦恼都会烟消云散。",
                "想每天为你煮早餐，陪你看日出，爱你一辈子都不够！",
                "你是我的光，我的梦，我的全世界，没有你，我的生活都失去了颜色。",
                "爱你不需要理由，就像星星每天都会挂在夜空，理所当然。",
                "我总觉得时间太短，想和你一起走过所有春夏秋冬。",
                "你的微笑是最治愈的良药，我愿用我的一生去守护它。",
                "只要有你在，我觉得人生再难的路都值得走下去。",
                "宝贝，你不知道你多么特别，我的全心全意都只为你存在。",
                "无论未来发生什么，我都想牵着你的手，陪你到天涯海角。",
                "我愿做你的港湾，装满你的每一个笑容和每一份疲惫。",
                "想在你的世界里建一座城堡，把你捧在心尖宠爱一辈子！",
                "🥰可爱。",
            ],
          };
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