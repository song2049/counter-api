# 백엔드 세팅

```sh
npm init -y
npm i express cors
```

그 이후 최상단에 server.js만들어주고 

## 현재 백엔드 디렉토리 구조

```
counter-api
├─ package0lock.json
├─ package.json
└─ server.js
```

## 오늘 주의 사항
- DB 없음
- ORM 없음
- 간단하게, counter +, - 기능을 백에서 구현할거

이후 배포

EC2에서 node 설치

node -v
npm v
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo pat install nginx
sudo apt update
sudo systemctl start nginx
sudo systemctl status nginx
sudo apt-get install -y nodejs

cd ~
git clone https://github.com/song2049/counter-api.git
cd counter-api/ 
npm install 
sudo vi /etc/nginx/sites-available/default

백엔드 설정
    proxy_pass http://127.0.0.1:3001;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    sudo systemctl reload nginx
ubuntu@ip-172-31-26-244:~/counter-api$ npm run start