import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";
import {ANONYMOUS_USER, Identite, Profil, RegisterRequest, User} from "../models/user";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {environment} from "../../environments/environment";
import {UserService} from "./user.service";
import {Client} from "../models/client";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(ANONYMOUS_USER);
  public user$: Observable<User> = this.userSubject.asObservable();

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user =>  !!user.jwtToken));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  constructor(private http: HttpClient,
              private snackbar: MatSnackBar,
              private router: Router) {
  }

  login(credential: Identite): Observable<User> {
    return this.http.post<any>(`${environment.apiURL}/login`, credential, httpOptions)
      .pipe(
        map(rep => {
          const user = {...rep.user, jwtToken: rep.authorisation.token};
          this.userSubject.next(user);
          return user;
        }),
        shareReplay(),
        tap(() => this.snackbar.open(`Bienvenue, ${this.userValue.name}`, 'Close', {
          duration: 2000, horizontalPosition: 'left', verticalPosition: 'top'
        })),
        catchError(err => {
          this.userSubject.next(ANONYMOUS_USER);
          this.snackbar.open('Connexion invalide', 'Close', {
            duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
          })
          throw new Error(`login result : ${err}`)
        })
      );
  }

  register(request: RegisterRequest): Observable<User> {
    return this.http.post<any>(`${environment.apiURL}/register`, {
      nom: request.name,
      prenom: request.prenom,
      name: request.name + request.prenom,
      email: request.email,
      password: request.password,
      code_postal: request.code_postal,
      ville: request.ville,
      adresse: request.adresse,
    }, httpOptions).pipe(
      map(rep => {
        const user = {...rep.user, jwtToken: rep.authorisation.token};
        this.userSubject.next(user);
        this.snackbar.open(`Bienvenue, ${this.userValue.name}`, 'Close', {
          duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
        })
        return user;
      }),
      shareReplay(),
      catchError(err => {
        console.log(err);
        this.userSubject.next(ANONYMOUS_USER);
        this.snackbar.open(`Enregistrement invalide ${err.error.message}`, 'Close', {
          duration: 3000, horizontalPosition: 'right', verticalPosition: 'top'
        })
        throw new Error(`register result : ${err}`)
      })
    )
  }

  logout(): void {
    const oldUser = this.userValue;
    let token = ''
    this.user$.subscribe(user => {token = user.jwtToken});
    this.http.post<any>(`${environment.apiURL}/logout`, {}, httpOptions)
      .pipe()
      .subscribe(user => {
          this.snackbar.open(`A bientôt, ${oldUser.name}`, 'Close', {
            duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
          })
        }
      );
    this.userSubject.next(ANONYMOUS_USER);
    this.router.navigate(['/']);
  }

  getProfile(): Observable<Profil> {
    return this.http.get<any>(`${environment.apiURL}/me`, httpOptions)
      .pipe(
        map(rep => rep.user),
        catchError(err => throwError(err))
      );
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

}
