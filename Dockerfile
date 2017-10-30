FROM node:8.8.1-slim

EXPOSE 3000

# Global npm installation directory
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# Chrome dependencies
RUN apt-get update && \
  apt-get install -yq gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 \
  libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 \
  libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 \
  libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 \
  ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget git

# Switch to the built in node user instead of root.
USER node

RUN cd /home/node/ && \
    mkdir .npm-global && \
    mkdir /home/node/app

ENV PATH "$PATH:/home/node/app/node_modules/.bin:/home/node/.npm-global/bin"

WORKDIR /home/node/app
