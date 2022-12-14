<?php
include("conexao.php");
?>

<!DOCTYPE html>
<html>
<head lang="pt-br">
<title>UFMS Simulator</title>
<meta charset="UTF-8">
<meta name="description" content="Simulador e listas preliminares para UFMS">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Guizão">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="stylesArquivos.css">
<link rel="stylesheet" href="stylesPhoneArquivos.css">
<link rel="icon" type="imagem/png" href="/icons/favicon.ico" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3836809396950894" crossorigin="anonymous"></script>
</head>
<body>
	<div class="nav">
		<div class="conteudo_nav">
			<img class="menu-btn" src="/icons/padrao.png">
			<div id="titulo_nav"><p> SIMULADOR DE NOTAS UFMS </p></div>
		</div>	
		<div class="menu-list" >		
			<img  src="/icons/Menu_100px.png" onclick="verificarMenu();">	
			<div class="box-list" id="box-lista">
				<ul class="lista-de-abas">
				<a class="" href="index.html">
					<img class="icon" src="/icons/home_100px.png">
					<li>Home</li></a>
				<a>
					<img class="icon" src="/icons/pencil_52px.png">
					<li>Simulador</li></a>
				<a class="active" href="arquivos.html">
					<img class="icon" src="/icons/archive_48px.png">
					<li>Arquivos</li></a>
				<a>
					<img class="icon" src="/icons/phone_60px.png">
					<li>Contato</li></a>
				
				</ul>
			</div>
		</div>	
	</div>
	<div class="content">
		<div class="menu-lateral">
			<div class="menu-lateral-content">
				<p><b>Arquivos:</b></p>
				<div class="arquivo-1">
					<img src="/icons/pdf_96px.png">
					<a href="documents/LISTA GERAL COM ACERTOS (4).pdf">Classificação Geral 2022 + Acertos</a>
				</div>	
				<div class="arquivo-1">
					<img src="/icons/pdf_96px.png">
					<a href="documents/INSCRITOS - LISTA 	PRELIMINAR (1).pdf">Relação candidato x vaga UFMS 2023</a>
				</div>		
				<div class="arquivo-1">
					<img src="/icons/pdf_96px.png">
					<a href="/documents/RELAÇÃO CANDIDATO X VAGA UEMS - PRELIMINAR (1).pdf">Relação candidato x vaga UEMS 2023</a>
				</div>		
				<div class="arquivo-1">
					<img src="/icons/pdf_96px.png">
					<a href=""> Classificação Preliminar (AGUARDE)</a>
				</div>				
			</div>
		</div>		
		<div class="central-box">
			<div class="search-box">	
				<input type="text" name="search-insc" placeholder="Procurar número de inscrição:">
				<a href="index.php"><img src="/icons/search_100px.png" class="search-icon" ></a>
			</div>	
			<div class="table-php">
				
			</div>	
		</div>
		<div class="propaganda-box">
			<div class="content-propaganda">
				<div class="my-instagram" onclick="window.location='https://www.instagram.com/guiza1m/'">
					<img src="/icons/Instagram_96px.png">
					<p>@Guiza1m</p>
				</div>
				<div class="anuncio-box">
					<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3836809396950894"
   				  	crossorigin="anonymous"></script>
					<!-- Anuncio -->
					<ins class="adsbygoogle"
					     style="display:block"
					     data-ad-client="ca-pub-3836809396950894"
					     data-ad-slot="5932608715"
					     data-ad-format="auto"
					     data-full-width-responsive="true"></ins>
					<script>
					     (adsbygoogle = window.adsbygoogle || []).push({});
					</script>
				</div>
			</div>
		</div>
	</div>
	<div class="foot">
		<div id="nome_do_criador">
			<p>Created By Guizão</p>
		</div>
	</div>
	<script type="text/javascript" src="scripts.js"></script>
</body>
</html>