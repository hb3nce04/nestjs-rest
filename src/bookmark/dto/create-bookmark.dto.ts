import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default: "Example Title"
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: "Example description"
  })
  description?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default: "Example link"
  })
  link: string;
}
