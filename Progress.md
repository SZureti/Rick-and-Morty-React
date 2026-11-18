# Rick and Morty React Progress

Stack: Vite 8 + React 19 + React Router 8, React Bootstrap, Cypress.

## Part I: Rick and Morty React I

- [x] Vite + React development environment
- [x] `HomePage.jsx`, `App.jsx`, `router.jsx`
- [x] `createBrowserRouter` connected to `App.jsx` (App is the `/` route, pages are its `children`)
- [x] `App.jsx` renders an `<Outlet />`
- [x] `main.jsx` renders `<RouterProvider router={router} />`
- [x] HomePage "attention getter" to watch the show

## Part II: Rick and Morty React II

- [x] `AboutPage.jsx` with general info about the show
- [x] About page pulls live stats from the API (character / location / episode counts)
- [x] `CharactersPage.jsx` renders a Bootstrap `Card` per character from the Rick and Morty API
- [x] Use `useState`, `useEffect`, `axios`, `async`, `map`, conditional rendering
- [x] Routes for each page as `children` of App in `router.jsx`
- [x] `NotFound.jsx` error message
- [x] Catch-all route (`path: "*"`) renders `NotFound`
- [x] `NavBar.jsx` navigation using React Router `<Link>`
- [x] Cypress testing
- [x] React Bootstrap styling + custom theme (`--rm-*` CSS variables)
- [x] Pagination (Previous / Next using the API `info` object)
- [x] Search box: server-side `?name=` filter via a submit form

## Part III: Rick and Morty React III

- [x] `CharacterDetail.jsx` shows a single character (uses `useParams`)
- [x] Dynamic route `characters/:id`
- [x] `useNavigate` implemented: back button calls `navigate(-1)`

## Part IV: Rick and Morty React IV

- [x] `FavoriteCharactersPage.jsx` displays all favorited characters
- [x] Route for the favorites page as a child of App
- [x] Add / remove favorites, capped at a maximum of 4
- [x] Favorites held in `App` state, shared via `<Outlet context>` + `useOutletContext`
- [x] React Bootstrap styling
- [x] Cypress test suite covering add, display, remove, and the 4-cap

## Extras (beyond the requirements)

- [x] Watch-counter on HomePage (`useOutletContext`; persists across navigation)
- [x] Favorite button on the character detail page too (kept in sync via shared state)
- [x] Live favorites count in the navbar (passed to `NavBar` as a prop)
- [x] Darker navbar theme (`--rm-navbar`, below the page background)
- [x] `errorElement` error page (`ErrorPage.jsx`) — distinct from the `*` NotFound route
- [x] 12 passing Cypress tests (`npx cypress run`)

## Unfinished Additions / optional

- [ ] Improve the Bootstrap styling
- [ ] Add a Review Page and write a review of the show
- [ ] Deploy to GitHub Pages
