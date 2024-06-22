import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    default: "example@example.com"
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default: "password"
  })
  password: string;
}
