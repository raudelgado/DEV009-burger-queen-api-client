import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { LoginService } from './../../services/login.service';
import { Router } from '@angular/router';
import { of } from 'rxjs'; // Importamos 'of' para simular observables

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>; // Creamos un spy para LoginService
  let routerSpy: jasmine.SpyObj<Router>; // Creamos un spy para Router

  beforeEach(() => {
    //  aqui Configuramos los spie
    loginServiceSpy = jasmine.createSpyObj('LoginService', ['login']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should set error message for empty email and password', () => {
    //  aqui Simulamos el envío del formulario con campos vacíos
    component.login();
    
    // Verificamos que el mensaje de error sea el esperado
    expect(component.errorMessage).toBe('Email and password are required.');
  });

  it('should navigate to "/New Order" on successful login', () => {
    // Simulamos un inicio de sesión exitoso
    loginServiceSpy.login.and.returnValue(of({ accessToken: 'fakeAccessToken' })); // revisar esto
    
    // Simulamos el envío del formulario con datos válidos
    component.user.email = 'test@example.com';
    component.user.password = 'password';
    component.login();
    
    // Verificamos que se haya llamado al método 'navigate' del Router con la ruta esperada
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/New Order']);
  });

  it('should set error message for incorrect credentials', () => {
    // Simulamos un error de inicio de sesión (credenciales incorrectas)
    loginServiceSpy.login.and.returnValue(of({ error: { status: 401 } }));
    
    // Simulamos el envío del formulario con datos válidos
    component.user.email = 'test@example.com';
    component.user.password = 'password';
    component.login();
    
    // Verificamos que el mensaje de error sea el esperado
    expect(component.errorMessage).toBe('Incorrect email or password.');
  });

  it('should set generic error message for other login errors', () => {
    // Simulamos un error de inicio de sesión diferente (por ejemplo, error interno del servidor)
    loginServiceSpy.login.and.returnValue(of({ error: { status: 500 } }));
    
    // Simulamos el envío del formulario con datos válidos
    component.user.email = 'test@example.com';
    component.user.password = 'password';
    component.login();
    
    // Verificamos que el mensaje de error sea el esperado
    expect(component.errorMessage).toBe('Login error. Incorrect credentials. Please try again.');
  });
});

