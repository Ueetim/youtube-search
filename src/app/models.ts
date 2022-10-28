export interface Video {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
      // default: {
      //     url: https://i.ytimg.com/vi/BWZ5nIocB0E/default.jpg,
      //     width: 120,
      //     height: 90
      // },
      medium: {
          url: string;
          width: number;
          height: number;
      },
      // high: {
      //     url: https://i.ytimg.com/vi/BWZ5nIocB0E/hqdefault.jpg,
      //     width: 480,
      //     height: 360
      // }
  },
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface APIResponse<T> {
  snippets: Array<T>;
}
