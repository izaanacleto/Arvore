const seasonConfig = {
  primavera: { 
    titulo: "🌸Primavera", 
    descricao: "Cores suaves e florais.", 
    img: "https://midias-turismo.eurodicas.com.br/wp-content/uploads/2025/02/primavera-na-europa-1.jpg.webp" 
  },
  verao: { 
    titulo: "☀️Verão", 
    descricao: "Cores vibrantes e quentes.", 
    img: "https://blog.topatlantico.pt/wp-content/uploads/2025/03/Onde-ir-verao-2025-Republica-Dominicana_SHT_2548810737.jpg" 
  },
  outono: { 
    titulo: "🍂Outono", 
    descricao: "Tons terrosos e aconchegantes.", 
    img: "https://dicasparaviagens.com.br/wp-content/uploads/2017/03/Outono-Principal.jpg" 
  },
  inverno: { 
    titulo: "❄️Inverno", 
    descricao: "Tons frios e limpos.", 
    img: "https://i0.statig.com.br/bancodeimagens/imgalta/82/ra/uv/82rauv4ftakh2z3fboq6pih7d.jpg" 
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


function addLog(msg) {
  const log = document.getElementById('log');
  const p = document.createElement('p');
  const time = new Date().toLocaleTimeString();
  p.textContent = `[${time}] ${msg}`;
  log.appendChild(p);
  log.scrollTop = log.scrollHeight;
}


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
