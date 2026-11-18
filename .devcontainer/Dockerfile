FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install PostgreSQL server + client
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y postgresql postgresql-contrib \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Environment vars for postgres setup
ENV POSTGRES_USER=vscode \
    POSTGRES_PASSWORD=codeplatoon \
    POSTGRES_DB=vscode

# Create a startup script to initialize the DB
RUN service postgresql start && \
    sudo -u postgres psql -c "CREATE USER ${POSTGRES_USER} WITH PASSWORD '${POSTGRES_PASSWORD}';" && \
    sudo -u postgres psql -c "ALTER USER ${POSTGRES_USER} WITH SUPERUSER;" && \
    sudo -u postgres psql -c "CREATE DATABASE ${POSTGRES_DB} OWNER ${POSTGRES_USER};"

EXPOSE 5432

# Install Cypress browser dependencies (Xvfb + shared libs)
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && for pkg in xvfb libnss3 libxss1 libxtst6 libxshmfence1 libgbm1 xauth \
    libgtk-3-0t64 libgtk2.0-0t64 libasound2t64 libatk1.0-0t64 libatk-bridge2.0-0t64 \
    libcups2t64 libnotify4 libpango-1.0-0 libcairo2 libxcomposite1 libxdamage1 \
    libxfixes3 libxrandr2 libxkbcommon0 libdrm2; do apt-get install -y "$pkg" 2>/dev/null; done \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Start PostgreSQL automatically
CMD ["bash", "-c", "service postgresql start && tail -f /dev/null"]
