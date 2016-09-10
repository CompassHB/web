export interface Belief {
  title: string;
  content: string;
}

export interface Distinctive {
  title: string;
  description: string;
  references: string;
}

export interface Event {
  coverImage: string;
  description: string;
  endTime: string;
  slug: string;
  startTime: string;
  title: string;
}

export interface Ministry {
  sermons: {
    recent: List<Sermon>,
  };
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

export interface Series {
  coverImage: string;
  description: string;
  slug: string;
  title: string;
}

export interface Sermon {
  content: string;
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
  beliefs: {
    bySlug: { [slug: string]: Belief },
    inOrder: List<Belief>,
  };

  distinctives: {
    bySlug: { [slug: string]: Distinctive },
    inOrder: List<Distinctive>,
  };

  events: {
    bySlug: { [slug: string]: Event },
    featured: List<Event>,
    upcoming: List<Event>,
  };

  ministries: {
    bySlug: { [slug: string]: Ministry },
  }

  pages: {
    bySlug: { [slug: string]: Page },
  };

  people: {
    byId: { [id: string]: Person },
  };

  series: {
    bySlug: { [slug: string]: Series },
    recent: List<Series>,
  };

  sermons: {
    bySlug: { [slug: string]: Sermon },
    recent: List<Sermon>,
  };
}
