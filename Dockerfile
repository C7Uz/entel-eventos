
# Usar Node.js 18 Alpine (ligero y rápido)
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci && npm cache clean --force

# Copiar código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer puerto 3000 (default de Nuxt)
EXPOSE 3000

# Variable de entorno para producción
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]