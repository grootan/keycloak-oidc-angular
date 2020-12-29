import { Component, OnInit } from '@angular/core';
import * as Keycloak from 'keycloak-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  /* Keycloak Authentication Config */
  authenticateLogin() {
    const keycloakConfig = {
      url: "https://{hostname}/auth",
      realm: "keycloak-tenant-id",
      clientId: "keycloak-client-id"
    }
    let keycloak = Keycloak(keycloakConfig);

    keycloak.init({ onLoad: "login-required", redirectUri: window.location.origin + "/auth" }).success((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
      sessionStorage.setItem("authKey", keycloak.token);
    }).error((error) => {
      console.error("Authenticated failed due to \n" + error);
    });

  }
  /* Keycloak Authentication */

}
