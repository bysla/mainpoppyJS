# mainpoppy


## Sobre:
<p align="center">

Bem vindo ao mainpoppyJS!

O super novo pacote indispensavel para seu projeto.
Pois oque é melhor que ter a Poppy com você em todos seus arquivos JS?
</p>

 <img src="https://img.shields.io/static/v1?label=npm&message=6.14.14&color=red" width="100px;" alt=""/>


<h4 align="center"> 
	🚧  mainpoppy v1.1.0 🔨 Em construção...  🚧
</h4>


### Features

- [x] Comentar em todos os arquivos uma imagem aleatoria da Poppy
- [x] Comentar em todos os arquivos .js uma imagem aleatoria da Poppy
- [x] Comentar em um arquivo uma imagem aleatoria da Poppy
- [x] Adicionar arquivos para a lista de não alteração
- [x] Resetar a lista de não alteração
- [x] Remover item da lista de não alteração
- [x] Retornar uma imagem aleatoria da Poppy
- [x] Retornar um array com todas as imagens da poppy
- [x] Comentar em um arquivo uma imagem da Poppy escolhida atravéz da posição
- [x] Comentar em um arquivo uma imagem da Poppy( recomendado usar com a função 7 ou 8 dessa lista)

Exemplos de cada codigo serão disponibilizados mais a baixo.

Caso tenha alguma sugestão para mais funções, por favor a envie para o e-mail luisfelipecolosimo@gmail.com.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js](https://nodejs.org/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Implemantando no codigo

```bash
# Instale o projeto
$ npm i mainpoppy

# Instancie em se arquivo index
$ const poppy = require("mainpoppy");

# Rode o comando
$ poppy.martelao()

# Rode o arquivo
$ node index.js

# Prontinho, divirta-se
```


### 🎲 Comandos

```bash

# Comentar em todos os arquivos uma imagem aleatoria da Poppy
$ poppy.martelao()

# Comentar em todos os arquivos .js uma imagem aleatoria da Poppy
$ poppy.martelo()

# Comentar em um arquivo uma imagem aleatoria da Poppy
$ poppy.martelinho(arquivo)

# Adicionar arquivos para a lista de não alteração
$ poppy.escudo(arquivo)

#Remover item da lista de não alteração
$ poppy.escudada(arqui)

# Resetar a lista de não alteração
$ poppy.reset()

# Retornar uma imagem aleatoria da Poppy(String)
$ let imagem = poppy.poppyzinha();

# Retornar um array com todas as imagens da poppy(array String)
$ let imagem = poppy.filiacaopoppy();

#Comentar em um arquivo uma imagem da Poppy( recomendado usar com a função 7 ou 8 dessa lista)
$ poppy.martelinhoteleguiado(arquivo, imagem);
#recomendado:
$ poppy.poppyzinha().then((data) => {
	poppy.martelinhoteleguiado(arquivo, data);
 });
#ou:
$ poppy.filiacaopoppy().then((data) => {
    console.log(data.length)
    let teste = "";
    data.forEach((ele) => {
        teste += ele + "\n"
    });
    poppy.martelinhoteleguiado(arquivo, teste);
});

# Comentar em um arquivo uma imagem da Poppy escolhida atravéz da posição(caso passe um valor fora, a imagem sera escolhida de forma aleatoria)
$ poppy.martelinhodirecional(arquivo, posição);

# Prontinho, divirta-se
```


### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)



### Autor
---

<a href="https://luisfelipecolosimo.com.br">
 <img style="border-radius: 50%;" src="https://luisfelipecolosimo.com.br/assets/images/profile.png" width="100px;" alt=""/>
 <br />
 <sub><b>Luís Felipe Colósimo</b></sub></a> <a href="https://luisfelipecolosimo.com.br" title="portifolio">🚀</a>


Feito com ❤️ por Luís Felipe Colósimo 👋🏽 Entre em contato!

[![Github Badge](https://img.shields.io/badge/-luisfelipecolosimo-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=github&logoColor=white&link=https://github.com/luisfelipecolosimo)](https://github.com/luisfelipecolosimo) 
[![Gmail Badge](https://img.shields.io/badge/-luisfelipecolosimo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luisfelipecolosimoo@gmail.com)](mailto:luisfelipecolosimo@gmail.com)

