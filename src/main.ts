import { factory } from "./factory";

let count = factory(0, 1);

function update_count_and_reset_counter() {
  const startValue: number = parseInt(start_at_control.value);
  const stepValue: number = parseInt(step_control.value);
  count = factory(startValue, stepValue);
  current_count.innerText = `${startValue}`; //reset value
}

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", () => {
  update_count_and_reset_counter();
});

step_control?.addEventListener("change", () => {
  update_count_and_reset_counter();
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

function update_count() {
  current_count.textContent = count().toString();
}

count_button.addEventListener("click", update_count);
