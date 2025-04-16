import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

export const techGuard: CanActivateFn = () => {
  const platformId = inject(PLATFORM_ID);
  if (isPlatformBrowser(platformId)) {
    return localStorage.getItem('tech') === 'true';
  }
  return false;
};
