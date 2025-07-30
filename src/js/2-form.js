document.addEventListener('DOMContentLoaded', () => {
    const formEl = document.querySelector('.feedback-form');

    let formData = {
        email: '',
        message: '',
    };

  
    const lsData = getFromLS('feedback-form-state');
    if (lsData && typeof lsData === 'object') {
        formData = lsData;
        formEl.elements.email.value = lsData.email || '';
        formEl.elements.message.value = lsData.message || '';
    }



formEl.addEventListener('input', e => {
    const email = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    formData.email = email;
    formData.message = message;

    saveToLS('feedback-form-state', formData);
});
});

formEL.addEventListener('submit', click => {
    
})



function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
};

function getFromLS(key, defaultValue) {
    const jsonData = localStorage.getItem(key);
    try {
        const data = JSON.parse(jsonData);
        return data;
    } catch {
        return defaultValue || jsonData;
    }
};


