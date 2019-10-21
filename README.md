# Microfrontend-Demo

## Install CLIs

```
npm install -g @angular/cli
npm install -g @nrwl/cli
```

## Init nx-workspace:

```
npm init nx-workspace microfrontends-demo
```

## Add to Github

```
git init
git remote add origin https://github.com/<username>/<repo-name>.git (Check if everything worked with git remote -v)
git add -all
git commit -m "initial commit"
git push origin master
```

## Go to Workspace

```
cd microfrontends-demo
```

## add additional capabilities to nx

```
ng add @nrwl/angular --defaults
ng add @angular/elements
ng add @nrwl/nest
```

## generate microfrontend-apps

```
ng g @nrwl/angular:application app-shell
ng g @nrwl/angular:application microfrontend1
ng g @nrwl/angular:application microfrontend2
```

Info: This would also work the same way with React, Vue, Svelte, ...

## add ngx-build-plus for microfrontends

```
ng add ngx-build-plus --project microfrontend1
ng add ngx-build-plus --project microfrontend2
```

## add common design-system

```
ng add @nrwl/web
ng g @nrwl/web:lib ui

// this library can be imported into the single microfrontend-apps via:
import '@microfrontends-demo/ui';
```

## start microfrontends and shell

```
ng serve --project microfrontend1 --single-bundle --port 4231
ng serve --project microfrontend1 --single-bundle --port 4232
ng serve --project app-shell
```
