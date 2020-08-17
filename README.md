## Notes

### Best practices for responsive design

**Using relative units**

Automatically resizes elements depending on the screens they're on. Examples are %, em, rem, vh (viewport height), vw (viewport width)

**Media queries**

Material UI has a great media query system that uses the React hook API. Can use in JSS styles and within javascript itself.

**Grid system**

Standardizes alignment and is fully responsive, allowing for complex, professional responsive design. Use whether you use Material UI's Grid components or in CSS itself

**Testing, testing, testing**

Thorough testing is a must!

### Goals (without exception!)

- Must look perfect on ALL screen sizes
- Orientation independent
- Resizable

### Material-UI documentation on responsiveness

**Material-UI > Guides > Responsive UI**

The elements/concepts that go into responsiveness are listed on this page:

- Grid
- Container
- Breakpoints
- useMediaQuery
- Hidden

[Breakpoints](https://material-ui.com/customization/breakpoints/) go hand in hand with media queries to determine when a certain style should be applied.
