<h1>Desenvolvimento de uma aplicação para adoção de animais</h1>

<h4>Funcionalidades:</h4>

- Realizar uma autenticação no sistema,
- Fazer uma listagem;
- Consulta de detalhes de um item da listagem.

<h4>O que deve ser desenvolvido:</h4>

O projeto consiste em um aplicativo para visualizar animais disponivéis para adoção, consiste em três telas, sendo duas da seguinte forma:

<h3>1. Tela de Login</h3>

Nesta tela teriam dois campos, de usuário e senha, e um botão para a realização do login. Ao logar com sucesso a aplicação deverá navegar para a "Tela da Home".

Referência:

<img src="https://user-images.githubusercontent.com/108371535/188518125-c475ae81-624a-462f-a947-4de157761f50.png" width="150px" heigth="150px">

<h3>2. Tela da Home</h3>

Nesta tela são consultados dois endpoints, um para a consulta de "categoria" (cachorros, gatos, coelhos, peixes...) e outro para a consulta dos animais disponíveis. Caso uma categoria fosse escolhida, apenas os animais daquela categoria poderiam aparecer em tela. Assim que um dos animais fosse selecionado a aplicação deverá navegar para "Tela de Detalhamento".

A filtragem dos animais deve ser realizada via front-end para a validação de conhecimento.

Especificação de endpoints:

GET "/categories"
resposta: [
{

       "id"; // id da categoria

       "name"; // nome da categoria

       "img"; // imagem da categoria (base64)

}
]

GET "/animals"
resposta: [
{

       "id"; // id do registro

       "name"; // nome do pet

       "age"; // idade do pet

       "img"; // foto do pet

}
]

Referência:

<img src="https://user-images.githubusercontent.com/108371535/188518311-e7d82b50-f7b7-453e-9cc2-3dc7f4494664.png" width="150px" heigth="150px">

<h4>Este teste visa validar os seguintes pontos:</h4>

1. Entendimento da linguagem (Javascript/Typescript, estilização e linguagem de marcação - variando dependendo de que plataforma for desenvolvido);
2. Estrutura e organização de código;
3. Semelhança com o que foi proposto no design;
4. Conhecimento em integrações REST;
5. Capacidade de desenvolvimento em um prazo apertado;
6. Controle de feedback para o usuário (sucesso, erros e carregamento);
7. Controle de performance;
8. Testes unitários.
9. Acessibilidade

<h2>Teste entregue e realizado:</h2>

<p align="center"> Uso de:</p>
<div align="center">
<img src="https://user-images.githubusercontent.com/108371535/188522049-7d775a59-3772-4fc0-b4c8-6b5393cf3c54.png" width="100px" heigth="100px"><img src="https://user-images.githubusercontent.com/108371535/188522046-1cedb278-09f8-44e5-bb19-e2d940b3d97b.png" width="100px" heigth="100px"><img src="https://user-images.githubusercontent.com/108371535/188522398-a128daef-d347-4191-bc59-9e9f4d4a8360.png" width="90px" heigth="90px"></div>

Tela Login:

<img src="https://user-images.githubusercontent.com/108371535/188520834-cbe92c74-52e3-4539-b70e-b6da7fc74dcb.png" width="150px" heigth="150px">

Tela Login em uso do Input Text e Password:

<img src="https://user-images.githubusercontent.com/108371535/188521507-b27300bb-f1b7-4400-812a-1e044824b787.png" width="150px" heigth="150px">

Tela Home:

<img src="https://user-images.githubusercontent.com/108371535/188520929-3f8eb1d4-d1df-43e9-bf1a-6e5448c297e9.png" width="150px" heigth="150px">

Tela Home em uso do Select:

<img src="https://user-images.githubusercontent.com/108371535/188521004-fcc688fd-1124-4caf-b592-294a27da691d.png" width="150px" heigth="150px">

Tela Home apresentando os resultados de busca:

<img src="https://user-images.githubusercontent.com/108371535/188521077-d48268d9-554c-45b5-863b-a79618f5f02f.png" width="150px" heigth="150px">

<p align="center">Bora adotar um pet?</p>

<div align="center"> 
  <img src="https://user-images.githubusercontent.com/108371535/188523287-ddd6a2f1-1329-4b6f-bf16-38276ffe5c93.jpg" width="200px" heigth="200px"></div>
