export interface Event {
  coverImage: string;
  description: string;
  endTime: string;
  slug: string;
  startTime: string;
  title: string;
}

export interface Page {
  content: string;
  slug: string;
  title: string;
}

export interface Person {
  name: string;
  slug: string;
}

export interface Sermon {
  coverImage: string;
  date: string;
  slug: string;
  teacher: Person;
  text: string;
  title: string;
}

export interface List<T> {
  [index: number]: T;
  length: number;
}

/**
 * Gives the fullest overview of what is available via the falcor API.
 */
export interface Graph {
  events: {
    bySlug: { [slug: string]: Event },
    featured: List<Event>,
    upcoming: List<Event>,
  };

  pages: {
    bySlug: { [slug: string]: Page },
  };

  people: {
    byId: { [id: string]: Person },
  };

  sermons: {
    bySlug: { [slug: string]: Sermon },
    recent: List<Sermon>,
  };
}
