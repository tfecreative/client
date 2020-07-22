# build vue client
FROM node:lts-alpine as build-stage
WORKDIR /client
COPY ./client/package.json package.json
RUN yarn
COPY ./client .
RUN yarn build --mode production

FROM nginx:1.15.12-alpine
RUN mkdir /logs
COPY --from=build-stage /client /client
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
