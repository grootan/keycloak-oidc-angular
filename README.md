# Keycloak - Implicit Flow using AngularJS

This repo contains AngularJS example app that demonstrate the various OpenId Connect's Implicit flow.

## Setting up OIDC configuration

1. To add your keycloak configuration details, Goto `/src/app`
    * In "login" folder locate `login.component.ts` and update keycloak configuration
    * In "auth" folder locate `auth.component.ts` and update keycloak configuration (same as login.component.ts)

### Update your configuration as below mentioned and replace the placeholders

```javascript
const keycloakConfig = {
    url: "https://{hostname}/auth",
    realm: "keycloak-tenant-id",
    clientId: "keycloak-client-id"
}
```

## Instructions

1. Clone the Repository
2. RUN `npm install` and wait for the completion of installation on `node_modules`
3. Once `node_modules` are installed and RUN `npm run start` to start execution of `ng serve`. Because `ng serve` command builds your app and serves it locally.
4. Once the app is compiled successfully, Go to browser and open `http://localhost:4200` you will be automatically redirected to `http://localhost:4200/auth`
5. You should configure your OIDC information in ```src/app/login/login.component.ts``` and ```src/app/auth/auth.component.ts``` paths.
6. Make sure you replace `keycloak-tenant-id` with your TenantID and `keycloak-client-id` with your ClientID.
7. Change `{hostname}` to match your keycloak domain.

**Note:**

1. Before getting started to run angular app, Please make sure the port number `4200` is available. Because `4200` is the default port for angular app.

## Approach to work with the implicit flow

1. Click on "login" button
2. You will be redirected to "Keycloak" user authentication screen
3. Complete all authentication steps
4. You will receive Token based on the response type which you configured

## What can I use these for

OpenId Connect is a great way to add user authentication to your application where you are depending on another party to manage the user identities.

In this case Keycloak will manage the identity of your users making it faster to get up and running.

## Single Sign On (SSO)

By implementing OpenId Connect via Keycloak you are creating a session which can be used to single sign on from your custom app into other apps that your users may have access to via the Keycloak portal

If you have any queries / you notice any issues don't hesitate to raise issue.
