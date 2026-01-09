// --- CONFIGURACIÓN DE FIREBASE ---
const firebaseConfig = {
    apiKey: "AIzaSyCRh0mUaV7aNoRufDPxU64045Tfl8YViMQ",
    authDomain: "impostorpro-51efb.firebaseapp.com",
    databaseURL: "https://impostorpro-51efb-default-rtdb.firebaseio.com",
    projectId: "impostorpro-51efb",
    storageBucket: "impostorpro-51efb.firebasestorage.app",
    messagingSenderId: "907081902354",
    appId: "1:907081902354:web:d88d5a302275ba789a2bcb"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- DATOS DEL JUEGO (Categorías y Palabras) ---
const CATEGORIAS = {
    "Argentina 🇦🇷": [
        "Mate", "Asado", "Obelisco", "Fernet", "Maradona", 
        "Messi", "Dulce de Leche", "Empanada", "Tango", "Gaucho", 
        "Patagonia", "Glaciar Perito Moreno", "Cataratas", "Aconcagua", "Caminito", 
        "Truco", "Choripán", "Milanesa", "Alfajor", "Colectivo", 
        "Subte", "Peso", "Cordillera", "Malvinas", "Bariloche", 
        "Ushuaia", "Mendoza", "Vino Malbec", "Carpincho", "Hornero", 
        "Pampero", "La Pampa", "Che", "Boludo", "Quilombo", 
        "Siesta", "Cancha", "Hinchada", "Picada", "Medialuna", 
        "Costanera", "Mar del Plata", "Kiosco", "Sifón", "Parrilla", 
        "Achuras", "Chimichurri", "Locro", "Humita", "Cabildo"
    ],
    "Cocina 🍳": [
        "Sartén", "Horno", "Cuchillo", "Tenedor", "Cuchara", 
        "Olla", "Batidora", "Microondas", "Refrigerador", "Congelador", 
        "Licuadora", "Tostadora", "Plato", "Vaso", "Taza", 
        "Servilleta", "Mantel", "Chef", "Receta", "Ingrediente", 
        "Sal", "Pimienta", "Azúcar", "Harina", "Aceite", 
        "Vinagre", "Huevo", "Leche", "Manteca", "Queso", 
        "Pan", "Fruta", "Verdura", "Carne", "Pescado", 
        "Pollo", "Pasta", "Arroz", "Sopa", "Ensalada", 
        "Postre", "Cafetera", "Tetera", "Rallador", "Colador", 
        "Abrelatas", "Sacacorchos", "Fregadero", "Esponja", "Detergente"
    ],
    "Animales 🦁": [
        "León", "Tigre", "Elefante", "Jirafa", "Mono", 
        "Perro", "Gato", "Ratón", "Caballo", "Vaca", 
        "Cerdo", "Oveja", "Gallina", "Pato", "Águila", 
        "Loro", "Paloma", "Pez", "Tiburón", "Ballena", 
        "Delfín", "Pulpo", "Cangrejo", "Tortuga", "Serpiente", 
        "Cocodrilo", "Rana", "Sapo", "Araña", "Hormiga", 
        "Abeja", "Mariposa", "Mosca", "Mosquito", "Lobo", 
        "Zorro", "Oso", "Conejo", "Canguro", "Koala", 
        "Panda", "Pingüino", "Foca", "Murciélago", "Búho", 
        "Avestruz", "Camello", "Hipopótamo", "Rinoceronte", "Cebra"
    ],
    "Deportes ⚽": [
        "Fútbol", "Baloncesto", "Tenis", "Voleibol", "Natación", 
        "Atletismo", "Boxeo", "Ciclismo", "Golf", "Rugby", 
        "Hockey", "Béisbol", "Fútbol Americano", "Críquet", "Tenis de Mesa", 
        "Bádminton", "Balonmano", "Waterpolo", "Surf", "Esquí", 
        "Snowboard", "Patinaje", "Gimnasia", "Karate", "Judo", 
        "Taekwondo", "Lucha Libre", "Automovilismo", "Motociclismo", "Ciclismo de Montaña", 
        "Escalada", "Senderismo", "Pesca", "Caza", "Tiro con Arco", 
        "Equitación", "Remo", "Piragüismo", "Vela", "Submarinismo", 
        "Paracaidismo", "Puenting", "Parkour", "Skateboarding", "BMX", 
        "Crossfit", "Yoga", "Pilates", "Zumba", "Aeróbic"
    ],
    "Profesiones 👷": [
        "Médico", "Enfermero", "Profesor", "Ingeniero", "Abogado", 
        "Arquitecto", "Policía", "Bombero", "Militar", "Piloto", 
        "Azafata", "Conductor", "Mecánico", "Electricista", "Fontanero", 
        "Carpintero", "Albañil", "Pintor", "Jardinero", "Agricultor", 
        "Ganadero", "Pescador", "Cocinero", "Camarero", "Panadero", 
        "Pastelero", "Carnicero", "Frutero", "Vendedor", "Cajero", 
        "Contable", "Administrativo", "Secretario", "Recepcionista", "Telefonista", 
        "Periodista", "Fotógrafo", "Diseñador", "Programador", "Informático", 
        "Científico", "Investigador", "Psicólogo", "Psiquiatra", "Dentista", 
        "Veterinario", "Farmacéutico", "Músico", "Actor", "Escritor"
    ],
    "Cine 🎬": [
        "Película", "Actor", "Actriz", "Director", "Guionista", 
        "Productor", "Cámara", "Sonido", "Iluminación", "Vestuario", 
        "Maquillaje", "Efectos Especiales", "Banda Sonora", "Tráiler", "Cartel", 
        "Estreno", "Alfombra Roja", "Premio", "Oscar", "Cine", 
        "Pantalla", "Butaca", "Palomitas", "Refresco", "Entrada", 
        "Taquilla", "Proyector", "Rollo de Película", "Digital", "3D", 
        "Gafas 3D", "Comedia", "Drama", "Terror", "Ciencia Ficción", 
        "Acción", "Aventura", "Romance", "Musical", "Animación", 
        "Documental", "Cortometraje", "Largometraje", "Secuela", "Precuela", 
        "Remake", "Cameo", "Spoiler", "Crítica", "Festival"
    ],
    "Transporte ✈️": [
        "Coche", "Moto", "Bicicleta", "Autobús", "Camión", 
        "Tren", "Metro", "Tranvía", "Avión", "Helicóptero", 
        "Barco", "Yate", "Crucero", "Submarino", "Lancha", 
        "Velero", "Canoa", "Kayak", "Balsa", "Globo Aerostático", 
        "Dirigible", "Cohete", "Nave Espacial", "Taxi", "Uber", 
        "Ambulancia", "Coche de Policía", "Camión de Bomberos", "Grúa", "Tractor", 
        "Excavadora", "Apisonadora", "Hormigonera", "Camión de Basura", "Furgoneta", 
        "Caravana", "Autocaravana", "Patinete", "Monopatín", "Patines", 
        "Segway", "Teleférico", "Funicular", "Ascensor", "Escalera Mecánica", 
        "Andando", "Corriendo", "Caballo", "Carro", "Trineo"
    ],
    "Tecnología 💻": [
        "Ordenador", "Portátil", "Tablet", "Móvil", "Smartphone", 
        "Reloj Inteligente", "Televisión", "Mando a Distancia", "Consola", "Videojuego", 
        "Mando", "Teclado", "Ratón", "Pantalla", "Impresora", 
        "Escáner", "Altavoz", "Auriculares", "Micrófono", "Cámara", 
        "Webcam", "Router", "Módem", "Wifi", "Bluetooth", 
        "USB", "Disco Duro", "Memoria RAM", "Procesador", "Tarjeta Gráfica", 
        "Placa Base", "Fuente de Alimentación", "Ventilador", "Batería", "Cargador", 
        "Cable", "Enchufe", "Interruptor", "Bombilla", "Robot", 
        "Dron", "Inteligencia Artificial", "Realidad Virtual", "Realidad Aumentada", "Internet", 
        "Red Social", "Aplicación", "Web", "Email", "Chat"
    ],
    "Ropa 👗": [
        "Camiseta", "Camisa", "Blusa", "Pantalón", "Vaqueros", 
        "Falda", "Vestido", "Traje", "Chaqueta", "Abrigo", 
        "Cazadora", "Jersey", "Sudadera", "Chaleco", "Gabardina", 
        "Impermeable", "Bañador", "Bikini", "Ropa Interior", "Calcetines", 
        "Medias", "Zapatos", "Zapatillas", "Botas", "Sandalias", 
        "Chanclas", "Tacones", "Gorra", "Sombrero", "Gorro", 
        "Bufanda", "Guantes", "Cinturón", "Corbata", "Pajarita", 
        "Pañuelo", "Gafas de Sol", "Reloj", "Pulsera", "Collar", 
        "Pendientes", "Anillo", "Bolso", "Mochila", "Cartera", 
        "Monedero", "Maleta", "Paraguas", "Pijama", "Bata"
    ],
    "Escuela 🏫": [
        "Escuela", "Colegio", "Instituto", "Universidad", "Clase", 
        "Aula", "Patio", "Gimnasio", "Biblioteca", "Comedor", 
        "Director", "Profesor", "Maestro", "Alumno", "Estudiante", 
        "Compañero", "Examen", "Prueba", "Tarea", "Deberes", 
        "Trabajo", "Proyecto", "Presentación", "Nota", "Calificación", 
        "Aprobado", "Suspenso", "Matrícula", "Diploma", "Título", 
        "Libro", "Cuaderno", "Carpeta", "Estuche", "Lápiz", 
        "Bolígrafo", "Goma", "Sacapuntas", "Regla", "Tijeras", 
        "Pegamento", "Celo", "Grapadora", "Clip", "Pizarra", 
        "Tiza", "Rotulador", "Borrador", "Pupitre", "Silla"
    ]
};

// Variables Globales
let myName = "";
let myId = localStorage.getItem('userId') || 'user_' + Math.random().toString(36).substr(2, 9);
localStorage.setItem('userId', myId);
let currentRoom = "";
let iAmAdmin = false;
let roomRef = null;

// Referencias DOM (¡Actualizado con las nuevas pantallas!)
const screens = {
    login: document.getElementById('screen-login'),
    lobby: document.getElementById('screen-lobby'),
    game: document.getElementById('screen-game'),
    voting: document.getElementById('screen-voting'),
    results: document.getElementById('screen-results')
};

// --- FUNCIONES PRINCIPALES ---

function mostrarPantalla(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
}

function crearSala() {
    myName = document.getElementById('playerName').value.trim();
    if (!myName) return alert("¡Ponte un nombre!");
    
    const roomId = Math.random().toString(36).substr(2, 5).toUpperCase();
    currentRoom = roomId;
    iAmAdmin = true;

    // Crear sala en Firebase
    roomRef = db.ref('salas/' + roomId);
    roomRef.set({
        admin: myId,
        estado: 'lobby', // lobby, jugando, votando, resultados
        categoria: '',
        palabra: '',
        impostor: '',
        players: {
            [myId]: { name: myName, score: 0, isOnline: true }
        }
    });

    conectarASala();
}

function unirseSala() {
    myName = document.getElementById('playerName').value.trim();
    const code = document.getElementById('roomCodeInput').value.trim().toUpperCase();
    if (!myName || !code) return alert("Nombre y Código obligatorios");

    currentRoom = code;
    roomRef = db.ref('salas/' + code);
    
    roomRef.get().then(snap => {
        if (snap.exists()) {
            // Unirse
            db.ref('salas/' + code + '/players/' + myId).set({
                name: myName, score: 0, isOnline: true
            });
            conectarASala();
        } else {
            alert("Esa sala no existe");
        }
    });
}

function conectarASala() {
    mostrarPantalla('lobby');
    document.getElementById('lobbyCode').innerText = currentRoom;
    
    // Rellenar select de categorías
    const select = document.getElementById('categorySelect');
    select.innerHTML = `<option value="MIXTO">🎲 MIXTO (Todas)</option>`;
    Object.keys(CATEGORIAS).forEach(cat => {
        select.innerHTML += `<option value="${cat}">${cat}</option>`;
    });

    // ESCUCHAR CAMBIOS EN REALTIME (La magia de Google)
    roomRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
            // Si la sala se borró y no soy admin, avisar
            if(!iAmAdmin) alert("La sala fue cerrada");
            location.reload();
            return;
        }

        // 1. Verificar si soy Admin
        if (data.admin === myId) {
            iAmAdmin = true;
            document.getElementById('adminPanel').classList.remove('hidden');
            document.getElementById('adminGameControls').classList.remove('hidden');
        }

        // 2. Actualizar Lista de Jugadores
        const list = document.getElementById('playersList');
        list.innerHTML = '';
        let count = 0;
        Object.entries(data.players || {}).forEach(([id, p]) => {
            count++;
            const li = document.createElement('li');
            li.className = "list-group-item d-flex justify-content-between align-items-center bg-transparent text-white border-secondary";
            li.innerHTML = `
                <span>${p.name} ${id === data.admin ? '👑' : ''}</span>
                ${iAmAdmin && id !== myId ? `<button onclick="expulsar('${id}')" class="btn btn-sm btn-danger py-0">❌</button>` : ''}
            `;
            list.appendChild(li);
        });
        document.getElementById('playerCount').innerText = count;

        // 3. Controlar Estados del Juego (ACTUALIZADO)
        if (data.estado === 'lobby') {
            mostrarPantalla('lobby');
            resetearCarta();
            document.getElementById('voteControlContainer').innerHTML = ""; // Limpiar botón votar
        
        } else if (data.estado === 'jugando') {
            mostrarPantalla('game');
            configurarCarta(data);
            
            // Inyectar botón de votación si soy admin
            if(iAmAdmin) {
                const container = document.getElementById('voteControlContainer');
                // Evitamos duplicar el botón si ya existe
                if(!container.hasChildNodes()) {
                    const btn = document.createElement('button');
                    btn.className = "btn btn-warning w-100 py-3 fw-bold mt-3 shadow-sm";
                    btn.innerHTML = '<i class="bi bi-megaphone-fill"></i> INICIAR VOTACIÓN';
                    btn.onclick = iniciarFaseVotacion;
                    container.appendChild(btn);
                }
            }

        } else if (data.estado === 'votando') {
            mostrarPantalla('voting');
            renderizarVotacion(data.players);

        } else if (data.estado === 'resultados') {
            mostrarPantalla('results');
            mostrarResultadosFinales(data);
        }
    });
}

function iniciarPartida() {
    const catSelect = document.getElementById('categorySelect').value;
    let palabrasPosibles = [];
    let catFinal = catSelect;

    if (catSelect === 'MIXTO') {
        const keys = Object.keys(CATEGORIAS);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        palabrasPosibles = CATEGORIAS[randomKey];
        catFinal = "MIXTO (" + randomKey + ")";
    } else {
        palabrasPosibles = CATEGORIAS[catSelect];
    }

    const palabraSecreta = palabrasPosibles[Math.floor(Math.random() * palabrasPosibles.length)];
    
    // Elegir Impostor con validación de jugadores
    roomRef.child('players').get().then(snap => {
        const players = snap.val();
        if (!players) return;

        const ids = Object.keys(players);

        // --- MÍNIMO 3 JUGADORES ---
        if (ids.length < 3) {
            alert("⚠️ ¡Faltan jugadores! Se necesitan mínimo 3 para que el juego tenga sentido.");
            return; 
        }

        const impostorId = ids[Math.floor(Math.random() * ids.length)];

        // Actualizar Firebase para todos (Limpiamos votos anteriores)
        roomRef.update({
            estado: 'jugando',
            categoria: catFinal,
            palabra: palabraSecreta,
            impostor: impostorId,
            votos: null, 
            resultadoFinal: null
        });
    });
}

function configurarCarta(data) {
    document.getElementById('gameCategory').innerText = data.categoria;
    const roleTitle = document.getElementById('secretRole');
    const roleDesc = document.getElementById('secretWord');

    if (myId === data.impostor) {
        // VISTA DEL IMPOSTOR
        roleTitle.innerText = "😈 ERES EL IMPOSTOR";
        roleTitle.style.color = "#dc3545"; // Rojo Bootstrap
        
        roleDesc.innerHTML = `
            <span style="font-size: 0.8em; color: #6c757d;">Tu misión: Engaña a todos.</span><br><br>
            💡 <strong>PISTA:</strong> El tema es<br>
            <span style="color: #fd7e14; font-size: 1.3em; text-decoration: underline;">${data.categoria}</span>
        `;
    } else {
        // VISTA DEL CIUDADANO
        roleTitle.innerText = "CIUDADANO";
        roleTitle.style.color = "#198754"; // Verde Bootstrap
        roleDesc.innerHTML = `
            <span style="font-size: 0.8em; color: #6c757d;">La palabra secreta es:</span><br><br>
            <span style="font-size: 1.5em; color: #fff;">${data.palabra}</span>
        `;
    }
}

function voltearCarta() {
    const card = document.getElementById('gameCard');
    card.classList.toggle('is-flipped');
    // Seguridad anti-espía: se voltea de nuevo sola en 4 seg
    if(card.classList.contains('is-flipped')){
        setTimeout(() => card.classList.remove('is-flipped'), 4000);
    }
}

function resetearCarta() {
    const card = document.getElementById('gameCard');
    if(card) card.classList.remove('is-flipped');
}

// --- LÓGICA DE VOTACIÓN ---

function iniciarFaseVotacion() {
    roomRef.update({
        estado: 'votando',
        votos: {} 
    });
}

function renderizarVotacion(players) {
    const container = document.getElementById('voting-buttons');
    const status = document.getElementById('vote-status');
    container.innerHTML = '';
    
    // Resetear visualización
    status.className = "alert alert-info py-2";
    status.innerText = "Selecciona al sospechoso...";

    Object.entries(players).forEach(([id, p]) => {
        // No permitimos votarnos a nosotros mismos para simplificar
        if (id !== myId) {
            const btn = document.createElement('button');
            btn.innerText = p.name;
            btn.className = 'btn btn-outline-light btn-lg py-3 fw-bold'; 
            btn.onclick = () => enviarVoto(id);
            container.appendChild(btn);
        }
    });
}

function enviarVoto(targetId) {
    // Registrar voto en Firebase
    roomRef.child('votos').child(myId).set(targetId);
    
    // Feedback visual inmediato
    document.getElementById('voting-buttons').innerHTML = ''; // Limpiar botones
    const status = document.getElementById('vote-status');
    status.className = "alert alert-success py-2";
    status.innerHTML = '<i class="bi bi-check-circle"></i> ¡Voto enviado! Esperando a los demás...';
    
    // Si soy Admin, monitoreo los votos
    if (iAmAdmin) {
        verificarFinVotacion();
    }
}

function verificarFinVotacion() {
    roomRef.get().then(snap => {
        const data = snap.val();
        if(!data.players) return;

        const totalJugadores = Object.keys(data.players).length;
        const totalVotos = data.votos ? Object.keys(data.votos).length : 0;

        // Si todos votaron, calculamos
        if (totalVotos >= totalJugadores) {
            calcularResultados(data);
        }
    });
}

function calcularResultados(data) {
    const conteo = {};
    let masVotadoId = null;
    let maxVotos = -1;

    // Contar votos
    if (data.votos) {
        Object.values(data.votos).forEach(votoPara => {
            conteo[votoPara] = (conteo[votoPara] || 0) + 1;
        });
    }

    // Buscar al más votado
    Object.entries(conteo).forEach(([id, numVotos]) => {
        if (numVotos > maxVotos) {
            maxVotos = numVotos;
            masVotadoId = id;
        }
    });

    // Lógica de victoria
    let titulo = "";
    let colorTitulo = "";
    let expulsadoNombre = masVotadoId ? data.players[masVotadoId].name : "Nadie";

    // Si hay empate o nadie votó
    if (!masVotadoId) {
        titulo = "😐 EMPATE / NADIE";
        colorTitulo = "#ffc107"; // Amarillo
    } else if (masVotadoId === data.impostor) {
        titulo = "🏆 ¡GANAN LOS CIUDADANOS!";
        colorTitulo = "#198754"; // Verde
    } else {
        titulo = "💀 GANÓ EL IMPOSTOR";
        colorTitulo = "#dc3545"; // Rojo
    }

    roomRef.update({
        estado: 'resultados',
        resultadoTitulo: titulo,
        resultadoColor: colorTitulo,
        expulsado: expulsadoNombre
    });
}

function mostrarResultadosFinales(data) {
    const title = document.getElementById('result-title');
    const details = document.getElementById('result-details');
    const adminControls = document.getElementById('adminRestartControls');
    const waitingText = document.getElementById('waitingText');
    
    // Datos del impostor real
    const impostorName = data.players[data.impostor] ? data.players[data.impostor].name : "Desconocido";

    title.innerText = data.resultadoTitulo;
    title.style.color = data.resultadoColor;
    
    details.innerHTML = `
        <span class="text-muted">El pueblo expulsó a:</span><br>
        <strong class="text-white">${data.expulsado}</strong>
    `;

    document.getElementById('real-impostor-name').innerText = impostorName;

    if (iAmAdmin) {
        adminControls.classList.remove('hidden');
        waitingText.classList.add('hidden');
    } else {
        adminControls.classList.add('hidden');
        waitingText.classList.remove('hidden');
    }
}

// Funciones de Admin / Generales
function expulsar(idJugador) {
    if(confirm("¿Sacar a este jugador?")) {
        db.ref('salas/' + currentRoom + '/players/' + idJugador).remove();
    }
}

function volverAlLobby() {
    roomRef.update({ estado: 'lobby', votos: null, resultadoFinal: null });
}

function resetearPartida() {
    volverAlLobby();
}

function salirJuego() {
    location.reload();
}