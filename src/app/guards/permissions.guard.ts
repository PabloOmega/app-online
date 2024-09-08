import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../services/users/users.service';

export const permissionsGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  if(true){
    router.navigate(["/login"]);
    return false;
  }

  return true;
};
