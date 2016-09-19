import fetch from 'node-fetch';

export class EsvApi {
  constructor(private key = 'TEST') {}

  private getPassageQueryBaseUrl(passage: string): string {
    return `http://www.esvapi.org/v2/rest/passageQuery?key=${encodeURIComponent(this.key)}&passage=${encodeURIComponent(passage)}`;
  }

  async getPassageText(passage: string): Promise<string> {
    const url = this.getPassageQueryBaseUrl(passage) + '&include-footnotes=false&include-audio-link=false&audio-format=mp3&include-passage-references=false';
    const response = await fetch(url);
    return response.text();
  }

  async getPassageAudio(passage: string): Promise<string> {
    const url = this.getPassageQueryBaseUrl(passage) + '&output-format=mp3';
    const response = await fetch(url);

    return response.url;
  }
}