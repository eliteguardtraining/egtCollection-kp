# Components

## Images

In the subdirectory called `img`, you will find screenshots of all of the components that EGT reuses in promos.

**NOTE:** This a work in progress, more components will be added soon.

### Naming

The images are named identically to how they are stored in the code - this way we can all refer to things specifically
and using the same terminology; a PackageTable is always a PackageTable and never anything else.

## Flexibility

The EGT stack uses ReactJs to render pages both on a server and in your browser.
The process of rendering these pages is no more than a compilation of a bunch of components,
all of which share some common data, and in some cases have data specific to themselves.

It is probably best to think of components as "templates", they are blank items that render
out whatever we put into them. Some of these components have very flexible functionality -
in some cases they may appear orange, in others black, their layout may change non-trivially,
etc.

Functionality can always be added to components, as long as it makes sense to extend that
component's functionality and not just build a new component from scratch.
