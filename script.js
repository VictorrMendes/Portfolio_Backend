const button_menu = document.querySelector('.btn_menu');
const button_ul = document.querySelector('.menuMobile ul');
const menuNav = document.querySelector('.menuNav img');

button_ul.addEventListener('click', function () {
  const menu = document.querySelector('.menuMobile');

  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
    menuNav.style.transform = 'rotate(90deg)';

  } else {
    menu.style.display = 'none';
    menuNav.style.transform = 'rotate(180deg)';
  }

})

button_menu.addEventListener('click', function () {
  const menu = document.querySelector('.menuMobile');

  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
    menuNav.style.transform = 'rotate(90deg)';
  } else {
    menu.style.display = 'none';
    menuNav.style.transform = 'rotate(180deg)';
  }
})


const requestOptions = {
  method: "GET",
  redirect: "follow"
};

async function fetchData() {
  try {
    const response = await fetch("http://localhost:8000/projects/", requestOptions);
    const result = await response.json();  
    console.log(result);  

    const dynamicProjectContainer = document.getElementById("dynamic-project");
    dynamicProjectContainer.innerHTML = ""; 

    if (result && result.title && result.projetc_img && result.description && result.link_project) {
      // Criando o box do projeto 
      const projectBox = document.createElement("div");
      projectBox.classList.add("project-box");

      projectBox.innerHTML = `
        <div class="project-inner">
          <div class="project-front">
            <!-- A URL da imagem é retirada diretamente da resposta da API -->
            <img src="${result.projetc_img}" alt="${result.title}" class="project-img"/>
            <h2 class="project-title">${result.title}</h2>
            <span class="Ferramentas">${result.tools}</span>
          </div>
          <div class="project-back">
            <h2 class="project-title">${result.title_back}</h2>
            <h4>Descrição:</h4>
            <p>${result.description}</p>
            <span class="Ferramentas">${result.tools}</span>
            <a href="${result.link_project}" target="_blank" class="link_projetc">Ver projeto</a>
          </div>
        </div>
      `;
      
      dynamicProjectContainer.appendChild(projectBox);
    } else {
      console.error("A resposta não contém os dados do projeto necessários.");
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();


































const downloadButton = document.querySelector('#butao');
const box = document.querySelector('.box');

//botão
downloadButton.addEventListener('mouseover', function baixar() {
  box.style.display = 'block';
},);
downloadButton.addEventListener('mouseout', function baixar() {
  box.style.display = 'none';
},);


//particulas

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 188,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 130,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5.017060304327615,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

var count_particles, stats, update;

stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

count_particles = document.querySelector('.js-count-particles');

update = function () {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};

requestAnimationFrame(update);
//fim particulas


