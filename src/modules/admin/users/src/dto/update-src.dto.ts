import { PartialType } from '@nestjs/mapped-types';
import { CreateSrcDto } from './create-src.dto';

export class UpdateSrcDto extends PartialType(CreateSrcDto) {}
