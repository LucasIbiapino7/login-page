# 🖥️ Interface do Sistema de Autenticação - React + JWT

Este repositório contém a interface frontend do sistema de autenticação, desenvolvido em **React** com integração ao backend que utiliza **Spring Boot e JWT**. O sistema permite **login, cadastro, recuperação de senha e acesso autenticado a áreas protegidas**.

## 🚀 Tecnologias Utilizadas

- **React** (Vite)
- **React Router DOM** (Gerenciamento de Rotas)
- **Axios** (Requisições HTTP)
- **React Hook Form + Yup** (Validação de Formulários)
- **React Toastify** (Notificações)
- **CSS Modules** (Estilização)

---

## 🔧 Como Executar o Projeto

### 1️⃣ **Clone o Repositório**
```bash
https://github.com/LucasIbiapino7/login-page.git
```

### 2️⃣ **Instale as Dependências**
```bash
cd nome-do-repositorio
npm install  # ou yarn install
```

### 3️⃣ **Execute o Projeto**
```bash
npm run dev  # ou yarn dev
```
A aplicação estará disponível em `http://localhost:5173`

---

## 📌 Funcionalidades

✅ **Login e Cadastro de Usuário** com autenticação JWT.
✅ **Recuperação de Senha** (solicitação via e-mail e redefinição com token).
✅ **Proteção de Rotas** (usuários não autenticados não acessam o Dashboard).
✅ **Exibição de Informações do Usuário** autenticado.
✅ **Redirecionamento automático** baseado na autenticação.
✅ **Validação de Formulários** para evitar erros no cadastro/login.
✅ **Notificações interativas** para feedback do usuário.

---

## 🔗 Estrutura de Rotas
| Caminho                 | Acesso |
|-------------------------|--------|
| `/login`               | Público |
| `/casdatro`            | Público |
| `/forgot-password`     | Público |
| `/recover-password/:token` | Público |
| `/dashboard`           | Protegido |

---

## 🔄 Integração com o Backend
O frontend consome a API REST do backend desenvolvido com **Spring Boot**. O sistema utiliza **JWT para autenticação** e envia o token em todas as requisições autenticadas.

📌 **Endpoints utilizados:**
| Método  | Endpoint             | Descrição |
|---------|---------------------|-----------|
| `POST`  | `/auth/login`       | Autentica o usuário e retorna o token JWT |
| `POST`  | `/auth/register`    | Registra um novo usuário |
| `POST`  | `/auth/recover-token` | Gera um token de recuperação de senha |
| `PUT`   | `/auth/new-password`  | Redefine a senha |

---

## 🎨 Estilização
A interface foi construída com **CSS Modules / Styled Components**, garantindo **responsividade e um design limpo**.

---

## 📜 Licença
Este projeto está sob a licença MIT.

---

💡 **Feedbacks são bem-vindos!** Caso queira contribuir, sinta-se à vontade para abrir uma issue ou pull request! 🚀

