// Cambio de color de fondo con el botón "Cambiar Tema"
const btnCambiarTema = document.getElementById('btn-cambiar-tema');
btnCambiarTema.addEventListener('click', () => {
    document.body.classList.toggle('tema-claro');
    if (document.body.classList.contains('tema-claro')) {
        document.body.style.backgroundColor = "#f0f0f0";
        document.body.style.color = "#000";
    } else {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "#fff";
    }
});

// Funcionalidad del botón "Saber Más" para mostrar un modal con información específica
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');
const modalInfo = document.getElementById('modal-info');

document.querySelectorAll('.btn-info').forEach(button => {
    button.addEventListener('click', (event) => {
        const info = event.target.getAttribute('data-info');
        modalInfo.textContent = info;
        modal.style.display = "flex";
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Agregar un nuevo comentario
document.getElementById('btn-comentar').addEventListener('click', () => {
    const comentario = document.getElementById('nuevoComentario').value;
    if (comentario) {
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');
        nuevoComentario.innerHTML = `<p>Nuevo Usuario</p><p>${comentario}</p><button class="btn-eliminar">Eliminar</button>`;
        document.getElementById('comentarios').appendChild(nuevoComentario);
        document.getElementById('nuevoComentario').value = '';

        // Agregar funcionalidad para eliminar comentario
        nuevoComentario.querySelector('.btn-eliminar').addEventListener('click', () => {
            nuevoComentario.remove();
        });
    }
});

// Eliminar comentario existente
document.querySelectorAll('.btn-eliminar').forEach(button => {
    button.addEventListener('click', (event) => {
        event.target.parentElement.remove();
    });
});
