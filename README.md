# FSPOA Collaboration Jam

Passo-a-passo para instalação e teste do projeto:

1. instalar o `nodejs` e o `npm` conforme seu sistema operacional // [link 1](https://nodejs.org) e [link 2](http://blog.npmjs.org/post/85484771375/how-to-install-npm)
2. fazer um clone deste projeto do GitHub na sua máquina:
	- `$ git clone https://github.com/lossurdo/fspoajam-front-back.git`
3. acessar a pasta do projeto e executar:
	- `$ npm install`
4. subir o serviço:
	- `$ nodejs server.js`
5. se tudo ocorrer como esperado a seguinte mensagem será apresentada:
~~~
user@linux ~/fspoajam-front-back $ nodejs server.js 
Ouvindo na porta 3000!
~~~

Acesse o endereço http://localhost:3000 para visualizar uma página com um CRUD simples, permitindo cadastrar, consultar, alterar e apagar registros.

Você pode **adaptar** este modelo para suas necessidades. Lembrando que ele foi criado para **fins de prototipagem** e desenvolvimento **rápido**.

A arquitetura ficou dividida em:

- **front-end** HTML, CSS, JavaScript:
	- interface com o usuário; onde os dados são encaminhados para o back-end via AngularJS
- **back-end** NodeJS com Express:
	- onde são recebidas as chamadas HTTP para o CRUD e os dados são armazenados em um Array de Objetos (JSON) para fins de simulação.

A camada RESTful criada obedece as premissas desde modelo. [Vide aqui](http://www.restapitutorial.com/lessons/httpmethods.html).

Você pode testar o back-end RESTful (independente do front-end escolhido) usando uma extensão para o Chrome chamada de [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop).

Qualquer dúvida entre em contato. Encontrou bugs? Fique a vontade para enviar *Pull Requests*.
