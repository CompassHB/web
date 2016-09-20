import fetch from 'node-fetch';

export interface SmugmugImage {
  Uri: string; // api url to image
  LastUpdated: string; // absolute date-time
  ThumbnailUrl: string; // url to thumbnail image
  WebUri: string; // url for viewing image on smugmug
}

export interface SmugmugImagesResponse {
  Pages: {
    Total: number,
  };

  Image: Array<SmugmugImage>;
}

export class Smugmug {
  constructor(private key: string) {}

  async getRecentImages({offset = 0, limit = 12}): Promise<SmugmugImagesResponse> {
    const response = await fetch(`https://www.smugmug.com/api/v2/user/compasshb!recentimages?APIKey=${this.key}&start=${offset + 1}&count=${limit}`, {
      headers: {
        "Accept": "application/json",
      },
    });

    const json: any = await response.json();

    if (response.status >= 400) {
      throw new Error(json["Message"]);
    }

    return json["Response"];
  }
}