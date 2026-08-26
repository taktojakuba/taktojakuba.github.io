FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY website/ /usr/share/nginx/html/
