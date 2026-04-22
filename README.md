# 🔐 AutenticacaoOAuth

Sistema web de autenticação utilizando **Google OAuth 2.0**, **Node.js**, **Express**, **JWT** e **MySQL**.

Projeto desenvolvido para demonstrar conceitos de:

* Autenticação
* Autorização
* OAuth 2.0
* JWT
* Rotas protegidas
* Integração com banco de dados

---

# Funcionalidades

✅ Login com Google
✅ Obtenção de dados do usuário autenticado
✅ Geração de token JWT
✅ Área protegida por token
✅ Salvamento do usuário no MySQL
✅ Estrutura organizada em camadas

---

# Tecnologias utilizadas

* Node.js
* Express
* Passport.js
* Passport Google OAuth 2.0
* MySQL
* JWT (jsonwebtoken)
* dotenv

---

# 📁 Estrutura do Projeto

```bash
AutenticacaoOAuth/
│── src/
│   ├── app.js
│   ├── config/
│   │   ├── database.js
│   │   └── passport.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── userRoutes.js
│   └── services/
│       └── jwtService.js
│── .env
│── server.js
│── package.json
```

---

# ⚙️ Instalação

## 1. Clonar repositório

```bash
git clone https://github.com/SEU-USUARIO/AutenticacaoOAuth.git
cd AutenticacaoOAuth
```

## 2. Instalar dependências

```bash
npm install
```

---

# 🗄 Configurar banco de dados MySQL

Crie o banco:

```sql
CREATE DATABASE oauthdb;
USE oauthdb;
```

Crie a tabela:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    google_id VARCHAR(100) UNIQUE,
    name VARCHAR(150),
    email VARCHAR(150) UNIQUE,
    photo TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 🔐 Configurar arquivo `.env`

Crie um arquivo `.env` na raiz:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=oauthdb

GOOGLE_CLIENT_ID=seu_client_id
GOOGLE_CLIENT_SECRET=seu_client_secret

JWT_SECRET=sua_chave_jwt
```

---

# 🌐 Configuração Google OAuth

No Google Cloud Console:

1. Criar projeto
2. Criar credenciais OAuth 2.0
3. Configurar:

## Origem autorizada:

```bash
http://localhost:3000
```

## URI de redirecionamento:

```bash
http://localhost:3000/auth/google/callback
```

---

# ▶️ Executar projeto

```bash
node server.js
```

Servidor iniciado em:

```bash
http://localhost:3000
```

---

# 🔑 Fluxo de autenticação

1. Usuário acessa:

```bash
http://localhost:3000/auth/google
```

2. Realiza login no Google

3. Sistema retorna:

```json
{
  "message": "Login realizado",
  "token": "JWT_TOKEN",
  "user": {
    "name": "Usuário",
    "email": "usuario@gmail.com"
  }
}
```

---

# 🔒 Testar rota protegida

## Endpoint:

```bash
GET /user/profile
```

## Header:

```bash
Authorization: SEU_TOKEN
```

---


# 📚 Conceitos aplicados

* Autenticação via OAuth
* Autorização com JWT
* Middleware de segurança
* Persistência em banco relacional
* Arquitetura MVC

---

# Autora

Célia Raizer

---

