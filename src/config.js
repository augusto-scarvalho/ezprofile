// config.js
module.exports = {
    github: {
        username: 'augusto-scarvalho', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: true, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'augustoscarvalho',
        twitter: '',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '',
        devto: 'augustoscarvalho',
        website: '',
        phone: '',
        email: 'ct.cmmdr@gmail.com'
    },
    skills: [
        'Python',
        'Node.js',
        'JavaScript',
        'React.js',
        'Blockchain',
        'Solidity',
        'NLP',
        'Chatbots',
    ],
    experiences: [
        {
            company: 'Freelancer',
            position: 'DApp Developer',
            from: 'June 2020',
            to: 'Present'
        },
        {
            company: 'Banco do Brasil',
            position: 'Chatbot Developer',
            from: 'April 2017',
            to: 'Present'
        },
        {
            company: 'Banco do Brasil',
            position: 'Social Media Analyst',
            from: 'December 2014',
            to: 'April 2017'
        },
        {
            company: 'Banco do Brasil',
            position: 'Customer Service Analyst',
            from: 'December 2014',
            to: 'September 2014'
        }
    ],
    education: [
        { 
            institution: 'Universidade Paulista',
            degree: 'Bachelor of Computer Science',
            from: '2016',
            to: '2020'
        },
        { 
            institution: 'Universidade de São Paulo',
            degree: 'Licentiate of Physics',
            from: '2009',
            to: 'unfinished',
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'augustoscarvalho',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id
    },
    hotjar: {
        id: '', //  Please remove this and use your own id
        snippetVersion : 6
    },
    themeConfig: {
        default: 'forest',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: true,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
