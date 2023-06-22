import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getChannel, getVideo } from '../api';
import Badge from './Badges';
import { formatNumber, videoLength } from '../../../util';

type Props = {
  videoId: string | null;
};
const Container = ({ videoId }: Props) => {
  const videoQuery = useQuery({
    staleTime: 1000 * 60 * 60 * 24, // 24h
    queryKey: [`video`, videoId],
    queryFn: async () => {
      const data = await getVideo(videoId!);
      return data;
    },
    enabled: !!videoId,
  });
  const channelQuery = useQuery({
    staleTime: 1000 * 60 * 60 * 24, // 24h
    queryKey: [`channel`, videoQuery.data?.author.channelId || ''],
    queryFn: async () => {
      const data = await getChannel(videoQuery.data!.author.channelId);
      return data;
    },
    enabled: videoQuery.isSuccess, // Only run if video query is successful
  });

  return (
    <>
      <div id="ytinfo-container">
        {(videoQuery.isLoading || channelQuery.isLoading) && (
          <p>Loading {videoQuery.isLoading ? 'video' : 'channel'}...</p>
        )}
        {(videoQuery.isError || channelQuery.isError) && (
          <p>
            ERROR:{' '}
            {videoQuery.isError
              ? videoQuery.error!.toString()
              : channelQuery.error!.toString()}
            ...
          </p>
        )}
        {channelQuery.isSuccess && (
          <>
            <div id="ytinfo-header">
              <img
                id="ytinfo-banner"
                src={channelQuery.data!.banner.desktop[0].url}
                alt={`YouTube Banner of Channel ${
                  channelQuery.data!.title
                } + "."`}
              />
              <div>
                <div id="ytinfo-channel">
                  <div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <img
                        id="ytinfo-avatar"
                        height={channelQuery.data!.avatar[0].height}
                        width={channelQuery.data!.avatar[0].width}
                        src={channelQuery.data!.avatar[0].url}
                        alt={`Avatar of channel ${
                          channelQuery.data!.title
                        } + "."`}
                      />
                      <div>
                        <h1 className="ytinfo-name">
                          {videoQuery.data!.author.title}{' '}
                          {channelQuery.data!.badges.length && (
                            <span
                              style={{
                                marginLeft: '0.5rem',
                              }}
                            >
                              <Badge type={channelQuery.data!.badges[0].type} />
                            </span>
                          )}
                        </h1>
                        {/* owner-sub-count is a style from the original web app */}
                        <p id="owner-sub-count">
                          {channelQuery.data!.stats.subscribersText}
                        </p>
                      </div>
                    </div>
                  </div>
                  <h2 className="right">
                    {channelQuery.data!.joinedDateText}{' '}
                  </h2>
                </div>
                <div className="ytinfo-columns">
                  {channelQuery.data!.country && (
                    <>
                      <p>Country: {channelQuery.data!.country}</p>
                    </>
                  )}
                  <p>{channelQuery.data!.stats.videosText}</p>
                  <p>
                    {formatNumber(channelQuery.data!.stats.views)} channel views
                  </p>
                </div>
                <div>
                  <h2 className="pad">Channel Tags</h2>
                  <div className="ytinfo-keywords">
                    {channelQuery.data!.keywords.map((keyword) => (
                      <span className="ytinfo-keyword" key={keyword}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="ytinfo-video">
                    <img
                      className="ytinfo-thumbnail"
                      src={videoQuery.data!.thumbnails[0].url}
                      alt={`Thumbnail of video ${videoQuery.data!.title} + "."`}
                    />
                    <div>
                      <h1 className="ytinfo-name">{videoQuery.data!.title}</h1>
                      <div id="info bold">
                        <p>
                          {formatNumber(videoQuery.data!.stats.views)} views
                        </p>
                        <p>
                          Published on{' '}
                          {videoQuery.data!.publishedDate.toString()}
                        </p>

                        <p>
                          {videoLength(videoQuery.data!.lengthSeconds)} long
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="pad">Tags</h2>
                    <div className="ytinfo-keywords">
                      {videoQuery.data!.keywords.map((keyword) => (
                        <span className="ytinfo-keyword" key={keyword}>
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Container;
