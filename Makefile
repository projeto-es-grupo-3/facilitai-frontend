install:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
	echo "export NVM_DIR=~/.nvm" >> ~/.profile
	nvm install 18.15.0
	nvm use node
	npm install

run:
	npm run build
	npm run start

dev:
	npm run dev
