import {CanActivate, ExecutionContext, Injectable, Logger} from '@nestjs/common';
import { Observable } from 'rxjs';
import {Request} from "express";

@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers.authorization;
    if(apiKey.split(' ')[0] === 'Bearer' && apiKey.split(' ')[1] === process.env.API_KEY){
      return true;
    }
    return false;
  }
}
