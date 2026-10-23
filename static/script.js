const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const demoInput = document.querySelector("#demo-input");
const demoStatus = document.querySelector("#demo-status");
const keystrokeLog = document.querySelector("#keystroke-log");
const keystrokeCount = document.querySelector("#keystroke-count");
const emptyState = document.querySelector("#empty-state");

let isRunning = false;
let recordedCount = 0;

function setRunning(running) {
  isRunning = running;
  demoInput.disabled = !running;
  startButton.disabled = running;
  stopButton.disabled = !running;
  demoStatus.textContent = running ? "Demo active" : "Stopped";
  demoStatus.dataset.active = String(running);

  if (running) {
    demoInput.focus();
  }
}

function displayKey(key) {
  if (key === " ") return "Space";
  if (key === "Enter") return "Enter";
  if (key === "Backspace") return "Backspace";
  if (key === "Tab") return "Tab";
  if (key === "Escape") return "Escape";
  if (key.length === 1) return key;
  return key;
}

function recordKeystroke(event) {
  if (!isRunning || event.isComposing) return;

  emptyState?.remove();
  recordedCount += 1;

  const entry = document.createElement("span");
  entry.className = "key-entry";
  entry.textContent = displayKey(event.key);
  entry.setAttribute("aria-label", `Key ${displayKey(event.key)}`);
  keystrokeLog.append(entry);

  keystrokeCount.textContent = `${recordedCount} ${recordedCount === 1 ? "key" : "keys"}`;
  keystrokeLog.scrollTop = keystrokeLog.scrollHeight;
}

startButton.addEventListener("click", () => setRunning(true));
stopButton.addEventListener("click", () => setRunning(false));
demoInput.addEventListener("keydown", recordKeystroke);
