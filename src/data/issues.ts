export interface Issue {
  id: string;
  numeral: string;
  season?: string;
  theme: string;
  letter: string[];
  current?: boolean;
  upcoming?: boolean;
}

export const issues: Issue[] = [
  {
    id: 'i',
    numeral: 'I',
    theme: 'First Words',
    current: true,
    letter: [
      'Mythos started in a philosophy class at Miami Dade College. We kept writing papers we cared about, and after the grade they had nowhere to go. This journal is where they go now.',
      'A lot of people also write poems, stories and essays that stay in a notebook or a drafts folder and never get read. Literature is the place for that work. If you have something like that, send it.',
    ],
  },
  {
    id: 'ii',
    numeral: 'II',
    theme: 'In Conversation',
    upcoming: true,
    letter: [],
  },
];

export const currentIssue = issues.find((i) => i.current) ?? issues[0];
export const getIssue = (id: string) => issues.find((i) => i.id === id);

export const nextIssue = issues.find((i) => i.upcoming);
