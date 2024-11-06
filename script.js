let speech = new SpeechSynthesisUtterance();

const textArea = document.querySelector("textarea");
const listenButton = document.querySelector("button");
const languageSelect = document.querySelector ("select");

window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    languageSelect.innerHTML = "";

    voices.forEach((voice) => {
       const option = document.createElement("option");
       option.value = voice.name;
       option.textContent = `${voice.name} (${voice.lang})`;
       languageSelect.appendChild(option);
    })

};

listenButton.addEventListener("click", () => {
    const text = textArea.value.trim();

    if(text === ""){
        alert("Please enter some text.");
        return;
    }

    window.speechSynthesis.cancel();

    speech.text = text;
    const selectVoice = languageSelect.value;
    speech.voice = window.speechSynthesis.getVoices().find((voice) => voice.name === selectVoice);


    window.speechSynthesis.speak(speech);
})