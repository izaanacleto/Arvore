const seasonConfig = {
  primavera: { 
    titulo: "Primavera", 
    descricao: "Cores suaves e florais.", 
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" 
  },
  verao: { 
    titulo: "Verão", 
    descricao: "Cores vibrantes e quentes.", 
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" 
  },
  outono: { 
    titulo: "Outono", 
    descricao: "Tons terrosos e aconchegantes.", 
    img: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?auto=format&fit=crop&w=600&q=80" 
  },
  inverno: { 
    titulo: "Inverno", 
    descricao: "Tons frios e limpos.", 
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=600&q=80" 
  }
};

function setSeason(season) {
  const app = document.getElementById('app');
  app.className = 'container ' + season;
  document.getElementById('titulo').innerText = seasonConfig[season].titulo;
  document.getElementById('descricao').innerText = seasonConfig[season].descricao;
  document.getElementById('preview-image').src = seasonConfig[season].img;
  document.getElementById('preview-image').alt = "Imagem de " + seasonConfig[season].titulo;

  addLog("Mudança para " + seasonConfig[season].titulo);
}

// Log de eventos
function addLog(msg) {
  const log = document.getElementById('log');
  const p = document.createElement('p');
  const time = new Date().toLocaleTimeString();
  p.textContent = `[${time}] ${msg}`;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight; // rolar para o fim
}

// Define estação inicial automática
window.onload = () => {
  const initial = detectSeason();
  setSeason(initial);
  addLog("Estação inicial detectada: " + seasonConfig[initial].titulo);
};

function detectSeason() {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'primavera';
  if (month >= 6 && month <= 8) return 'verao';
  if (month >= 9 && month <= 11) return 'outono';
  return 'inverno';
}
