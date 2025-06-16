# Full-Stack Articles Site

A project-based full-stack web application that allows users to upvote and comment on articles within a secure and interactive interface.

## Features

- **User Authentication**: Secure signup, login, and logout powered by Firebase Authentication.
- **Voting System**: Upvote articles and track user-specific votes.
- **Commenting**: Add and display comments for each article.
- **Responsive UI**: Built with React components and styled for usability.
- **Backend API**: RESTful endpoints implemented with Node.js and Express.
- **Data Storage**: MongoDB database for persistence.
- **Deployment**: Configured for cloud deployment on Google Cloud Platform.

## Technical Stack

- **Frontend**: React (Vite), JavaScript, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Firebase Auth
- **Hosting**: Google Cloud Platform

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended) 
- [MongoDB](https://www.mongodb.com/) (Community v7.0.21 and Shell tool v2.5.2)
- [Firebase Account](https://firebase.google.com/) with a project set up
- [Google Cloud SDK](https://cloud.google.com/sdk)

<details>
  <summary>If this is your first time doing this on Windows</summary>

You'll be delighted to, after download those:
```bash
nano ~/.bashrc
```
Add to the file:
```/.bashrc
alias mongosh='"/c/Program Files/MongoDB/Server/mongo-2.5.2-win32-x64/bin/mongosh.exe"'
alias mongod='"/c/Program Files/MongoDB/Server/7.0/bin/mongod.exe"'
alias gcloud='"/c/Program Files (x86)/Google/Cloud SDK/google-cloud-sdk/bin/gcloud.cmd"'
```
Save with CTRL+S and exit with CTRL+X.
Después, recargá:
```bash
source ~/.bashrc
```
</details>

<details>
  <summary>If you don't have Node.js or the remainign tools installed</summary>

Install nvm, run in bash:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Close terminal and open it back, and run:
```bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
```

Install Node.js (LTS version):
```bash
nvm install --lts
```

Verify correct installation:
```bash
node -v
npm -v
```

On back-end folder run:
```bash
npm install --save-dev nodemon
npm install mongodb
```

On front-end folder run:
```bash
npm install axios
npm install firebase
```
</details>

## Running the Application

Ensure your MongoDB server is running locally or accessible via URI.
Start mongodb database, once started:
```mongosh
use full-stack-react-db

db.articles.insertMany([{name: 'eternauta', upvotes: 0, upvoteIds: [], comments: []}, {name: 'socialismo', upvotes: 0, upvoteIds: [], comments: []}, {name: 'amigos', upvotes: 0, upvoteIds: [], comments: []}])
```
Close connection pressing CTRL+C twice.

To run back or front end, go to back-end or front-end folder respectively and run:
```bash
npm run dev
```

## Credentials
Due to security concerns many neccesary-to-work credentials were removed, the following files are needed to be created and filled in order to make the app work:
```/front-end/.env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```
```/back-end/credentials.json
{
  "type": "service_account",
  "project_id": "",
  "private_key_id": "",
  "private_key": "",
  "client_id": "",
  "auth_uri": "",
  "token_uri": "",
  "auth_provider_x509_cert_url": "",
  "client_x509_cert_url": "",
  "universe_domain": ""
}
```
To get these parameters you need to create a [Firebase project](https://console.firebase.google.com/).

```/back-end/prod-env.yaml
env_variables:
  MONGODB_USERNAME: 
  MONGODB_PASSWORD: 
```
To get these parameters you need to create a cluster at [MongoDB](https://cloud.mongodb.com/).
