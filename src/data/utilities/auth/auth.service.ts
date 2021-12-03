import { Injectable } from '@nestjs/common';
import { User } from "../../schemas/user.schema";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "../../../modules/user/user.service";

@Injectable()
export class AuthService {

  constructor(private readonly userService:UserService,private jwtService:JwtService) {
  }

  async validateUser(username:string,pass:string):Promise<any>{
    const user= await this.userService.findByEmail(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user:any){
    const payload={sub:user._id,first_name:user.first_name,image_name:user.image_name, image_path:user.image_path
      ,role:user.role,
      last_name:user.last_name,email:user.email,phone:user.phone,
     };
    return{
      access_token:this.jwtService.sign(payload),
    }
  }

}
