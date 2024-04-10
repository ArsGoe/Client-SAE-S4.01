import {inject, Injectable} from '@angular/core';
import {
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {environment} from "../../environments/environment";
import {User} from "../models/user";

export function jwtInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  const authService = inject(AuthService);
  const user: User = authService.userValue;
  const isLoggedIn = !!user.id && !!user.jwtToken;
  const isApiUrl = request.url.startsWith(environment.apiURL);
  if (isLoggedIn && isApiUrl) {
    request = request.clone({
      setHeaders: {Authorization: `Bearer ${user.jwtToken}`}
    });
  }
  return next(request);
}
