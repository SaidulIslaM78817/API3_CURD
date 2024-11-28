import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AbService } from './ab.service';
import { abdDTOs } from 'src/abd.dto';

@Controller('ab')
export class AbController {
    constructor(private readonly abService: AbService) {}
    @Get()
    getAb(@Body() data:abdDTOs)
    {
      return data;
    }
   @Post("/add")
   add(@Body() data)
   {
     return this.abService.add(data)
   }
   @Get("/getAll")
   getAll(){
    return this.abService.getAll()
   }
   @Get("/getAll/:name")
   spec(@Param('name') name){
    return this.abService.spec(name)
   }
   
   @Post("/db/add")
   dbAdd(@Body() data)
   {
     return this.abService.dbAdd(data)
   }
   @Get("/db/getAll")
   get()
   {
     return this.abService.get()
   }
   @Get("/db/getAll/:id")
   getid(@Param('id') id)
   {
     return this.abService.getid(id)
   }
   @Delete("/db/getAll/:id")
   did(@Param('id') id)
   {
     return this.abService.did(id)
   }
   @Patch("/db/update/:id")
   uid(@Param('id') id , @Body() data)
   {
     return this.abService.uid(id,data)
   }

}
