##configurar variables de entrnorno.
-instalar la dependencia requerida 
   npm i --save @nestjs/config
-crear el archivo .env
 para crear variables de entorno , para proteger, contraseñas , keys etc

 en app.module activar config 
    -imports: [ConfigModule.forRoot()],
    (LAS VARIABLES DE ENTORNO SON VISIBLES DENTRO DE NODE A TRAVES DE 'PROCESS.ENV.VARIABLE_DE_ENTORNO')
    ARCHIVO MAIN -  LINEA   await app.listen(process.env.PORT ?? 3000);
    si no existe esta variable en el archivo env o de lo contario no esta declarada en process tomara las variables de entorno en archivo env


cuando vamos a cambiear de aquipo podemos clonar nuestro proyecto 

