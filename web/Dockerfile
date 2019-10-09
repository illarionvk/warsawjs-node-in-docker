FROM node:10.16.3-buster

ENV TINI_VERSION=v0.18.0 \
    TINI_KILL_PROCESS_GROUP=enabled \
    TINI_SUBREAPER=enabled

RUN curl -L -o /tini https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static \
    && curl -L -o /tini.asc https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static.asc \
    && (gpg --no-tty --keyserver ha.pool.sks-keyservers.net --recv-keys 595E85A6B1B4779EA4DAAEC70B588DFF0527A9B7 \
       ||  gpg --no-tty --keyserver keyserver.ubuntu.com --recv-keys 595E85A6B1B4779EA4DAAEC70B588DFF0527A9B7) \
    && gpg --no-tty --verify /tini.asc \
    && chmod +x /tini

ENTRYPOINT ["/tini", "-sg", "--"]

RUN apt-get update \
    && apt-get --assume-yes --no-install-recommends install \
       jq \
       parallel \
    && rm -rf /var/lib/apt/lists/*

ENV NEXT_TELEMETRY_DISABLED=1 \
    SHELL=/bin/bash \
    TMP_DIR=/mnt/tmp \
    WORKDIR=/app

ENV PATH="${WORKDIR}/bin:${WORKDIR}/node_modules/.bin:${PATH}"

WORKDIR ${WORKDIR}

RUN mkdir ${TMP_DIR} \
    && chown -R node:node ${WORKDIR} ${TMP_DIR}

USER node

# Set custom shell prompt
RUN echo 'export PS1="[DOCKER]:\u@\h:\w\\$ "' >> ~/.bashrc
