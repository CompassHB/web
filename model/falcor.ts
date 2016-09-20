export interface Belief {
  title?: string;
  content?: string;
}

export interface Distinctive {
  title?: string;
  description?: string;
  references?: string;
}

export interface Event {
  coverImage?: string;
  description?: string;
  endTime?: string;
  slug?: string;
  startTime?: string;
  title?: string;
}

export interface Ministry {
  sermons?: {
    recent?: List<Sermon>,
  };
}

export interface Page {
  content?: string;
  slug?: string;
  title?: string;
}

export interface Passage {
  audio?: string;
  id?: number;
  title?: string;
  slug?: string;
  content?: string;
  overview?: string;
}

export interface Person {
  name?: string;
  slug?: string;
}

export interface Photo {
  url?: string; // url to webpage for viewing the image
  thumbnail?: string; // url to preview image
}

export interface Series {
  coverImage?: string;
  description?: string;
  slug?: string;
  title?: string;
}

export interface Sermon {
  content?: string;
  coverImage?: string;
  date?: string;
  slug?: string;
  teacher?: Person;
  text?: string;
  title?: string;
}

export interface List<T> {
  [index: number]: T;
  length: number;
}

export interface Map<T> {
  [key: string]: T;
}

export interface Image {
  src?: string; // url
  height?: number; // pixels
  width?: number; // pixels
}

/**
 * Gives the fullest overview of what is available via the falcor API.
 */
export interface Graph {
  beliefs?: {
    bySlug?: Map<Belief>,
    inOrder?: List<Belief>,
  };

  distinctives?: {
    bySlug?: Map<Distinctive>,
    inOrder?: List<Distinctive>,
  };

  events?: {
    bySlug?: Map<Event>,
    featured?: List<Event>,
    upcoming?: List<Event>,
  };

  ministries?: {
    bySlug?: Map<Ministry>,
  }

  pages?: {
    bySlug?: Map<Page>,
  };

  passages?: {
    logo?: Image,
    recent?: List<Passage>,
    bySlug?: Map<Passage>,
  };

  people?: {
    byId?: Map<Person>,
  };

  photos?: {
    recent?: List<Photo>,
  };

  series?: {
    bySlug?: Map<Series>,
    recent?: List<Series>,
  };

  sermons?: {
    bySlug?: Map<Sermon>,
    recent?: List<Sermon>,
  };
}
