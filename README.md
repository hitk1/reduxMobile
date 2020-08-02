# ReduxMobile
O objetivo deste projeto foi estudar o gerenciamento de estado utilizando [Redux](https://redux.js.org/) em aplicações mobile. É um simples exemplo de gerenciamento de produtos em um carrinho de compras.


# Setup

## JSON-SERVER

Foi utilizado o [json-server](https://github.com/typicode/json-server) para simular a comunicação com uma API. Para que garantir que funcione corretamente, é recomendado que inicie o json-server utilizando o IP da sua máquina ao invés de *localhost*.

No diretório raiz do projeto:
```bash
json-server server.json -p[PORT] --host=[LOCALIP]
```
**Lembre-se de colocar as mesmas configurações no arquivo de configuração de chamadas à API: './src/service/api.ts**
