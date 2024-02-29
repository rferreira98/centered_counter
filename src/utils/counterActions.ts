import { factory } from "../factory";

export function update_count_and_reset_counter(
  count: Function,
  start_at_control: HTMLInputElement,
  step_control: HTMLInputElement,
  current_count: HTMLSpanElement,
) {
  const startValue: number = parseInt(start_at_control.value);
  const stepValue: number = parseInt(step_control.value);
  count = factory(startValue, stepValue);
  current_count.textContent = `${startValue}`; //reset value
}

export function update_count(count: Function, current_count: HTMLSpanElement) {
  current_count.textContent = count().toString();
}
