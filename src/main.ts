import { factory } from "./factory";
import {
  update_count,
  update_count_and_reset_counter,
} from "./utils/counterActions";

let count = factory(0, 1);

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", () => {
  update_count_and_reset_counter(
    count,
    start_at_control,
    step_control,
    current_count,
  );
});

step_control?.addEventListener("change", () => {
  update_count_and_reset_counter(
    count,
    start_at_control,
    step_control,
    current_count,
  );
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;

count_button.addEventListener("click", () =>
  update_count(count, current_count),
);
