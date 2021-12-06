import { ApiProperty } from "@nestjs/swagger";

export class AccessTokenResponse {
  @ApiProperty()
  access_token: string;
}

export class SignInRequest {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}


