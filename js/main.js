// CARGA
setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
}, 3000);

// TERMINAL
const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let cmd = input.value;
        output.innerHTML += `<p>> ${cmd}</p>`;
        input.value = "";

        if(cmd === "whoami"){
            output.innerHTML += "<p>Jake_Valerio.exe</p>";
        }
        else if(cmd === "open void"){
            output.innerHTML += "<p>Acceso denegado...</p>";
        }
        else if(cmd === "help"){
            output.innerHTML += "<p>Comandos: whoami, open void, help</p>";
        }
        else{
            output.innerHTML += "<p>Comando desconocido.</p>";
        }

        output.scrollTop = output.scrollHeight;
    }
});

// CHAT
const chatInput = document.getElementById("chatInput");
const chatBox = document.getElementById("chatBox");

chatInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        let msg = chatInput.value;
        chatBox.innerHTML += `<p><b>Tú:</b> ${msg}</p>`;
        chatInput.value = "";

        setTimeout(()=>{
            chatBox.innerHTML += `<p><b>Jake:</b> El End nunca olvida...</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
        },1000);
    }
});
