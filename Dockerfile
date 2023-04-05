ARG NODE_VERSION=16.14.2-alpine3.15

FROM node:$NODE_VERSION AS development




# required due to M1 machines (need to build bcrypt lib from source)

RUN ["apk", "add", "--no-cache", "python3", "make", "g++"]

WORKDIR /app

COPY package.json package-lock.json ./

RUN ["npm", "ci"]

COPY ./ ./

CMD ["npm", "run", "start"]




FROM development as build




RUN ["npm", "run", "build"]

RUN ["npm", "prune", "--production"]




# production

FROM node:$NODE_VERSION as production




WORKDIR /app

COPY --from=build /app/package.json ./

COPY --from=build /app/node_modules node_modules

COPY --from=build /app/dist dist




CMD ["npm", "run", "start:prod"]