// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    links: [
      { id: 1, name: 'Dev Portfolio', url: 'https://alexreyne.me/' },
      {
        id: 2,
        name: 'Design Portfolio',
        url: 'https://www.creativereyne.ca/',
      },
      { id: 3, name: 'Github', url: 'https://github.com/alex-reyne' },
      {
        id: 4,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/alexanderreyne/',
      },
      {
        id: 5,
        name: 'My Resume',
        url: 'https://drive.google.com/file/d/1rvrY8h93EFONuJnC_6eURYJscZSnOp1V/view',
      },
      {
        id: 6,
        name: 'Dev/Design ig',
        url: 'https://www.instagram.com/AlexReyne.me/',
      },
      {
        id: 7,
        name: 'Photography ig',
        url: 'https://www.instagram.com/alexreyne.ph/',
      },
    ],
  })
}
