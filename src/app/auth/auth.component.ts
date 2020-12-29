import { Component, OnInit } from '@angular/core';
import * as Keycloak from 'keycloak-js';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {

  authUser = "";

  constructor() { }

  ngOnInit(): void {
    /* Keycloak Authentication Config */

    const keycloakConfig = {
      url: "https://{hostname}/auth",
      realm: "keycloak-tenant-id",
      clientId: "keycloak-client-id"
    }
    let keycloak = Keycloak(keycloakConfig);

    keycloak.init({ onLoad: "login-required" }).success((auth) => {
      if (!auth) {
        window.location.reload();
      } else {
        console.log("Authenticated");
      }
      this.parseToken(keycloak.token);
    }).error((error) => {
      console.error("Authenticated failed due to \n" + error);
    });
    /* Keycloak Authentication */
  }

  parseToken(token) {
    if(token === ""){
      return null;
    }
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var authObject = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    this.authUser = JSON.parse(authObject).name;
  };
}
