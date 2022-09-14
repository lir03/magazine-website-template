import { createRouter, createWebHistory } from 'vue-router'
import { projectAuth } from '../firebase/config'
/*eslint-disable*/
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'WelcomePage' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    name: 'WelcomePage',
    component: () => import('../components/pages/landing-pages/WelcomePage.vue'),
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../components/pages/landing-pages/HomePage.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import('../components/nav/ForgotPassword.vue'),
    meta: {
      hideNavbar: true,
    }
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../components/pages/landing-pages/AboutUs.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../components/pages/landing-pages/ContactUs.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/search-page',
    name: 'SearchPage',
    component: () => import('../components/nav/SearchPage.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/section-1',
    name: 'Section1',
    component: () => import('../components/pages/landing-pages/Section-1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/section-2',
    name: 'Section2',
    component: () => import('../components/pages/landing-pages/Section-2.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/section-3',
    name: 'Section3',
    component: () => import('../components/pages/landing-pages/Section-3.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/section-4',
    name: 'Section4',
    component: () => import('../components/pages/landing-pages/Section-4.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s1-article-1-p1',
    name: 'S1Article1P1',
    component: () => import('../components/pages/year/month/section1/Article1-P1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s1-article-1-p2',
    name: 'S1Article1P2',
    component: () => import('../components/pages/year/month/section1/Article1-P2.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s2-article-1-p1',
    name: 'S2Article1P1',
    component: () => import('../components/pages/year/month/section2/Article1-P1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s2-article-1-p2',
    name: 'S2Article1P2',
    component: () => import('../components/pages/year/month/section2/Article1-P2.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s1-article-2-p1',
    name: 'S1Article2P1',
    component: () => import('../components/pages/year/month/section1/Article2-P1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s1-article-2-p2',
    name: 'S1Article2P2',
    component: () => import('../components/pages/year/month/section1/Article2-P2.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s2-article-2-p1',
    name: 'S2Article2P1',
    component: () => import('../components/pages/year/month/section2/Article2-P1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s3-article-1-p1',
    name: 'S3Article1P1',
    component: () => import('../components/pages/year/month/section3/Article1-P1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s3-article-1-p2',
    name: 'S3Article1P2',
    component: () => import('../components/pages/year/month/section3/Article1-P2.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s4-article-1-p1',
    name: 'S4Article1P1',
    component: () => import('../components/pages/year/month/section4/Article1-P1.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/s4-article-1-p2',
    name: 'S4Article1P2',
    component: () => import('../components/pages/year/month/section4/Article1-P2.vue'),
    beforeEnter: requireAuth
  },

  //Page Not Found *Leave at the very bottom*

  {
    path: '/:notFound(.*)',
    component: () => import('../components/nav/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
