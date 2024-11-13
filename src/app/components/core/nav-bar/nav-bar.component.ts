import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MsalService, MsalBroadcastService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    private msalService: MsalService,
    private msalBroadcastService: MsalBroadcastService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    // Ensure MSAL is initialized before handling redirects
    await this.msalService.instance.initialize();

    this.msalService.instance.handleRedirectPromise().then(() => {
      this.updateLoginStatus();
      this.cdr.markForCheck(); // Ensure the UI is updated after login/logout
    });

    this.msalBroadcastService.inProgress$
      .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
      )
      .subscribe(() => {
        this.updateLoginStatus();
        this.cdr.markForCheck(); // Ensure the UI is updated after login/logout
      });
  }

  login() {
    this.msalService.loginRedirect();
  }

  logout() {
    this.msalService.logoutRedirect({
      postLogoutRedirectUri: '/'
    });
  }

  updateLoginStatus(): void {
    this.isLoggedIn = this.msalService.instance.getAllAccounts().length > 0;
    console.log('Login status updated:', this.isLoggedIn); // Debugging
  }

  ngOnDestroy(): void {
    this._destroying$.next();
    this._destroying$.complete();
  }
}
