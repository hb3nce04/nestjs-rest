import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsOptional, IsString } from "class-validator"

export class EditUserDto {
    @IsEmail()
    @IsOptional()
    @ApiProperty({
        default: "edited@edited.com"
    })
    email?: string

    @IsString()
    @IsOptional()
    @ApiProperty({
        default: "First name"
    })
    firstName?: string

    @IsString()
    @IsOptional()
    @ApiProperty({
        default: "Last name"
    })
    lastName?: string
}