import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Cổ Tích' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'co-tich' })
  @IsString()
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ example: 'Các câu chuyện cổ tích kinh điển' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  icon?: string;
}
