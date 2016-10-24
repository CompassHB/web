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
  constructor(private key = '') { }

  async getRecentImages({offset = 0, limit = 12}): Promise<SmugmugImagesResponse> {
    // Return a hardcoded result if a key is not available...
    if (!this.key) {
      return {
        Image: [
          {
            "Uri": "/api/v2/image/TNQB7w8-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-TNQB7w8",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-TNQB7w8/0/Th/0020-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:13+00:00",
          },
          {
            "Uri": "/api/v2/image/FHvdN4G-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-FHvdN4G",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-FHvdN4G/0/Th/0019-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:11+00:00",
          },
          {
            "Uri": "/api/v2/image/fDFv8pN-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-fDFv8pN",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-fDFv8pN/0/Th/0018-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:10+00:00",
          },
          {
            "Uri": "/api/v2/image/4wnn85w-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-4wnn85w",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-4wnn85w/0/Th/0017-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:09+00:00",
          },
          {
            "Uri": "/api/v2/image/cwmk66f-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-cwmk66f",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-cwmk66f/0/Th/0016-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:10+00:00",
          },
          {
            "Uri": "/api/v2/image/T6RqRQ5-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-T6RqRQ5",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-T6RqRQ5/0/Th/0015-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:08+00:00",
          },
          {
            "Uri": "/api/v2/image/TCjFwZ8-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-TCjFwZ8",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-TCjFwZ8/0/Th/0014-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:08+00:00",
          },
          {
            "Uri": "/api/v2/image/nTjR2hJ-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-nTjR2hJ",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-nTjR2hJ/0/Th/0012-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:11+00:00",
          },
          {
            "Uri": "/api/v2/image/j2pc8tH-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-j2pc8tH",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-j2pc8tH/0/Th/0013-Th.jpg",
            "LastUpdated": "2016-08-03T17:10:07+00:00",
          },
          {
            "Uri": "/api/v2/image/5k4cgbK-0",
            "WebUri": "https://compasshb.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-5k4cgbK",
            "ThumbnailUrl": "https://photos.smugmug.com/PhotoArchive/Baptisms/Baptisms-July-31-2016/i-5k4cgbK/0/Th/0007-Th.jpg",
            "LastUpdated": "2016-08-03T17:09:41+00:00",
          }
        ],
        Pages: {
          Total: 10,
        },
      };
    }

    const url = `https://www.smugmug.com/api/v2/user/compasshb!recentimages?APIKey=${this.key}&start=${offset + 1}&count=${limit}`;
    console.log(`Fetching resource: ${url}`);
    const response = await fetch(url, {
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
