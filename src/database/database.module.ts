import { Module, Global } from '@nestjs/common';
//Aquí se usa otro tipo de provider llamado useValue
const API_Key = '12345678';
const API_Key_PROD = 'prod19r48903';
//Global indica que todo lo que esté aquí se puede utilizar en toda la aplicación sin necesidad de importar el módulo, solamente injectándolo.
@Global()
@Module({
  providers: [
    {
      provide: 'API_Key',
      //Permite compartir valores en vez de clases globales en la aplicación
      //Valida si esta en ambiente de produccion y elige si enviar una u otra llave.
      useValue: process.env.NODE_ENV === 'prod' ? API_Key_PROD : API_Key,
    },
  ],
  exports: ['API_Key'],
})
export class DatabaseModule {}
