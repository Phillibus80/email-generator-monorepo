# email-generator

This monorepo is a collection of email generators:  basic bun implementation, JSX Email, Maizzle, and Nunjucks with html-to-text and Juice.   

You can run `bun run /apps/server/index.ts` to have an all modules generate their own templates and plain text files.  Those files will stored in the /apps/server/dist directory (which is configurable) with each module having its own subdirectory within.

In the case of Maizzle and JSX Email, there dev servers included that will give you a live preview as you make changes, and will compile your templates into html emails and their respective plain text files.  This is in addition to the above command, and will output the files inside the module itself.   To run these, navigate to the module's root folder and run 

###For the Dev/Live Preview Server
```bash
bun run dev
```

###To Compile the templates into the html and plain text files
```bash
bun run build
```

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.10. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
