/* eslint-disable prettier/prettier */
//Controladores son rutas o endpoints que la app necesita. (npm run start:dev)

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return 'Hola mamá';
//   }
//Para evitar un conflicto los controladores estáticos siempre van antes de los dinámicos
//   @Get('products/filter')
//   getProductsAndFilter() {
//     return 'Its filtered';
//   }

//Para crear una nueva ruta se coloca dentro del controlador get (Los slashes no afectan)
//Los parámetros Query son opcionales (Limit y offset ya están definidos así que no pasa nada si no se definen en la ruta)
//   @Get('Products')
//   getSugar(
//     @Query('limit') limit = 10,
//     @Query('offset') offset = 0,
//     @Query('brand') brand: string,
//   ): string {
//     return `Max ${limit} products and min ${offset} from ${brand} brand`;
//   }

//@Param se utiliza para definir parametros con información dinámica, por ejemplo los id de un producto.

//   @Get('products/:productId')
//   getProduct(@Param('productId') productId: string) {
//     return `product ${productId}`;
//   }

//Si quieres acceder a más de un parámetro solo se repite la secuencia
//   @Get('categories/:id/products/:productId')
//   getProductAndCategory(
//     @Param('productId') productId: string,
//     @Param('id') id: string,
//   ) {
//     return `product ${productId} from category ${id}`;
//   }
//Los pipes tienen la función de validar y/o transformar
//Los class-validators nos permiten validar los datos mientras se corre el programa.
