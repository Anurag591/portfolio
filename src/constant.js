export const production = false;
export const name = 'Anurag Singh';
export const email ='anuragsngh462@gmail.com';
export const CURRENT_DESIGNATION = 'Software Engineer';
export const PROFILE = ['Developer', 'Freelancer', 'Tester'];
export const MOBILE = 7001208860;
export const WHATSAPP_NUMBER = 7001208860;
export const socialLinks = [
    
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/anurag-singh-a45372120/', className: 'fab fa-linkedin-in', color: '#0A66C2', newTab: true },
    { title: 'Skype', link: 'https://join.skype.com/invite/lojdVftnK6Q2', className: 'fab fa-skype', color: '#0079C0', newTab: true },
    { title: 'Gmail', link: `mailto:${email}`, className: 'fab fa-google', color: '#EA4335' },
    { title: 'WhatsApp', link: `https://wa.me/${ WHATSAPP_NUMBER }`, className: 'fab fa-whatsapp', color: '#01e675' },
    { title: 'Mobile', link: `tel:${MOBILE}`, className: 'fas fa-phone-alt', color: '#0A66C2' },

];

export const aboutMe = `
    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
    Quia fugiat sit in iste officiis commodi quidem hic quas.
`;

export const programmingSkills = [
    { skillName: 'html 5', rating: '80%' },
    { skillName: 'css 3', rating: '75%' },
    { skillName: 'javascript (ES8)', rating: '90%' },
    { skillName: 'React.Js', rating: '80%' },
    { skillName: 'redux', rating: '75%' },
    { skillName: 'typescript', rating: '85%' },
    { skillName: 'Angular 2', rating: '70%', sup: '+' },
    { skillName: 'Node.Js', rating: '80%' },
    { skillName: 'Express', rating: '80%' },
    { skillName: 'SailsJs', rating: '80%' },
];

export const technicalSkills =[
    { skillName: 'Agile Methodology', rating: '90%' },
    // { skillName: 'Jira', rating: '90%' },
    { skillName: 'Git', rating: '95%' },
    // { skillName: 'Webpack', rating: '75%' },
    { skillName: 'Vs Code', rating: '90%' },
    { skillName: 'Sublime Text', rating: '90%' },
];

export const AboutInfo = [
    {keyName: 'BirthDay', value: '31 July 1995'},
    {keyName: 'Age', value: '25'},
    {keyName: 'Website', value: 'www.anuragsingh.com'},
    {keyName: 'Degree', value: 'B.Tech (CS)'},
    {keyName: 'Phone', value: '+91 7001208860'},
    {keyName: 'Email', value: 'anuragsngh462@gmail.com'},
    {keyName: 'City', value: 'Bangalore'},
    {keyName: 'Freelance', value: 'Available'},
];

export const PROJECT_LIST = [
    {
        company_name: 'Caritor Solutions India Pvt Ltd',
        projects: [
            {
                title: 'Akakus Oil Cost Control Application',
                description: `Religare Health Insurance Company Limited is an Indian health insurance firm.`,
                duration: 'November 2020 – July 2021 (9 Months)',
                designation: 'Software Engineer',
                place: 'Bangalore',
                responsibility: [
                    'Development of business logic using ReactJs.',
                    'State management using Redux.',
                    'Creating template using HTML, CSS and Bootstrap.',
                    'Developing Backend Using Express'
                ]
            }
        ]
    },
    {
        company_name: 'Mantra Labs Pvt Ltd',
        projects: [
            {
                title: 'Religare Health Insurance',
                description: `Religare Health Insurance Company Limited is an Indian health insurance firm.`,
                duration: 'June 2019 – Jan 2021 (1 Years & 8 Months)',
                designation: 'Software Engineer',
                place: 'Bangalore',
                responsibility: [
                    'Development of business logic using ReactJs.',
                    'State management using Redux.',
                    'Creating template using HTML, CSS and Bootstrap.'
                ]
            },
            {
                title: 'Religare Health Insurance',
                description: `Religare Health Insurance Company Limited is an Indian health insurance firm.`,
                duration: 'June 2019 – Jan 2021 (1 Years & 8 Months)',
                designation: 'Software Engineer',
                place: 'Bangalore',
                responsibility: [
                    'Development of business logic using ReactJs.',
                    'State management using Redux.',
                    'Creating template using HTML, CSS and Bootstrap.'
                ]
            }
        ]
    }
];


export const RESUME_URL = 'https://propcatalyst-dev.s3.ap-south-1.amazonaws.com/propcatalyst-assets/Abhinav%20Anand%20CV.pdf';

export const API_DATA = {
    contactUsApiURL: 'http://localhost:3000/contact'
};
