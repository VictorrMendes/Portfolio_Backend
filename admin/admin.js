document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const upload = document.getElementById('upload')
    const key = document.getElementById('keyInput');  

    const messageSuccess = document.getElementById('messageSuccess');


    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('img_upload', document.getElementById('img_upload').files[0]);
    formData.append('tools', document.getElementById('Tools').value);
    formData.append('description', document.getElementById('Description').value);
    formData.append('link_project', document.getElementById('Link_project').value);
    formData.append('key', key.value);  


    // fetch('/upload/', {
    //     method: 'POST',
    //     body: formData,
    //     headers: {
    //         'X-CSRFToken': getCookie('csrftoken')
    //     }
    // })
    //     .then(response => response.json())
    //     .then(data => {
        if (key.value === "123") {
        alert('Projeto enviado com sucesso!');
        messageSuccess.innerHTML = "";  // Limpa a mensagem de sucesso anterior

        const projectBox = document.createElement("div");
        projectBox.classList.add("project-box");


        const imageURL = URL.createObjectURL(formData.get('img_upload'));

        projectBox.innerHTML = `
        <div class="project-inner">
            <div class="project-front">
                <img src="${imageURL}" alt="${formData.get('title')}" class="project-img"/>
                <h2 class="project-title">${formData.get('title')}</h2>
                <span class="Ferramentas">${formData.get('tools')}</span>
            </div>
            <div class="project-back">
                <h2 class="project-title">${formData.get('title')}</h2>
                <h4>Descrição:</h4>
                <p>${formData.get('description')}</p>
                <span class="Ferramentas">${formData.get('tools')}</span>
                <a href="${formData.get('link_project')}" target="_blank" class="link_projetc">Ver projeto</a>
            </div>
        </div>`;

        messageSuccess.appendChild(projectBox);

        document.getElementById('uploadForm').reset();
    }else{
        alert('Erro ao enviar o projeto!');
        console.error('Erro:', error);
    }
});
// 
//     .catch(error => {
//         console.error('Erro:', error);
//         alert('Erro ao enviar o projeto!');
//     });
// });
