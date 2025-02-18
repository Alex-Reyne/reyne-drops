// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const dynamic = 'force-dynamic'

export default function handler(req, res) {
  res.status(200).json({
    links: [
      {
        id: 1,
        name: 'Dev Portfolio',
        url: 'https://alexreyne.me/',
        icon: '/portfolio-icon.png',
        image: '/dev-portfolio-image.png',
      },
      {
        id: 2,
        name: 'Design Portfolio',
        url: 'https://www.creativereyne.ca/',
        icon: '/portfolio-icon.png',
        image: '/design-portfolio-image.png',
      },
      {
        id: 3,
        name: 'Github',
        url: 'https://github.com/alex-reyne',
        icon: '/github-icon.png',
        image: '/github-image.png',
      },
      {
        id: 4,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/alexanderreyne/',
        icon: '/linkedin-icon.png',
        image: '/linkedin-image.png',
      },
      {
        id: 5,
        name: 'My Resume',
        url: 'https://drive.google.com/file/d/1rvrY8h93EFONuJnC_6eURYJscZSnOp1V/view',
        icon: '/resume-icon.png',
        image: '/resume-image.png',
      },
      {
        id: 6,
        name: 'Dev/Design ig',
        url: 'https://www.instagram.com/AlexReyne.me/',
        icon: '/instagram-icon.png',
        image: '/dev-design-instagram-image.png',
      },
      {
        id: 7,
        name: 'Photography ig',
        url: 'https://www.instagram.com/alexreyne.ph/',
        icon: '/instagram-icon.png',
        image: '/photography-instagram-image.png',
      },
      {
        id: 8,
        name: 'Mini Painting ig',
        url: 'https://www.instagram.com/reyne.of.color/',
        icon: '/instagram-icon.png',
        image: '/mini-painting-instagram-image.png',
      },
    ],
  })
}
