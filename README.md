If you don't have Node.js instaled (like myself), you'll have to run:

Install nvm, run in bash:
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Close terminal and open it back, and run:
```
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
```

Install Node.js (LTS version):
```
nvm install --lts
```

Verify correct installation:
```
node -v
npm -v
```
