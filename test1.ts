// Welcome to Codelyzer!
//
// Codelyzer is a tool great for teams and individuals, which helps you
// write consistent code, and discover potential errors.
//
// It processes your TypeScript, templates, template expressions and
// even inline styles! Most rules are inspired by the Angular style guide.
// They have a URL associated with them that is going to link to the exact
// section in angular.io/styleguide.
//
// Give it a try!

@Component({
  selector: 'hero-cmp',
  template: `
    <h1>Hello <span>{{ her.name }}</span></h1>
  `,
  styles: [
    `
    h1 spam {
      color: red;
    }
    `
  ]
})
class Hero {
  private hero: Hero;

  ngOnInit() {
    console.log('Initialized');
  }
}
