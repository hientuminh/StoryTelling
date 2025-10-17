import { IsString, IsNotEmpty, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStoryDto {
  @ApiProperty({ example: 'Cô Bé Quàng Khăn Đỏ' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Câu chuyện về cô bé quàng khăn đỏ đi thăm bà' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Ngày xưa, có một cô bé...' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  coverImage?: string;

  @ApiProperty({ example: '3-6 tuổi' })
  @IsString()
  @IsNotEmpty()
  ageRange: string;

  @ApiProperty({ example: 'cổ tích' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 10 })
  @IsNumber()
  @Min(1)
  duration: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  audioUrl?: string;
}
