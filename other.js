case "left arrow":
    keyElement.classList.add("keyboard__key");
    keyElement.innerHTML = createIconHTML("keyboard_arrow_left");

    keyElement.addEventListener("click", () =>{
        keyElement.selectionStart += -keyElement.selectionEnd;
        this._triggerEvent("oninput");

        const display = document.querySelector(".k__input");
        display.selectionStart = this.properties.value.length;
        display.selectionEnd = this.properties.value.length;

        display.focus();
    });