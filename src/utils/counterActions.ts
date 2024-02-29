import { factory } from "../factory";

/**
 * This function updates given counter using the factory utility function and
 * both startAt and step values retrieved from start_at_control and step_control.
 * Finally, it uses current_count to display the result.
 *
 * @param {Function} [count] - Factory function.
 * @param {HTMLInputElement} [startAtControl] - The step to increment each number in the sequence. Default is 1.
 * @param {HTMLInputElement} [stepControl] - The step to increment each number in the sequence. Default is 1.
 * @param {HTMLSpanElement} [currentCount] - The step to increment each number in the sequence. Default is 1.
 */
export function update_count_and_reset_counter(
  startAtControl: HTMLInputElement,
  stepControl: HTMLInputElement,
  currentCount: HTMLSpanElement,
) {
  const startValue: number = parseInt(startAtControl.value);
  const stepValue: number = parseInt(stepControl.value);
  const updatedCount = factory(startValue, stepValue);
  currentCount.textContent = `${startValue}`; //reset value

  return updatedCount;
}

/**
 * This function updates current_count span element
 * with new iteration from given factory function.
 *
 * @param {Function} [count] - Factory function.
 * @param {HTMLSpanElement} [currentCount] - The step to increment each number in the sequence. Default is 1.
 */
export function update_count(count: Function, currentCount: HTMLSpanElement) {
  currentCount.textContent = count().toString();
}
