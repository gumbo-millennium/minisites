FROM node:lts-alpine

# Copy app
COPY .output /opt/app

# Expose proper port
ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

EXPOSE 3000

# Update entrypoint
ENTRYPOINT [ "node", "/opt/app/server/index.mjs" ]
