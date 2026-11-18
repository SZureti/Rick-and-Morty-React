# Rick and Morty React

**Live Demo** https://szureti.github.io/Rick-and-Morty-React/

## See [Progress.md](./Progress.md) for the feature checklist.

# Rick and Morty React I

Create a project for the Rick and Morty show. By the end of this assignment your project should meet the following requirements:

- Vite + React Development Environment
- HomePage.jsx, App.jsx, router.jsx
- React Router's browser router (`createBrowserRouter`) connected to App.jsx
- HomePage.jsx should render a quick "Attention Getter" to get people to watch the show at [http://localhost:5173/](http://localhost:5173/)

## Setup

```sh
npm create vite@latest rick-and-morty -- --template react
cd rick-and-morty
npm install
npm install react-router
npm run dev
```

React Router 8 needs Node 22.22+ (the devcontainer uses Node 24). It is one package, `react-router`: `react-router-dom` stopped at version 7, so skip tutorials that install it or use `<BrowserRouter>`, `<Switch>`, `useHistory` or `history.push`.

- `RouterProvider` comes from `'react-router/dom'`; everything else (`createBrowserRouter`, `Outlet`, `Link`, the hooks) comes from `'react-router'`.
- In `router.jsx`, create the router with `createBrowserRouter`: `App` is the route for `/`, and `HomePage` is one of its `children`.
- `App.jsx` renders an `<Outlet />` where the current page should appear.
- In `main.jsx`, render `<RouterProvider router={router} />` instead of `<App />`.

# Rick and Morty React II

By the end of this assignment your project should meet the following requirements:

- AboutPage.jsx should render general about me information about the show. (Maybe use an API to render this information?)
- CharactersPage.jsx should render a Card BootStrap Component (displaying image and information of said character) for every character within the [Rick and Morty API](https://rickandmortyapi.com/)
  - Maybe use useState, useEffect, axios, async, map, conditional rendering?
- Routes for each page mentioned above within React Router's browser router (`children` of App in `router.jsx`)
- NotFound.jsx should render an error message letting the user know this page does not exist
- A catch-all route (`path: '*'`) to render NotFound.jsx for any URL that doesn't match a page (an `errorElement` is different: it shows when a page throws an error)
- NavBar.jsx should allow users to navigate your project
- Testing with Cypress to ensure all requirements are being met
- Styling from React BootStrap or Tailwind.css
- Have fun!

## Setup

Keep working in your project from Rick and Morty React (Vite + `react-router`). From the project folder, install what this part needs:

```sh
npm install react-bootstrap bootstrap axios
npm install -D cypress
```

- React Bootstrap: add `import 'bootstrap/dist/css/bootstrap.min.css'` to `src/main.jsx`, above `import './index.css'`.
- Tailwind instead (or as well): set it up as in the Tailwind and BootStrap project; if you use both, `src/index.css` needs `@import "tailwindcss" important;` so your Tailwind classes win over Bootstrap's.
- Cypress: start the app with `npm run dev`, then run `npx cypress open` in a second terminal and choose E2E Testing (it creates `cypress.config.js` for you). Set `baseUrl: 'http://localhost:5173'` in its `e2e` section so `cy.visit('/')` works.
- Links in `NavBar.jsx` should be React Router `<Link>`s (from `'react-router'`), not `<a href>`s, so the page doesn't reload.

> [!WARNING]
> The Rick and Morty API uses **pagination**.
>
> Pagination means the API does **not** return every matching item in one giant response. Instead, it breaks the data into smaller “pages” of results.
>
> For example, if there are hundreds of characters, the first API request may only return the first page. To get more results, you need to request the next page.
>
> Most list responses from the Rick and Morty API include an `info` object:
>
> ```json
> {
>   "info": {
>     "count": 826,
>     "pages": 42,
>     "next": "https://rickandmortyapi.com/api/character?page=2",
>     "prev": null
>   },
>   "results": []
> }
> ```
>
> The `info` object contains:
>
> - `count`: the total number of matching items across **all pages**
> - `pages`: the total number of pages available
> - `next`: the URL for the next page of results, or `null` if there is no next page
> - `prev`: the URL for the previous page of results, or `null` if there is no previous page
>
> The actual data you want is usually inside the `results` array.
>
> For this assignment, do not assume that one API request gives you every result. Check the `info` object and use `next`, `prev`, or the `page` query parameter when you need additional pages.

# Rick and Morty React III

By the end of this assignment your project should meet the following requirements:

- CharacterDetailsPage.jsx should display all the information pertaining to a single character. Ensure to utilize useParams.
- A dynamic route that will display CharacterDetailsPage.jsx
- Implement a functionality for useNavigate through your program

## Hints

- Keep working in your Rick and Morty React II project.
- The dynamic route is another child of App in `router.jsx`, for example `{ path: 'characters/:id', element: <CharacterDetailsPage /> }`. Inside the page, `useParams()` gives you `{ id }`, and `https://rickandmortyapi.com/api/character/${id}` returns that one character.
- Import `useParams` and `useNavigate` from `'react-router'`. `useNavigate` replaced the old `useHistory` / `history.push`, so skip tutorials that use those.

# Rick and Morty React IV

By the end of this assignment your project should meet the following requirements:

- FavoriteCharactersPage.jsx should display all characters marked as favorite by the user
- Route to render FavoriteCharactersPage.jsx as a child of App.jsx
- Users should be able to add or remove Characters from their Favorites and they can't have more than 4 favorite characters at a time
- Ensure to utilize ReactBootStrap and Tailwind.css for styling
- Add a Cypress test suite that will reinforce all the requirements above.
- Have fun!

## Hints

- Keep working in your Rick and Morty React III project.
- Child routes can't receive props from App, so keep the favorites in App's state and share them with `<Outlet context={...} />`; any page or component under the Outlet reads them with `useOutletContext()` (from `'react-router'`).
- Using React Bootstrap and Tailwind together: install both (`npm install react-bootstrap bootstrap tailwindcss @tailwindcss/vite`), add `tailwindcss()` to the plugins in `vite.config.js`, import `'bootstrap/dist/css/bootstrap.min.css'` above `'./index.css'` in `src/main.jsx`, and make `src/index.css` start with `@import "tailwindcss" important;`. Without `important`, Bootstrap's CSS overrides your Tailwind classes.
