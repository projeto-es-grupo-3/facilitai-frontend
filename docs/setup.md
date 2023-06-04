<h1 align="center"> Setup das dependências necessárias para rodar o front-end Facilitaí </h1> 


## Node.js® JavaScript runtime environment

O Node.js® tem muitas versões portanto a melhor prática é instalar um gerenciador de versões. Você pode alternativamente instalar apenas a versão desejada (preferencialmente a LTS que atualmente é **Node.js® v18.15.0**). Segue os passos abaixo em sitema Ubuntu Linux.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Abra o arquivo ~/.profile
nano ~/.profile

# Copie os seguintes comandos ao final do arquivo
export NVM_DIR=~/.nvm
```

Para obter usar o Node.js®

```bash 
# ver as versões
nvm ls-remote

# instale a versão LTS
nvm install 18.15.0
nvm use node
```

## Git distributed version control system

Todo programador deve conhecer essa ferramenta. Já vem em Sistema Operacionais Linux Debian/Ubuntu para instalar no Windows é so olhar a [página](https://git-scm.com/downloads) deles