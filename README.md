# Projeto de Pipeline CI/CD com Docker e GitHub Actions

[![Status da Pipeline](https://github.com/samuelZ20/pipeline-em-ci-cd/actions/workflows/ci.yml/badge.svg)](https://github.com/samuelZ20/pipeline-em-ci-cd/actions)

Este projeto é uma demonstração de uma pipeline de CI/CD (Integração e Entrega Contínua) completa, construída como parte do desafio de trainee da CompJr.

O objetivo é automatizar todo o ciclo de vida de uma aplicação Node.js simples: desde a verificação de qualidade do código, passando pelos testes automatizados, até a construção de uma imagem Docker e o deploy final em nuvem.

**Deploy em produção:** [https://pipeline-em-ci-cd.onrender.com/](https://pipeline-em-ci-cd.onrender.com/)

---

## 🛠️ Tecnologias Utilizadas

* **Aplicação:** Node.js + Express
* **Testes:** Jest + Supertest
* **Qualidade de Código:** ESLint
* **Containerização:** Docker
* **Automação (CI/CD):** GitHub Actions
* **Hospedagem (PaaS):** Render

---

## 🚀 Como Rodar Localmente

Você pode rodar este projeto de duas maneiras: localmente com o Node.js ou via Docker.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en/) (v18+)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### 1. Rodando com Node.js

```bash
# Clone o repositório
git clone [https://github.com/samuelZ20/pipeline-em-ci-cd.git](https://github.com/samuelZ20/pipeline-em-ci-cd.git)

# Entre na pasta do projeto
cd pipeline-em-ci-cd

# Instale as dependências
npm install

# Rode os testes
npm test

# Inicie a aplicação
npm start
