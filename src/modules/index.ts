const tip_container = document.getElementById("tip-container")!;

const edit_container = document.getElementById("edit-container")!;
const edit_form = edit_container.querySelector("#edit-form")!;

const thankyou_container = document.getElementById("thankyou-container")!;

function goToThankYou(e: Event) {
    tip_container.classList.add("hidden");
    thankyou_container.classList.remove("hidden");

    let tip_selected: HTMLElement = <HTMLElement>e.currentTarget;
    let tip_option_text = tip_selected.querySelectorAll("span")[0]?.textContent;
    thankyou_container.querySelector("p")!.innerHTML = `<h1>You've tipped</h1>${tip_option_text}</p></div > `
}

function changeToEdit(e: Event) {

}

function updateButtonTextFromFormInput1(button_text: HTMLSpanElement) {
    let input = getInputFromButtonText(button_text);
    button_text.innerHTML = input.value;
}

function updateButtonTextFromFormInput2(input: HTMLInputElement) {
    let button_text = getButtonTextFromInput(input);
    button_text.innerHTML = input.value;
}

function getInputFromButtonText(text_element: HTMLElement): HTMLInputElement {
    return <HTMLInputElement>document.getElementById(text_element.id.replace("tip", "edit"))!;
}
function getButtonTextFromInput(input: HTMLInputElement) {
    return document.getElementById(input.id.replace("edit", "tip"))!;
}


function setup_tip_buttons() {
    tip_container.classList.add("hidden");
    const tip_buttons = tip_container!.querySelector("#tip-container-body")!.querySelectorAll("button");

    for (let button of tip_buttons) {
        button.addEventListener("click", (e: Event) => goToThankYou(e));
        for (let button_text of button.querySelectorAll("span")) {
            updateButtonTextFromFormInput1(button_text);
        }
    }

    // for (let field of edit_form_fields) {
    //     let input: HTMLInputElement = field.querySelector("input")!;

    //     let button = document.getElementById(field.id.replace("edit", "tip"))!;
    //     input.value = button.querySelector("span")!.innerHTML
    // }
}

function setup_edit_buttons() {
    let edit_form = edit_container.querySelector("#edit-form")!;

    for (let input of
        edit_form.querySelectorAll<HTMLInputElement>("div label>input")) {
        input.addEventListener("keyup", (e) => updateButtonTextFromFormInput2(input))
    }
}

function generateTipMenu(e: Event) {
    edit_container.classList.add("hidden");
    tip_container.classList.remove("hidden");
}

function setup_generate_button() {
    let button = document.getElementById("edit-form-generate")!;
    button.addEventListener("click", (e: Event) => generateTipMenu(e));
}

function setup_thankyou_button() {
    let button = document.getElementById("thankyou-ok")!;
    thankyou_container.classList.add("hidden");

    button.addEventListener("click", (e: Event) => {
        tip_container.classList.remove("hidden");
        thankyou_container.classList.add("hidden");
    })
}

setup_tip_buttons();
setup_edit_buttons();
setup_generate_button();
setup_thankyou_button();
