export const EMAILS = [
  {
    id: '1',
    name: 'John Smith',
    avatar: 'https://mighty.tools/mockmind-api/content/human/65.jpg',
    marker: 'importante',
    subject: 'What is Lorem Ipsum',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    star: false,
    date: '2 de Nov.',
  },
  {
    id: '2',
    name: 'Teste',
    avatar: 'https://mighty.tools/mockmind-api/content/human/44.jpg',
    subject: 'Why do we use it',
    message:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
    star: true,
    date: '3 de Nov.',
  },
  {
    id: '3',
    name: 'Teste 2',
    avatar: 'https://mighty.tools/mockmind-api/content/human/57.jpg',
    subject: 'Where does it come from',
    message: 'Contrary to popular belief Lorem Ipsum is not simply random text',
    star: false,
    date: '3 de Nov.',
  },
]

export type EmailDataProps = (typeof EMAILS)[0]
