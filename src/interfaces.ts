export interface IChannel {
  avatar: IImageInfo[];
  badges: {
    type: BadgeType;
    text: string;
  }[];
  artistBio: string;
  banner: {
    desktop: IImageInfo[];
    mobile: IImageInfo[];
    tv: IImageInfo[];
  };
  canonicalChannelUrl: string;
  channelId: string;
  country: string;
  description: string;
  hasBusinessEmail: boolean;
  joinedDate: Date;
  joinedDateText: string;
  keywords: string[];
  links: ILinkInfo[];
  stats: {
    subscribers: number;
    subscribersText: string;
    videos: number;
    videosText: string;
    views: number;
  };
  title: string;
  username: string;
}

export interface IVideo {
  author: {
    avatar: IImageInfo[];
    badges: {
      type: BadgeType;
      text: string;
    }[];
    canonicalChannelUrl: string;
    channelId: string;
    stats: {
      subscribers: number;
      subscribersText: string;
    };
    title: string;
  };
  category: string;
  description: string;
  isLiveContent: boolean;
  keywords: string[];
  lengthSeconds: number;
  publishedDate: Date;
  stats: {
    comments: number;
    likes: number;
    views: number;
  };
  superTitle: {
    items: string[];
  };
  thumbnails: IImageInfo[];
  title: string;
  videoId: string;
}

export enum BadgeType {
  VERIFIED = 'VERIFIED_CHANNEL',
  ARTIST = 'OFFICIAL_ARTIST_CHANNEL',
}

interface IImageInfo {
  height: number;
  width: number;
  url: string;
}
interface ILinkInfo {
  icon: string;
  targetUrl: string;
  title: string;
}
