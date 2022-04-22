# getRANTR

As used in Todd Gardner's [Frontend Masters Workshop](https://frontendmasters.com/courses/debugging-javascript/).

Social connections are overrated-they only lead to trouble, pain, and lawsuits. Modern social networks have given rise to trolls, fake news, and mansplaining.

Introducing getRANTR, the revolutionary anti-social distributed network. getRANTR gives you all the obsessive status updating of a social network, with non of the misunderstandings and hurt feelings. With getRANTR, no one can see you RANT.

## Getting Started

getRANTR is a distributed network. This means you download the code and run it yourself! No more annoying "public websites" or "cloud infrastructure". getRANTR includes all the fun of running your own technology stack.

### Software Dependencies

getRANTR is built on NodeJS. If you don't have it already, you can download the latest runtime from the [NodeJS website](https://nodejs.org/en/).

You may also need the following tools to enhance or debug getRANTR:

- [VS Code](https://code.visualstudio.com/) or another JavaScript-aware text editor
- [Chrome](https://www.google.com/chrome/) web browser

**Optional**
- [Charles](https://www.charlesproxy.com/) or [Fiddler](http://www.telerik.com/fiddler) web proxy

### Installation

You'll need to install all the local dependencies, **in the same directory as getRANTR** for running getRANTR:

```
npm install
```

### Running getRANTR

After setting everything up and installing the dependencies, you can run getRANTR by:

```
npm start
```

This will run getRANTR at `http://www.getRANTR.com:9000/` and will setup to automatically reload if any of the source files are changed.

### Repository Structure

```
/build          Automation and build tasks
/data           Data location for getRANTR users
/exercises      Guides and help for workshop exercises
/node_modules   There be dragons here
/src            Source code
  /controllers  Server API actions
  /public       Client-side application (this is probably what you are looking for)
/test           Source code tests
```

### Impersonating Users

There are three example users loaded into the system. You can impersonate them with the following commands, after closing the node session (`control` and `C` on Mac):

```
node import 1   # Will impersonate Todd's default account
node import 2   # Will impersonate the Keystone user account
node import 3   # Will impersonate Todd's alt account
```

Todd's default account is loaded automatically when you install.

Happy Ranting!
# getRantr
