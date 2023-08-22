function control(usuario,senha) {
	if (usuario == "aluno" && senha == "meta@2023") {
		alert("dados corretos");
		window.location = "index.html";
	}else{
		alert("Dados incorretos, tente novamente");
	}
}