import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceTypeService {
  // User agent
  userAgent: string =
    navigator.userAgent ||
    navigator.vendor ||
    (window as any).opera ||
    undefined;

  // Device typology

  isMobileDevice = (): boolean => {
    const regexs = [
      /(Android)(.+)(Mobile)/i,
      /BlackBerry/i,
      /iPhone|iPod/i,
      /Opera Mini/i,
      /IEMobile/i,
    ];
    return regexs.some((b) => this.userAgent.match(b));
  };

  isTabletDevice = (): boolean => {
    const regex =
      /(ipad|tablet|(android(?!.mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.(IP|AP|WP))))/;
    return regex.test(this.userAgent.toLowerCase());
  };

  isDesktopDevice = (): boolean =>
    !this.isMobileDevice() && !this.isTabletDevice();

  isDesktop = this.isDesktopDevice();
  isMobile = this.isMobileDevice();
  isTablet = this.isTabletDevice();
}
