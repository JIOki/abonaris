import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SrcService } from './src.service';
import { CreateSrcDto } from './dto/create-src.dto';
import { UpdateSrcDto } from './dto/update-src.dto';

@Controller('src')
export class SrcController {
  constructor(private readonly srcService: SrcService) {}

  @Post()
  create(@Body() createSrcDto: CreateSrcDto) {
    return this.srcService.create(createSrcDto);
  }

  @Get()
  findAll() {
    return this.srcService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.srcService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSrcDto: UpdateSrcDto) {
    return this.srcService.update(+id, updateSrcDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.srcService.remove(+id);
  }
}
