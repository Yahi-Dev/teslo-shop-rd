##PARA CORRER EN DEV 

1. Clonar el repositorio
2. crear una copia del archivo .env.template y renombrarlo a .env y cambiar las variables de entorno
3. Instalar las dependecias: npm install 
4. Levantar la base de datos: docker compose up -d  
5. Correr las migraciones de Prisma: npx prisma migrate dev
6. Ejecutar seed: npm run seed
6. Correr el proyecto: npm run dev 




