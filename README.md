1. Install CLIs

npm install -g @angular/cli
npm install -g @nrwl/cli

2. Init nx-workspace:

npm init nx-workspace microfrontends-demo

3. Add to Github

git init
git remote add origin https://github.com/<username>/<repo-name>.git (Check if everything worked with git remote -v)
git add -all
git commit -m "initial commit"
git push origin master

4. Go to Workspace

cd microfrontends-demo

5. add additional capabilities to nx

ng add @nrwl/angular --defaults
ng add @angular/elements

6. generate microfrontend-apps

ng g @nrwl/angular:application app-shell
ng g @nrwl/angular:application microfrontend1
ng g @nrwl/angular:application microfrontend2
