# ngx-leader-line
[Demo and 'Documentation'](https://github.com/anseki/leader-line)

Create SVG arrows and other connections between any HTML or Angular element!

It is an Angular wrapper for this library: [leader-line (GitHub)](https://github.com/anseki/leader-line).

However, it uses [this](https://www.npmjs.com/package/leader-line-new) fork as peerDependency (types and module import)

# Usage

1. Install: `npm i leader-line-new ngx-leader-line`
2. Import the module: `NgxLeaderLineModule`
3. Use: 
```html
<div [ldrConnectTo]="dest"></div>
<div #dest></div>

<!---or if destination is Angular component:--->

<my-component [ldrConnectTo]="dest"></my-component>
<my-another-component #dest="ldrDest" ldrDest></my-another-component>

```

# Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
