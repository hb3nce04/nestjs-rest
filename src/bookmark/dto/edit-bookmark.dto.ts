import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class EditBookmarkDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    default: "Edited Title"
  })
  title?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: "Edited description"
  })
  description?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    default: "Edited link"
  })
  link?: string;
}
