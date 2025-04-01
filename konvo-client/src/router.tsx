// src/router.tsx
import {
  createRoute,
  createRouter,
  createRootRoute,
  RouterProvider,
} from '@tanstack/react-router'

import App from './App'
import Home from './pages/home'

// Définir la racine de l'app
const rootRoute = createRootRoute({
  component: App,
})

// Définir les routes enfants
const homeRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: Home,
})

// const aboutRoute = createRoute({
//   path: '/about',
//   getParentRoute: () => rootRoute,
//   component: About,
// })

// const notFoundRoute = createRoute({
//   path: '*',
//   getParentRoute: () => rootRoute,
//   component: NotFound,
// })

// Arbre des routes
const routeTree = rootRoute.addChildren([
  homeRoute,
//   aboutRoute,
//   notFoundRoute,
])

export const router = createRouter({ routeTree })

// Facultatif si tu veux avoir l'autocomplétion des routes ailleurs :
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
