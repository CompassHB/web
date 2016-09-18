import fetch from 'node-fetch';
import { assert } from './debug';

export interface Event {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  _EventStartDate: string;
  _EventEndDate: string;
  _embedded: {
    ['wp:featuredmedia']: Array<{ source_url: string }>,
  };
}

export interface Page {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
}

export interface Sermon {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded: {
    ['wp:featuredmedia']: Array<{ source_url: string }>,
    author: Array<{ name: string }>,
  };
  acf: {
    text: string,
  };
}

export interface User {
  id: number;
  name: string;
  slug: string;
}

export class Site {
  constructor(private baseUrl: string, private id = 0) { }

  private async head(resource: string) {
    return fetch(this.baseUrl + resource, { method: 'head' });
  }

  private async getJson(resource: string) {
    const response: Response = await fetch(this.baseUrl + resource);
    const json: any = await response.json();

    if (response.status >= 400) {
      throw new Error(json.message);
    }

    return json;
  }

  async getLogo() {
    const response = await fetch('https://api.compasshb.com/wp-json/compasshb/v1/site_logo/' + this.id);
    const json = await response.json();

    if (response.status >= 400) {
      throw new Error(json.message);
    }

    return json;
  }

  async getEventBySlug(slug: string): Promise<Event> {
    return assert(`No event found with slug ${slug}`, (await this.getJson(`/tribe_events?_embed&slug=${slug}`))[0]);
  }

  async getFeaturedEvents({offset = 0, limit = 100}): Promise<Array<Event>> {
    return this.getJson(`/tribe_events?_embed&filter[tribe_events_cat]=Show+on+Homepage&offset=${offset}&per_page=${limit}`);
  }

  async getFeaturedEventsCount(): Promise<number> {
    const response = await this.head(`/tribe_events?filter[tribe_events_cat]=Show+on+Homepage`);

    return parseInt(response.headers.get('X-WP-Total'), 10);
  }

  async getUpcomingEvents({offset = 0, limit = 100}): Promise<Array<Event>> {
    return this.getJson(`/tribe_events?_embed&offset=${offset}&per_page=${limit}`);
  }

  async getUpcomingEventsCount(): Promise<number> {
    const response = await this.head(`/tribe_events`);

    return parseInt(response.headers.get('X-WP-Total'), 10);
  }

  async getMedia(id: number) {
    return this.getJson(`/media/${id}`);
  }

  async getPageBySlug(slug: string): Promise<Page> {
    return assert(`No page found with slug ${slug}`, (await this.getJson(`/pages?_embed&slug=${slug}`))[0]);
  }

  async getSermonBySlug(slug: string): Promise<Sermon> {
    return assert(`No sermon found with slug ${slug}`, (await this.getJson(`/posts?_embed&slug=${slug}`))[0]);
  }

  async getSermons({offset = 0, limit = 100}): Promise<Array<Sermon>> {
    return this.getJson(`/posts?categories=1&offset=${offset}&per_page=${limit}`);
  }

  async getSermonsCount(): Promise<number> {
    const response = await this.head(`/posts?categories=1`);

    return parseInt(response.headers.get('X-WP-Total'), 10);
  }

  async getUser(id: number): Promise<User> {
    return this.getJson(`/users/${id}`);
  }
}
