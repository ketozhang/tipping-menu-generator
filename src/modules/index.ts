const tip_container = document.getElementById("tip-container")!;
const thankyou_container = document.getElementById("thankyou-container")!;

const button = document.getElementById("tip-option-1");

function goToThankYou(e: Event) {
    console.log(e)
    tip_container.classList.add("hidden");
    thankyou_container.classList.remove("hidden");

    let target: HTMLElement = <HTMLElement>e.currentTarget;
    let target_id: string = target.id
    thankyou_container.innerHTML = `<div class="text-center"><h1>You've Tipped</h1><p>${target.querySelector("span")?.textContent}</p></div>`
}

const buttons = tip_container!.getElementsByTagName("button");

for (let button of buttons) {
    button.addEventListener("click", (e: Event) => goToThankYou(e));
}

// let buttons = container?.getElementsByTagName("button")