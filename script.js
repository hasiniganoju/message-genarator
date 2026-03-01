const messages = {
    happy: [
        "I'm so happy you're smiling today! Keep shining ✨",
        "Your joy makes the world brighter 💛"
    ],
    sad: [
        "It's okay to feel low sometimes. You are stronger than this moment 💙",
        "This feeling will pass. Stay gentle with yourself 🌸"
    ],
    angry: [
        "Take a deep breath. Peace feels better than rage 🌿",
        "Your calm is more powerful than your anger 🌊"
    ],
    anxious: [
        "You are safe. One step at a time 🌼",
        "Breathe in… breathe out… you’ve got this 🌿"
    ],
    tired: [
        "Rest is productive too. You deserve softness 🌙",
        "Slow down. Your body is asking for kindness 💫"
    ]
};

document.querySelectorAll(".mood").forEach(button => {
    button.addEventListener("click", function () {

        const name = document.getElementById("username").value.trim();
        const result = document.getElementById("result");
        const mood = this.dataset.mood;

        if (name === "") {
            result.innerHTML = "Please enter your name first 💛";
            return;
        }

        const moodMessages = messages[mood];
        const randomMessage = moodMessages[Math.floor(Math.random() * moodMessages.length)];

        result.innerHTML = `Hey ${name} 💛 <br><br> ${randomMessage}`;
    });
});
