export const production = false;
export const name = 'Anurag Singh';
export const email ='anuragsngh462@gmail.com';
export const CURRENT_DESIGNATION = 'Software Engineer';
export const CURRENT_COMPANY_NAME = 'Caritor solutions India Ptv Ltd';
export const CURRENT_CITY = 'Bangalore';
export const PROFILE = ['Developer', 'Freelancer'];
export const MOBILE = 7001208860;
export const WHATSAPP_NUMBER = 7001208860;
export const TOTAL_EXPERIENCE = 3;
export const DATE_OF_BIRTH = '31 July 1995';
export const HIGHEST_QUALIFICATION = 'B.Tech (CS)';
export const AGE = 25;
export const WEBSITE_DOMAIN = 'www.wraxius-anurag.com';
export const FREELANCING_AVAILABILITY = true;
export const GYAN_KI_BAAT = { text: 'Save a tree', logo: 'fas fa-tree', color: '#33781d' };

export const socialLinks = [
    
    { title: 'LinkedIn', link: 'https://www.linkedin.com/in/anurag-singh-a45372120/', className: 'fab fa-linkedin-in', color: '#0A66C2', newTab: true },
    { title: 'Skype', link: 'https://join.skype.com/invite/lojdVftnK6Q2', className: 'fab fa-skype', color: '#0079C0', newTab: true },
    { title: 'Gmail', link: `mailto:${email}`, className: 'fab fa-google', color: '#EA4335' },
    { title: 'WhatsApp', link: `https://wa.me/${ WHATSAPP_NUMBER }`, className: 'fab fa-whatsapp', color: '#01e675' },
    { title: 'Mobile', link: `tel:${MOBILE}`, className: 'fas fa-phone-alt', color: '#0A66C2' },

];

export const aboutMe = `
My Name is ${ name }, currently working for ${ CURRENT_COMPANY_NAME } in ${ CURRENT_CITY },
I have more than ${ TOTAL_EXPERIENCE }+ years of experience in IT Development.
Started as a backend developer in NodeJs (SailsJs and Express Framework) in May 2018 and also started working as both backend and frontend (React Js and Angular 6+).
I also have knowledge of MySQL and MongoDB Databases.
Currently I am working on a Project which is related to Cost Control Management for (Libyan Client Oil Company) which is being developed on NodeJs and React Js.
`;

export const skillsInfo = [
    {key: '0', value: 'Professional Skills:-'},
    {key: '1', value: '- One to One Interaction with Client'},
    {key: '2', value: '- Worked on AWS Services (DynamoDB, Lambda Functions, CloudWatch, S3 Bucket, SNS Service, EC2)'},
    {key: '3', value: '- Handling Projects by Self'},
    {key: '4', value: '- Worked on JavaScript, NodeJs , React JS, Angular 6+ , MySQL , MongoDB, HTML5 , CSS3 , Bootstrap'},
    {key: '5', value: '- Worked on Various Projects like Hospital Appointment System , INC (Indian National Congress) , Property Investment, Feedback System , Chatbot Backend using webSocket Client.'},
];

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
    { keyName: 'BirthDay', value: DATE_OF_BIRTH },
    { keyName: 'Age', value: AGE },
    { keyName: 'Website', value: WEBSITE_DOMAIN },
    { keyName: 'Degree', value: HIGHEST_QUALIFICATION },
    { keyName: 'Phone', value: `+91 ${MOBILE}`},
    { keyName: 'Email', value: email },
    { keyName: 'City', value: CURRENT_CITY },
    { keyName: 'Freelance', value: FREELANCING_AVAILABILITY ? 'Available' : 'Not Available'},
];

export const PROJECT_LIST = [
    {
        company_name: 'Caritor Solutions India Pvt Ltd',
        timeFrame: {
            from: 'November 2020',
            to: 'Current',
            period: ''
        },
        place: 'Bangalore',
        color: '#20C2F3',
        projects: [
            {
                title: 'Akakus Oil Cost Control Application',
                description: `Akakus Oil is crude oil extraction company in Libya`,
                designation: 'Software Engineer',
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
        timeFrame: {
            from: 'May 2018',
            to: 'September 2020',
            period: '2.4 Years'
        },
        place: 'Bangalore',
        color: '#20C2F3',
        projects: [
            {
                title: 'Real Estate (PropCatalyst - Finance Domain)',
                description: `PropCatalyst is an online platform that provides fractional ownership
                of pre-leased commercial properties to prospective investors.
                Through the platform, investors have the opportunity to invest in real estate.`,
                designation: 'Software Engineer',
                responsibility: [
                    'Development of business logic using ReactJs.',
                    'State management using Redux.',
                    'Creating template using HTML, CSS and Bootstrap',
                    'Development of backend structure using Sails Js and MySQL'
                ]
            },
            {
                title: 'Manipal Hospital',
                description: `Manipal Hospital is a group of hospital in India for which an appointment system was created`,
                designation: 'Software Engineer',
                responsibility: [
                    'Development of business logic using Angular 2+',
                    'Creating template using HTML, CSS and Bootstrap.',
                    'Development of backend structure using Sails Js and MySQL'
                ]
            },
            {
                title: 'Religare Health Insurance',
                description: `Religare Health Insurance Company Limited is an Indian health insurance firm.`,
                designation: 'Software Engineer',
                responsibility: [
                    'Development of business logic using Angular 2+',
                    'Creating template using HTML, CSS and Bootstrap.',
                    'Development of backend structure using Sails Js and MySQL'
                ]
            }
        ]
    }
];

// export const RESUME_URL = 'https://propcatalyst-dev.s3.ap-south-1.amazonaws.com/propcatalyst-assets/Abhinav%20Anand%20CV.pdf';

export const API_DATA = {
    contactUsApiURL: 'http://localhost:3000/contact'
};
