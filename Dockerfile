FROM gitpod/workspace-full:latest

## install: heroku cli
USER gitpod
RUN curl http://cli-assets.heroku.com/install-ubuntu.sh | sh