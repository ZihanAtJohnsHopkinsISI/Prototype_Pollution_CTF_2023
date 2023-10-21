FROM node:14 as chroot

RUN /usr/sbin/useradd --no-create-home -u 1337 user

COPY ./ /home/user/

RUN chown -R 1337 /home/user/*
WORKDIR /home/user/
RUN npm ci --only=production --omit=dev
RUN npm install 
RUN apt-get update

CMD ["sh", "start.sh"]