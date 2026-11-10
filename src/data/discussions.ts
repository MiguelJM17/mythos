export type Side = 'freewill' | 'compat' | 'determinism';

export interface Thinker { name: string; work: string; idea: string }
export interface Stance { id: Side; label: string; claim: string; thinkers?: Thinker[] }
export interface Comment { side: Side; author: string; body: string }

export interface Discussion {
  id: string;
  title: string;
  question: string;
  intro: string;
  relatedSlug?: string;
  stances: Stance[];
  comments: Comment[];
  /** Shows how a returned comment looks, without showing its content. */
  returned?: { side: Side; reason: string };
}

export const discussions: Discussion[] = [
  {
    id: 'free-will',
    title: 'Determinism or Free Will?',
    question: 'Are we free if every choice has a cause?',
    intro:
      'If everything you do follows from what came before, from your genes, your upbringing, the last thing someone said to you, is any choice really yours? Pick a side, or stand in the middle.',
    relatedSlug: 'our-lives-bear-our-name',
    stances: [
      {
        id: 'freewill', label: 'Free will', claim: 'Our choices are genuinely open. We could have done otherwise.',
        thinkers: [
          { name: 'Immanuel Kant', work: 'Groundwork of the Metaphysics of Morals, 1785', idea: 'A rational being can only act under the idea of freedom, and morality is impossible without it.' },
          { name: 'Jean-Paul Sartre', work: 'Existentialism Is a Humanism, 1946', idea: 'We are condemned to be free: no fixed human nature chooses for us.' },
          { name: 'Robert Kane', work: 'The Significance of Free Will, 1996', idea: 'Some hard choices are genuinely undetermined, and through them we form who we are.' },
        ],
      },
      {
        id: 'compat', label: 'Compatibilism', claim: 'Choices can have causes and still be ours.',
        thinkers: [
          { name: 'David Hume', work: 'An Enquiry Concerning Human Understanding, 1748', idea: 'Liberty is the opposite of constraint, not of causation: acting as your will directs.' },
          { name: 'P. F. Strawson', work: '“Freedom and Resentment,” 1962', idea: 'Gratitude and resentment are part of human life and don’t wait for metaphysics to settle.' },
          { name: 'Harry Frankfurt', work: '“Alternate Possibilities and Moral Responsibility,” 1969', idea: 'You can be responsible for an act even if you could not have done otherwise.' },
          { name: 'Daniel Dennett', work: 'Elbow Room, 1984', idea: 'The freedom worth wanting is the capacity to deliberate and respond to reasons.' },
        ],
      },
      {
        id: 'determinism', label: 'Determinism', claim: 'Every choice is fixed by prior causes. Freedom is a feeling.',
        thinkers: [
          { name: 'Baruch Spinoza', work: 'Ethics, 1677', idea: 'We believe we are free because we know our actions but not their causes.' },
          { name: 'Pierre-Simon Laplace', work: 'A Philosophical Essay on Probabilities, 1814', idea: 'An intellect that knew every force and position could predict the whole future.' },
          { name: 'Galen Strawson', work: '“The Impossibility of Moral Responsibility,” 1994', idea: 'To be truly responsible you would have to create yourself, and no one can.' },
          { name: 'Derk Pereboom', work: 'Free Will, Agency, and Meaning in Life, 2014', idea: 'No one deserves blame in the deepest sense, yet love and meaning survive.' },
        ],
      },
    ],
    comments: [
      {
        side: 'freewill',
        author: 'Example reader',
        body: 'When I deliberate, I am not watching a movie of my own decision. Kant said we cannot act except under the idea of freedom, and I think he was right: even the determinist decides to argue for determinism. If the argument persuades me, it is because I weighed it.',
      },
      {
        side: 'freewill',
        author: 'Example reader',
        body: 'Physics is not as settled as hard determinists make it sound. I am not saying randomness is freedom, a coin flip is not a choice. But "every event is fixed by the ones before it" is a premise, not a discovery.',
      },
      {
        side: 'compat',
        author: 'Example reader',
        body: 'Asking whether the will is caused is the wrong question. The question is whether it is caused by me: by my reasons, by what I care about. Frankfurt’s cases show we hold people responsible even when they could not have done otherwise.',
      },
      {
        side: 'compat',
        author: 'Example reader',
        body: 'This is the move in the Issue I paper that convinced me: every excuse we accept works by showing that an act skipped deliberation, never by showing that it had causes. That is a test you can use in court without solving metaphysics first.',
      },
      {
        side: 'determinism',
        author: 'Example reader',
        body: 'Nobody chose their genes, their parents or the neighborhood they grew up in, and those things shape how well we weigh reasons in the first place. Spinoza put it best: we think we are free because we know our actions and not their causes.',
      },
      {
        side: 'determinism',
        author: 'Example reader',
        body: 'Determinism does not make life meaningless. Pereboom argues we can keep love, gratitude and even reproach, and drop only the idea that people deserve to suffer. Honestly, that sounds like a kinder justice system, not a colder one.',
      },
    ],
    returned: {
      side: 'compat',
      reason: 'It attacked another reader instead of answering their argument. The writer was told why and invited to rewrite it.',
    },
  },
];

export const getDiscussion = (id: string) => discussions.find((d) => d.id === id);
