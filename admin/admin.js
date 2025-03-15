document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const resetar = document.getElementById('resetar');
    const keyInput = document.getElementById('keyInput');
    const messageSuccess = document.getElementById('messageSuccess');
    const uploadForm = document.getElementById('uploadForm');


    const formData = new FormData();
    formData.append('title', document.getElementById('title-front').value);
    formData.append('title_back', document.getElementById('title-back').value);
    formData.append('projetc_img', document.getElementById('img_upload').files[0]);
    formData.append('tools', document.getElementById('Tools').value);
    formData.append('description', document.getElementById('Description').value);
    formData.append('link_project', document.getElementById('Link_project').value);

    async function fetchSenha() {
        try {
            const response = await fetch("http://localhost:3000/senha/");
            const data = await response.json();
            return data.senha;
        } catch (error) {
            console.error("Erro ao buscar a senha:", error);
            alert("Erro ao buscar a senha. Verifique a conexão.");
            return null;
        }
    }

    async function validarSenha() {
        const senhaDigitada = keyInput.value;
        const senhaCorreta = await fetchSenha();

        if (!senhaCorreta) {
            return; 
        }

        if (senhaDigitada === senhaCorreta) {
            try {
                const response = await fetch("http://localhost:3000/projects/", {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    alert('Projeto enviado com sucesso!');
                    uploadForm.reset();
                    

                } else {
                    console.error("Erro ao enviar o projeto:", response.status, await response.json());
                    alert("Erro ao enviar o projeto. Verifique os dados e tente novamente.");
                }

            } catch (error) {
                console.error("Erro ao enviar o projeto:", error);
                alert("Erro de conexão ao enviar o projeto.");
            }

        } else {
            alert("Senha incorreta!");
        }
    }

    validarSenha();

    resetar.addEventListener('click', function () {
        messageSuccess.innerHTML = "";
    });

});