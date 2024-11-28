import { IsEmail, IsNotEmpty } from "class-validator";

export class abdDTOs{
    @IsNotEmpty({message:"aaaaa"})
    @IsEmail()
    name:string;
}