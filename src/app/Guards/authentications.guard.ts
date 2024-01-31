import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ToAuthenticateUserService } from '../Services/to-authenticate-user.service';

export const authenticationsGuard: CanActivateFn = (route, state) => {
  let toAuthenticateUserService = inject(ToAuthenticateUserService);
  if (toAuthenticateUserService.IsLoggedIn()) {
    return true;
  } else {
    alert('Hell No Ur Not Sighed In With Us');
    return false;
  }

  // return true;
};
