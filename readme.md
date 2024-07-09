
# API de gerenciamento de dispositivos

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Conheça o Projeto

Conheça o projeto inovador que automatiza a tarefa de alimentar seu pet. Com ele, você pode agendar e controlar a alimentação do seu amigo de estimação através de um aplicativo, de qualquer lugar do mundo. Ofereça ao seu pet uma rotina mais saudável e conveniente, enquanto desfruta de tranquilidade com nosso sistema avançado e acessível.

## Endpoints

### PUT `/amountFood/:macAddress`
Atualiza o reservatório de alimentos para um dispositivo identificado pelo endereço MAC.

#### Request
- **Params**
  - `macAddress` (string): O endereço MAC do dispositivo.
- **Body**
   ```
    {
     "amountFood": "VAZIO" | "METADE" | "CHEIO"
    }
   ```
#### Response

-   **Status:** 200 OK ✔️

---

### GET `/`

Busca todos os dispositivos.

#### Response

-   **Status:** 200 OK ✔️

---

### GET `/proximo-horario/:id`

Busca o próximo horário de alimentação cadastrado para um dispositivo identificado pelo ID.

#### Request

-   **Params**
    -   `id` (string): O ID do dispositivo.

#### Response

-   **Status:** 200 OK ✔️

---

### GET `/:email`

Busca um dispositivo pelo email cadastrado.

#### Request

-   **Params**
    -   `email` (string): O email cadastrado do dispositivo.

#### Response

-   **Status:** 200 OK ✔️

---

### GET `/getByMacAddress/:mac`

Busca um dispositivo pelo endereço MAC.

#### Request

-   **Params**
    -   `mac` (string): O endereço MAC do dispositivo.

#### Response

-   **Status:** 200 OK ✔️

---

### POST `/create`

Cria um novo dispositivo.

#### Request

-   **Body**
  ```
{
      "name": string,
      "macAdress": string,
      "description": string,
      "email": string,
      "image": string,
      "hourFeed": string
	  "doorTime": string
	  "amountFood": string
    }
```  
    
#### Response

-   **Status:** 201 Created ✔️

---

### PUT `/:id`

Atualiza um dispositivo identificado pelo ID.

#### Request

-   **Params**
    -   `id` (string): O ID do dispositivo.
-   **Body**

#### Response

-   **Status:** 200 OK ✔️

---

### DELETE `/:id`

Deleta um dispositivo identificado pelo ID.

#### Request

-   **Params**
    -   `id` (string): O ID do dispositivo.

#### Response

-   **Status:** 200 OK


## Getting Started

### Pré requisitos

-   Node.js
-   npm ou yarn
-   MongoDB

### Installation

1.  Clone o repositório
    
    bash
    
    Copiar código
    
    ```
	https://github.com/Rafael-BF/BackEnd_AlimentadorPet
    ``` 
    
2.  Instale as dependências
    
    bash
    
    Copiar código
    
    ```
    npm install
    # ou
    yarn install
    ``` 
    
3.  Configure as variáveis de ambiente Crie um arquivo `.env` no diretório raiz e adicione o seguinte:
    
    env
    
    Copiar código
    ```
	DATABASE_URL="your-mongodb-connection-string"
    ``` 
    
4.  Execute as migrações do Prisma
    
    bash
    
    Copiar código
    
    ```
	npx prisma generate
    ```
    ```
	npx prisma db push
    ```
    
6.  Inicie o servidor
    
    bash
    
    Copiar código
    ```
	npm run dev
    ```
---
## Esquema do Prisma

prisma

Copiar código

```prisma
// Data source
datasource db {
  provider = "mongoDB"
  url      = env("DATABASE_URL")
}

// Generator
generator client {
  provider = "prisma-client-js"
}
model Device {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  name        String
  description String
  email       String
  hourFeed    String[] 
  doorTime    String   
  image       String
  amountFood  String
  macAddress  String
  createdAt   DateTime @default(now())
  updateAt    DateTime @updatedAt
}
```

---

## Deployment

Esta aplicação está implantada na Vercel. Siga a documentação da Vercel para instruções detalhadas sobre implantação.

## License

Este projeto está licenciado sob a licença MIT.

## Contact

Para qualquer dúvida ou problema, entre em contato pelo email [projetoappet@gmail.com].

perl

Copiar código

 `Agora você pode copiar todo o conteúdo acima e colar no seu arquivo README.md.`
