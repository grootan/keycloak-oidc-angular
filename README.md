# Keycloak - Implicit Flow using Angular

This repository contains a Angular example application that demonstrates the implicit flow for OpenID Connect's.

## Setting up OIDC configuration

1. To add information about your keycloak configuration, go to `/src/app`
    * Locate `login.component.ts` in the "login" folder and upgrade the keycloak configurations.
    * Locate `auth.component.ts` in the "auth" folder and upgrade the keycloak configurations (same as login.component.ts)

### Update the configuration as mentioned below and replace the placeholders

```javascript
const keycloakConfig = {
    url: "https://{hostname}/auth",
    realm: "keycloak-tenant-id",
    clientId: "keycloak-client-id"
}
```

## Instructions

1. Clone/Download the Repository
2. RUN `npm install` and wait for the completion of installation on `node_modules`
3. Once `node_modules` are installed, RUN `npm run start` to start execution of `ng serve`. Because `ng serve` command builds your application and serves it locally.
4. If the app has been compiled successfully, go to browser and open `http://localhost:4200`, you will be automatically redirected to `http://localhost:4200/auth`
5. Configure the OIDC details in ```src/app/login/login.component.ts``` and ```src/app/auth/auth.component.ts``` files.
6. Make sure that you replace the `keycloak-tenant-id` with your TenantID and `keycloak-client-id` with your ClientID.
7. Modify `{hostname}` to align your keycloak domain.

**Note:**

1. Before starting to run the angular application, please make sure that port number 4200 is available. Since 4200 is the default angular app port.

## Approach to work with the implicit flow

1. Click on "login" button.
2. You will be redirected to the user authentication screen of "Keycloak".
3. Complete all of the authentication steps.
4. Depending on the response type you configured, you will receive a token.

## What can I use these for

OpenID Connect is a perfect way to incorporate user authentication to your application, where you are relying on another party to handle user identity.

In this situation, Keycloak handles the identity of the users, allowing it faster to get up and running.

## Single Sign On (SSO)

By integrating OpenID Connect via Keycloak, you are building a session that can be used to single sign-on from your custom app to other applications that your users can access via the Keycloak portal.

If you have any queries/you find any problems, please don't hesitate to raise an issue.
