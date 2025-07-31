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

    formEl.addEventListener('submit', e => {
    e.preventDefault();

        // const form = e.currentTarget;
    const email = formEl.elements.email.value.trim();
    const message = formEl.elements.message.value.trim();

    if (email === "" || message === "") {
        alert("Fill please all fields");
        return;
    }
     console.log('Submitted data:', { email, message });

    
    localStorage.removeItem('feedback-form-state');
        formData = { email: '', message: '' };
        
        formEl.reset(); 
        // form.reset();
});
});


function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function getFromLS(key, defaultValue) {
    const jsonData = localStorage.getItem(key);
    try {
        const data = JSON.parse(jsonData);
        return data;
    } catch {
        return defaultValue || jsonData;
    }
}


