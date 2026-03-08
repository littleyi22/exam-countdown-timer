let countdownInterval;

const dom = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
    mainTitle: document.getElementById('mainTitle'),
    inputTitle: document.getElementById('inputTitle'),
    targetDate: document.getElementById('targetDate'),
    saveBtn: document.getElementById('saveBtn'),
    celebration: document.getElementById('celebration')
};

// --- Persistence Logic ---
function loadSavedData() {
    const saved = JSON.parse(localStorage.getItem('simpleTimerSave'));
    if (saved) {
        dom.inputTitle.value = saved.title || '';
        dom.mainTitle.textContent = saved.title || '倒數計時';
        dom.targetDate.value = saved.date || '';
        if (saved.date) startCountdown();
    } else {
        // Set a default if first time
        dom.targetDate.value = "2026-05-16T00:00"; // 115年5月16日
        dom.inputTitle.value = "會考倒數計時";
        dom.mainTitle.textContent = "會考倒數計時";
        startCountdown();
    }
}

function saveCurrentData() {
    const data = {
        title: dom.inputTitle.value,
        date: dom.targetDate.value
    };
    localStorage.setItem('simpleTimerSave', JSON.stringify(data));
    dom.mainTitle.textContent = data.title || '倒數計時';
    startCountdown();
}

// --- Countdown Core ---
function startCountdown() {
    clearInterval(countdownInterval);
    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const target = new Date(dom.targetDate.value).getTime();
    if (isNaN(target)) return;

    const now = new Date().getTime();
    const distance = target - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        showCelebration();
        return;
    }

    const d = Math.floor(distance / 86400000);
    const h = Math.floor((distance % 86400000) / 3600000);
    const m = Math.floor((distance % 3600000) / 60000);
    const s = Math.floor((distance % 60000) / 1000);

    animateValue(dom.days, d);
    animateValue(dom.hours, h);
    animateValue(dom.minutes, m);
    animateValue(dom.seconds, s);
}

function animateValue(element, value) {
    const formatted = String(value).padStart(2, '0');
    if (element.textContent !== formatted) {
        element.textContent = formatted;
        element.style.transform = 'scale(1.1)';
        setTimeout(() => { element.style.transform = 'scale(1)'; }, 100);
    }
}

function showCelebration() {
    dom.celebration.style.display = 'flex';
}

function resetTimer() {
    dom.celebration.style.display = 'none';
}

// --- Init ---
dom.saveBtn.addEventListener('click', saveCurrentData);
window.onload = loadSavedData;
