module.exports = {
    siteMetadata: {
        title: 'Aydar the Dev Blog',
        description: 'This blog will document my journey to become a programmer'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js')
                }
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts'
            }
        }
    ]
}