/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run dev`. Additional config files will
| inherit these settings, and can override them when necessary.
|
*/

const data = await fetch('https://jsonplaceholder.typicode.com/todos')
  .then(res => res.json())
  .catch(error => console.error('Error fetching data:', error));

/** @type {import('@maizzle/framework').Config} */
export default {
  plaintext: 'plaintext',
  todos: data,
  build: {
    content: ['emails/**/*.html'],
    static: {
      source: ['images/**/*.*'],
      destination: 'images',
    },
    output: {
      path: 'emails'
    }
  },
}
