// Simple floating chatbot interactions
// - Toggle window open/close
// - Append user/bot messages
// - Provide basic keyword-based help for navigation

document.addEventListener('DOMContentLoaded', function () {
    const root = document.querySelector('.chatbot');
    if (!root) return;

    const toggleBtn = root.querySelector('.chatbot-toggle');
    const windowEl = root.querySelector('.chatbot-window');
    const closeBtn = root.querySelector('.chatbot-close');
    const form = root.querySelector('#chatbotForm');
    const input = root.querySelector('#chatbotText');
    const messages = root.querySelector('#chatbotMessages');

    function openChat() {
        windowEl.classList.add('active');
        windowEl.setAttribute('aria-hidden', 'false');
        toggleBtn.setAttribute('aria-expanded', 'true');
        setTimeout(() => input && input.focus(), 50);
    }

    function closeChat() {
        windowEl.classList.remove('active');
        windowEl.setAttribute('aria-hidden', 'true');
        toggleBtn.setAttribute('aria-expanded', 'false');
    }

    function appendMessage(text, who) {
        const div = document.createElement('div');
        div.className = `chatbot-message ${who}`;
        div.textContent = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function respondTo(inputText) {
        const text = inputText.toLowerCase();
        // Simple keyword routing
        if (/(grade|ថ្នាក់|class)\s*(7|៧)/.test(text)) {
            return 'ចុចតំណនេះទៅកាន់ថ្នាក់ទី៧: grade/grade7.html';
        }
        if (/(grade|ថ្នាក់|class)\s*(8|៨)/.test(text)) {
            return 'ចុចតំណនេះទៅកាន់ថ្នាក់ទី៨: grade/grade8.html';
        }
        if (/(grade|ថ្នាក់|class)\s*(9|៩)/.test(text)) {
            return 'ចុចតំណនេះទៅកាន់ថ្នាក់ទី៩: grade/grade9.html';
        }
        if (/(grade|ថ្នាក់|class)\s*(10|១០)/.test(text)) {
            return 'ចុចតំណនេះទៅកាន់ថ្នាក់ទី១០: grade/grade10.html';
        }
        if (/(grade|ថ្នាក់|class)\s*(11|១១)/.test(text)) {
            return 'ចុចតំណនេះទៅកាន់ថ្នាក់ទី១១: grade/grade11.html';
        }
        if (/(grade|ថ្នាក់|class)\s*(12|១២)/.test(text)) {
            return 'ចុចតំណនេះទៅកាន់ថ្នាក់ទី១២: grade/grade12.html';
        }
        if (/contact|ទំនាក់ទំនង/.test(text)) {
            return 'អ្នកអាចរកទំនាក់ទំនងនៅផ្នែក "ទំនាក់ទំនង" ខាងក្រោមទំព័រ។';
        }
        if (/exercise|លំហាត់/.test(text)) {
            return 'ទៅកាន់ផ្នែក "លំហាត់អនុវត្ត" ដើម្បីចាប់ផ្តើមធ្វើលំហាត់។';
        }
        return 'ខ្ញុំនឹងជួយអ្នកស្វែងរក៖ អ្នកអាចសាកសួរ ដូចជា "ថ្នាក់ទី៩" ឬ "លំហាត់".';
    }

    // Toggle actions
    toggleBtn && toggleBtn.addEventListener('click', function () {
        const isOpen = windowEl.classList.contains('active');
        if (isOpen) {
            closeChat();
        } else {
            openChat();
        }
    });

    closeBtn && closeBtn.addEventListener('click', function () {
        closeChat();
    });

    // Submit handler
    form && form.addEventListener('submit', function (e) {
        e.preventDefault();
        const value = (input && input.value || '').trim();
        if (!value) return;
        appendMessage(value, 'user');
        input.value = '';
        const reply = respondTo(value);
        appendMessage(reply, 'bot');
    });
});


