const user = [
    {
        path: '/',
        name: 'user-router',
        component: () => import ("../views/users/Index.vue"),
        meta: { requiresAuth: true },
        children:[
            {
                path: 'authors',
                name: 'authors-list',
                component: () => import("../views/users/Author/Author.vue"),
            },
        ]
    }
];

export default user;