import { Injectable } from '@nestjs/common';
import { CreateSrcDto } from './dto/create-src.dto';
import { UpdateSrcDto } from './dto/update-src.dto';

@Injectable()
export class SrcService {
  create(createSrcDto: CreateSrcDto) {
    return 'This action adds a new src';
  }

  findAll() {
    return `This action returns all src`;
  }

  findOne(id: number) {
    return `This action returns a #${id} src`;
  }

  update(id: number, updateSrcDto: UpdateSrcDto) {
    return `This action updates a #${id} src`;
  }

  remove(id: number) {
    return `This action removes a #${id} src`;
  }
}
