
const firebaseConfig = {
  apiKey: "AIzaSyAeUqDl2wHKsrLlgtAeS9kG2IKJ9l-KBXk",
  authDomain: "app-fire-6db8f.firebaseapp.com",
  projectId: "app-fire-6db8f",
  storageBucket: "app-fire-6db8f.firebasestorage.app",
  messagingSenderId: "448972917096",
  appId: "1:448972917096:web:998037f20e3515182c2edd",
  measurementId: "G-4EESH35ZD8"
};


firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();



const formCadastro = document.getElementById('form-cadastro');

if (formCadastro) {
    formCadastro.addEventListener('submit', (evento) => {
        evento.preventDefault(); // Impede o recarregamento da página

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

        auth.createUserWithEmailAndPassword(email, senha)
            .then((userCredential) => {
            
                alert("Usuário cadastrado com sucesso! Faça o login.");
                window.location.href = "index.html"; // Redireciona para o login
            })
            .catch((error) => {
             
                alert("Erro ao cadastrar: " + error.message);
                console.error("Erro de cadastro:", error);
            });
    });
}



const formLogin = document.getElementById('form-login');

if (formLogin) {
    formLogin.addEventListener('submit', (evento) => {
        evento.preventDefault();

        const email = evento.target.email.value;
        const senha = evento.target.password.value;

      e
        auth.signInWithEmailAndPassword(email, senha)
            .then((userCredential) => {
               
                const user = userCredential.user;
                alert("Login realizado com sucesso! Bem-vindo, " + user.email);

                
                console.log("Usuário logado:", user);
            })
            .catch((error) => {
       
                alert("Erro ao logar: Por favor, verifique seu e-mail e senha.");
                console.error("Erro de login:", error.message);
            });
    });
}